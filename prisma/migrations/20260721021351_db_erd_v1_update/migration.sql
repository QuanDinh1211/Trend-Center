/*
  Warnings:

  - You are about to alter the column `lastStatus` on the `crawlers` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `Enum(EnumId(5))`.

*/
-- AlterTable
ALTER TABLE `crawlers` MODIFY `lastStatus` ENUM('PENDING', 'RUNNING', 'SUCCESS', 'FAILED', 'PARTIAL') NULL DEFAULT 'RUNNING';

-- CreateIndex
CREATE INDEX `product_platforms_productId_idx` ON `product_platforms`(`productId`);

-- RenameIndex
ALTER TABLE `product_platforms` RENAME INDEX `product_platforms_platformId_fkey` TO `product_platforms_platformId_idx`;

-- RenameIndex
ALTER TABLE `products` RENAME INDEX `products_categoryId_fkey` TO `products_categoryId_idx`;

-- RenameIndex
ALTER TABLE `trend_scores` RENAME INDEX `trend_scores_productId_fkey` TO `trend_scores_productId_idx`;

-- RenameIndex
ALTER TABLE `videos` RENAME INDEX `videos_creatorId_fkey` TO `videos_creatorId_idx`;

-- RenameIndex
ALTER TABLE `videos` RENAME INDEX `videos_platformId_fkey` TO `videos_platformId_idx`;

-- RenameIndex
ALTER TABLE `videos` RENAME INDEX `videos_productId_fkey` TO `videos_productId_idx`;
