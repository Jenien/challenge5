/*
  Warnings:

  - Added the required column `updatedAt` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "startRent" DROP NOT NULL,
ALTER COLUMN "finishRent" DROP NOT NULL;
