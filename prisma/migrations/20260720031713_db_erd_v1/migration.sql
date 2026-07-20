-- CreateTable
CREATE TABLE `products` (
    `id` VARCHAR(191) NOT NULL,
    `categoryId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL,
    `brand` VARCHAR(100) NULL,
    `model` VARCHAR(100) NULL,
    `image` VARCHAR(500) NULL,
    `description` TEXT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `products_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `platforms` (
    `id` VARCHAR(191) NOT NULL,
    `code` VARCHAR(50) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `logo` VARCHAR(500) NULL,
    `website` VARCHAR(255) NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `platforms_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `creators` (
    `id` VARCHAR(191) NOT NULL,
    `platformId` VARCHAR(191) NOT NULL,
    `creatorId` VARCHAR(100) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `profileUrl` VARCHAR(500) NULL,
    `followers` INTEGER NULL DEFAULT 0,
    `avatar` VARCHAR(500) NULL,
    `verified` BOOLEAN NOT NULL DEFAULT false,
    `lastSync` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `creators_platformId_creatorId_key`(`platformId`, `creatorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_platforms` (
    `id` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `platformId` VARCHAR(191) NOT NULL,
    `platformProductId` VARCHAR(100) NOT NULL,
    `shopId` VARCHAR(100) NULL,
    `url` TEXT NOT NULL,
    `thumbnail` TEXT NULL,
    `currentPrice` DECIMAL(15, 2) NOT NULL,
    `originalPrice` DECIMAL(15, 2) NULL,
    `discountPercent` DECIMAL(5, 2) NULL,
    `soldCount` INTEGER NOT NULL DEFAULT 0,
    `rating` DECIMAL(3, 2) NULL,
    `reviewCount` INTEGER NOT NULL DEFAULT 0,
    `stock` INTEGER NOT NULL DEFAULT 0,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `lastSync` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `product_platforms_productId_platformId_key`(`productId`, `platformId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `price_histories` (
    `id` VARCHAR(191) NOT NULL,
    `productPlatformId` VARCHAR(191) NOT NULL,
    `price` DECIMAL(15, 2) NOT NULL,
    `originalPrice` DECIMAL(15, 2) NULL,
    `discountPercent` DECIMAL(5, 2) NULL,
    `currency` VARCHAR(10) NOT NULL DEFAULT 'VND',
    `capturedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `commission_histories` (
    `id` VARCHAR(191) NOT NULL,
    `productPlatformId` VARCHAR(191) NOT NULL,
    `commissionRate` DECIMAL(5, 2) NOT NULL,
    `commissionAmount` DECIMAL(15, 2) NOT NULL,
    `campaign` VARCHAR(255) NULL,
    `capturedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `videos` (
    `id` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `platformId` VARCHAR(191) NOT NULL,
    `creatorId` VARCHAR(191) NULL,
    `videoId` VARCHAR(100) NOT NULL,
    `title` VARCHAR(500) NOT NULL,
    `url` TEXT NOT NULL,
    `thumbnail` TEXT NULL,
    `duration` INTEGER NULL,
    `views` INTEGER NOT NULL DEFAULT 0,
    `likes` INTEGER NOT NULL DEFAULT 0,
    `comments` INTEGER NOT NULL DEFAULT 0,
    `shares` INTEGER NOT NULL DEFAULT 0,
    `publishedAt` DATETIME(3) NULL,
    `capturedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trend_scores` (
    `id` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `googleScore` DECIMAL(5, 2) NULL,
    `tiktokScore` DECIMAL(5, 2) NULL,
    `shopeeScore` DECIMAL(5, 2) NULL,
    `videoScore` DECIMAL(5, 2) NULL,
    `priceScore` DECIMAL(5, 2) NULL,
    `commissionScore` DECIMAL(5, 2) NULL,
    `competitionScore` DECIMAL(5, 2) NULL,
    `growthScore` DECIMAL(5, 2) NULL,
    `finalScore` DECIMAL(5, 2) NOT NULL,
    `recommendation` TEXT NULL,
    `calculatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `keywords` (
    `id` VARCHAR(191) NOT NULL,
    `keyword` VARCHAR(255) NOT NULL,
    `categoryId` VARCHAR(191) NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `keywords_keyword_key`(`keyword`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `keyword_histories` (
    `id` VARCHAR(191) NOT NULL,
    `keywordId` VARCHAR(191) NOT NULL,
    `searchVolume` INTEGER NOT NULL DEFAULT 0,
    `growthPercent` DECIMAL(5, 2) NULL,
    `trendDirection` VARCHAR(20) NULL,
    `capturedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `keyword_histories_keywordId_capturedAt_idx`(`keywordId`, `capturedAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `watch_lists` (
    `id` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `priority` INTEGER NOT NULL DEFAULT 1,
    `note` TEXT NULL,
    `targetPrice` DECIMAL(15, 2) NULL,
    `notifyWhenTrend` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `watch_lists_productId_key`(`productId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `crawlers` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `platformId` VARCHAR(191) NOT NULL,
    `cron` VARCHAR(100) NOT NULL,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `description` TEXT NULL,
    `lastRunAt` DATETIME(3) NULL,
    `lastStatus` VARCHAR(50) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `crawl_logs` (
    `id` VARCHAR(191) NOT NULL,
    `crawlerId` VARCHAR(191) NOT NULL,
    `status` VARCHAR(50) NOT NULL,
    `totalRecord` INTEGER NOT NULL DEFAULT 0,
    `duration` INTEGER NULL,
    `message` TEXT NULL,
    `startedAt` DATETIME(3) NOT NULL,
    `finishedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `crawl_logs_crawlerId_startedAt_idx`(`crawlerId`, `startedAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `daily_reports` (
    `id` VARCHAR(191) NOT NULL,
    `reportDate` DATETIME(3) NOT NULL,
    `topProducts` JSON NULL,
    `topKeywords` JSON NULL,
    `summary` TEXT NULL,
    `recommendation` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `daily_reports_reportDate_key`(`reportDate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `creators` ADD CONSTRAINT `creators_platformId_fkey` FOREIGN KEY (`platformId`) REFERENCES `platforms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_platforms` ADD CONSTRAINT `product_platforms_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_platforms` ADD CONSTRAINT `product_platforms_platformId_fkey` FOREIGN KEY (`platformId`) REFERENCES `platforms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `price_histories` ADD CONSTRAINT `price_histories_productPlatformId_fkey` FOREIGN KEY (`productPlatformId`) REFERENCES `product_platforms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commission_histories` ADD CONSTRAINT `commission_histories_productPlatformId_fkey` FOREIGN KEY (`productPlatformId`) REFERENCES `product_platforms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `videos` ADD CONSTRAINT `videos_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `videos` ADD CONSTRAINT `videos_platformId_fkey` FOREIGN KEY (`platformId`) REFERENCES `platforms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `videos` ADD CONSTRAINT `videos_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `creators`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trend_scores` ADD CONSTRAINT `trend_scores_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `keywords` ADD CONSTRAINT `keywords_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `keyword_histories` ADD CONSTRAINT `keyword_histories_keywordId_fkey` FOREIGN KEY (`keywordId`) REFERENCES `keywords`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `watch_lists` ADD CONSTRAINT `watch_lists_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `crawlers` ADD CONSTRAINT `crawlers_platformId_fkey` FOREIGN KEY (`platformId`) REFERENCES `platforms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `crawl_logs` ADD CONSTRAINT `crawl_logs_crawlerId_fkey` FOREIGN KEY (`crawlerId`) REFERENCES `crawlers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
