// pages/api/debug-users.js
import { db } from '../../lib/db';

export default async function handler(req, res) {
  try {
    console.log('=== DEBUG USER API ===');
    
    // 1. Vérifier les variables d'environnement
    console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
    console.log('NODE_ENV:', process.env.NODE_ENV);
    
    // 2. Tester la connexion basique
    console.log('Testing basic connection...');
    try {
      const testResult = await db.$queryRaw`SELECT 1 as test`;
      console.log('Basic connection test:', testResult);
    } catch (dbError) {
      console.error('Basic connection failed:', dbError);
      return res.status(500).json({
        success: false,
        error: 'Database connection failed',
        message: dbError.message
      });
    }
    
    // 3. Vérifier si la table User existe
    console.log('Checking if User table exists...');
    try {
      const tableExists = await db.$queryRaw`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = 'User'
        );
      `;
      console.log('User table exists:', tableExists[0]?.exists);
    } catch (tableError) {
      console.error('Table check failed:', tableError);
    }
    
    // 4. Tester une requête simple
    console.log('Testing simple query...');
    try {
      const userCount = await db.user.count();
      console.log('User count:', userCount);
      
      const users = await db.user.findMany({
        take: 2,
        select: { id: true, email: true }
      });
      console.log('Sample users:', users);
      
      return res.status(200).json({
        success: true,
        userCount,
        sampleUsers: users,
        message: 'All tests passed successfully'
      });
      
    } catch (queryError) {
      console.error('Query failed:', queryError);
      return res.status(500).json({
        success: false,
        error: 'User query failed',
        message: queryError.message,
        code: queryError.code
      });
    }
    
  } catch (error) {
    console.error('Debug endpoint error:', error);
    return res.status(500).json({
      success: false,
      error: 'Debug failed',
      message: error.message
    });
  }
}