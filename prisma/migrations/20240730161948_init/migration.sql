/*
  Warnings:

  - Added the required column `filePath` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "filePath" TEXT NOT NULL;
