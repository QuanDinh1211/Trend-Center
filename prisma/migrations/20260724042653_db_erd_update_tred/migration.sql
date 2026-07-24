/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `trend_scores` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `trend_scores_productId_key` ON `trend_scores`(`productId`);
