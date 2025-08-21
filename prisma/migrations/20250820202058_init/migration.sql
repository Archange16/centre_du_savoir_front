-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('ADMIN', 'APPRENANT');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "role" "public"."Role" NOT NULL DEFAULT 'APPRENANT';

-- CreateTable
CREATE TABLE "public"."Formation" (
    "id" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Formation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Module" (
    "id" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "ordre" INTEGER NOT NULL,
    "formationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Titre" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "ordre" INTEGER NOT NULL,
    "moduleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Titre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."FormationAssignment" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "formationId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FormationAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Progression" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "titreId" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Progression_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Module" ADD CONSTRAINT "Module_formationId_fkey" FOREIGN KEY ("formationId") REFERENCES "public"."Formation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Titre" ADD CONSTRAINT "Titre_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "public"."Module"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FormationAssignment" ADD CONSTRAINT "FormationAssignment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FormationAssignment" ADD CONSTRAINT "FormationAssignment_formationId_fkey" FOREIGN KEY ("formationId") REFERENCES "public"."Formation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Progression" ADD CONSTRAINT "Progression_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Progression" ADD CONSTRAINT "Progression_titreId_fkey" FOREIGN KEY ("titreId") REFERENCES "public"."Titre"("id") ON DELETE CASCADE ON UPDATE CASCADE;
