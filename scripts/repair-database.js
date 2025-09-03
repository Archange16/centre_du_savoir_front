// scripts/repair-database.js
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function repairDatabase() {
  try {
    console.log('🔧 Starting database repair...\n');

    // 1. Test de connexion
    console.log('1. Testing database connection...');
    try {
      await prisma.$queryRaw`SELECT 1`;
      console.log('   ✅ Database connection successful');
    } catch (error) {
      console.error('   ❌ Database connection failed:', error.message);
      console.log('   Please check your DATABASE_URL in environment variables');
      process.exit(1);
    }

    // 2. Vérifier la table User
    console.log('2. Checking User table...');
    try {
      const userTableExists = await prisma.$queryRaw`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = 'User'
        );
      `;
      
      if (userTableExists[0]?.exists) {
        console.log('   ✅ User table exists');
        
        // Compter les utilisateurs
        const userCount = await prisma.user.count();
        console.log(`   📊 User count: ${userCount}`);
        
      } else {
        console.log('   ❌ User table does not exist');
        console.log('   💡 Run: npx prisma migrate dev');
      }
    } catch (error) {
      console.error('   ❌ Error checking User table:', error.message);
    }

    // 3. Vérifier les autres tables
    console.log('3. Checking other tables...');
    const tables = ['Lead', 'Formation', 'Module', 'Titre', 'FormationAssignment', 'Progression'];
    
    for (const table of tables) {
      try {
        const tableExists = await prisma.$queryRaw`
          SELECT EXISTS (
            SELECT FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_name = ${table}
          );
        `;
        console.log(`   ${tableExists[0]?.exists ? '✅' : '❌'} ${table} table`);
      } catch (error) {
        console.log(`   ❌ ${table} table check failed`);
      }
    }

    // 4. Créer un utilisateur test si la table existe mais est vide
    try {
      const userCount = await prisma.user.count();
      if (userCount === 0) {
        console.log('4. Creating test user...');
        const hashedPassword = await hash('password123', 12);
        
        await prisma.user.create({
          data: {
            email: 'test@example.com',
            username: 'testuser',
            password: hashedPassword,
            role: 'ADMIN'
          }
        });
        console.log('   ✅ Test user created: test@example.com / password123');
      }
    } catch (error) {
      console.error('   ❌ Error creating test user:', error.message);
    }

    console.log('\n🎉 Repair process completed!');
    console.log('\n📋 Next steps:');
    console.log('   - Run: npx prisma generate');
    console.log('   - Run: npx prisma migrate dev');
    console.log('   - Run: npm run build');
    console.log('   - Test: http://localhost:3000/api/debug-users');

  } catch (error) {
    console.error('❌ Repair process failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

repairDatabase();