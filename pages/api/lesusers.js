// app/api/users/route.ts
import { NextResponse } from 'next/server'
import { db } from '../../lib/db'; // adapte ce chemin à ton projet



export async function GET() {
  try {
    const users = await db.user.findMany({
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    return NextResponse.json(users)
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des utilisateurs.' },
      { status: 500 }
    )
  }
}
