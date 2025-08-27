-- AlterTable
ALTER TABLE "public"."Formation" ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "public"."FormationAssignment" ADD COLUMN     "description" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "titre" TEXT;
