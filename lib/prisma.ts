// lib/prisma.ts

import { PrismaClient } from "@prisma/client";

// Gestion d'une instance unique de Prisma (important en dev avec hot reload)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
