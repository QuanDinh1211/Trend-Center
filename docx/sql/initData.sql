USE trend_center;

INSERT INTO categories (
    id,
    name,
    slug,
    icon,
    description,
    status,
    createdAt,
    updatedAt
)
VALUES
(UUID(), 'AI', 'ai', 'brain', 'Sản phẩm và công cụ AI', 'ACTIVE', NOW(), NOW()),
(UUID(), 'Camera', 'camera', 'camera', 'Camera và thiết bị an ninh', 'ACTIVE', NOW(), NOW()),
(UUID(), 'Livestream', 'livestream', 'video', 'Thiết bị livestream', 'ACTIVE', NOW(), NOW()),
(UUID(), 'Gia dụng', 'gia-dung', 'home', 'Đồ gia dụng thông minh', 'ACTIVE', NOW(), NOW()),
(UUID(), 'Laptop', 'laptop', 'laptop', 'Laptop và phụ kiện', 'ACTIVE', NOW(), NOW()),
(UUID(), 'Điện thoại', 'dien-thoai', 'smartphone', 'Điện thoại và phụ kiện', 'ACTIVE', NOW(), NOW()),
(UUID(), 'Gaming', 'gaming', 'gamepad', 'Gaming Gear', 'ACTIVE', NOW(), NOW()),
(UUID(), 'Thiết bị văn phòng', 'thiet-bi-van-phong', 'briefcase', 'Thiết bị văn phòng', 'ACTIVE', NOW(), NOW());

INSERT INTO platforms (
    id,
    code,
    name,
    website,
    logo,
    status,
    createdAt,
    updatedAt
)
VALUES
(UUID(),
    'SHOPEE',
    'Shopee',
    'https://shopee.vn',
    'shopee.png',
    'ACTIVE',
    NOW(),
    NOW()
),
(UUID(),
    'TIKTOK_SHOP',
    'TikTok Shop',
    'https://shop.tiktok.com',
    'tiktok.png',
    'ACTIVE',
    NOW(),
    NOW()
),
(UUID(),
    'LAZADA',
    'Lazada',
    'https://lazada.vn',
    'lazada.png',
    'ACTIVE',
    NOW(),
    NOW()
),
(UUID(),
    'AMAZON',
    'Amazon',
    'https://amazon.com',
    'amazon.png',
    'ACTIVE',
    NOW(),
    NOW()
),
(UUID(),
    '1688',
    '1688',
    'https://www.1688.com',
    '1688.png',
    'ACTIVE',
    NOW(),
    NOW()
);