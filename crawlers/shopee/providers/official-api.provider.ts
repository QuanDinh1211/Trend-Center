import {
    IShopeeProvider,
} from "./shopee.provider.interface";

import {
    ShopeeCrawlerResult,
    ShopeeProductRaw,
} from "../shopee.types";

export class OfficialApiProvider
    implements IShopeeProvider
{
    async fetchTrending(): Promise<ShopeeCrawlerResult> {

        /**
         * TODO
         * Shopee Official API
         */

        return {
            products: [],
        };
    }

    async fetchProducts(): Promise<ShopeeProductRaw[]> {

        return (
            await this.fetchTrending()
        ).products;

    }

    async fetchProduct(
        productId: string
    ): Promise<ShopeeProductRaw | null> {

        const products =
            await this.fetchProducts();

        return (
            products.find(
                x => x.productId === productId
            ) ?? null
        );

    }
}