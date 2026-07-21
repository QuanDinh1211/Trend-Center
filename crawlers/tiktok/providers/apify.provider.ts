import "dotenv";
import axios from "axios";
import { TikTokCrawlerResult, TikTokProductRaw } from "../tiktok.types";
import { ITikTokProvider } from "./tiktok.provider.interface";

export class ApifyProvider
  implements ITikTokProvider
{

  async fetchTrending(): Promise<TikTokCrawlerResult> {

        const url =
            "https://api.apify.com/v2/acts/clockworks~tiktok-scraper/run-sync-get-dataset-items";

        const response =
            await axios.post(
                url,
                {
                    hashtags: [
                        "tiktokshop",
                        "review",
                        "viral"
                    ],

                    resultsPerPage: 30
                },
                {
                    params: {
                        token:
                            process.env.APIFY_TOKEN
                    }
                }
            );

        const products: TikTokProductRaw[] = [];

        for (const item of response.data) {

            products.push({

                productId:
                    item.id,

                title:
                    item.text,

                description:
                    item.text,

                productUrl:
                    item.webVideoUrl,

                image:
                    item.covers?.default,

                soldCount: 0,

                price: 0,

                shopName:
                    item.authorMeta?.name,

                shopId:
                    item.authorMeta?.id,

                rating: 0,

                reviewCount: 0,

                commissionRate: 0,

                commissionAmount: 0,

            });

        }

        return {

            products,

            videos: [],

            creators: [],

        };

    }

  async fetchProducts() {

    return [];

  }

  async fetchProduct() {

    return null;

  }

}
