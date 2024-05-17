-- CreateEnum
CREATE TYPE "CarType" AS ENUM ('small', 'medium', 'large');

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "idAdmin" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "startRent" TIMESTAMP(3) NOT NULL,
    "finishRent" TIMESTAMP(3) NOT NULL,
    "carType" "CarType" NOT NULL DEFAULT 'small',

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_idAdmin_key" ON "Admin"("idAdmin");
