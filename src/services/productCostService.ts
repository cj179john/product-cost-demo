import { ProductOffers } from '../models/ProductOffers';
import { ProductPrices } from '../models/ProductPrices';

export type CheckoutItems = string [];

export interface ProductCosts {
  [key: string]: {
    cost: number;
    count: number;
  };
}

export interface ProductCostService {
  getTotalCost(items: CheckoutItems, productPrices: ProductPrices, productOffers: ProductOffers): string;
}

export class ProductCostServiceImpl implements ProductCostService {
  private productCosts: ProductCosts = {};

  constructor(productPrices: ProductPrices) {
    productPrices.getProductNames().forEach(productName => this.productCosts[productName] = {cost: 0, count: 0});
  }

  private getOfferCost(itemName: string, itemCount: number, productOffers: ProductOffers) {
    if (!productOffers[itemName]) {
      return 0;
    }

    const offerCount = productOffers[itemName].itemNumber;
    const numberOfOffers = Math.floor(itemCount / offerCount);
    return (offerCount === itemCount) ? (productOffers[itemName].total * numberOfOffers) : 0;
  }

  public getTotalCost(items: CheckoutItems, productPrices: ProductPrices, productOffers: ProductOffers) {
    items.forEach(itemName => {

      this.productCosts[itemName].cost += productPrices.getPrice(itemName);
      this.productCosts[itemName].count += 1;

      const offerPrice = this.getOfferCost(itemName, this.productCosts[itemName].count, productOffers);

      if (offerPrice > 0) {
        this.productCosts[itemName].cost = offerPrice;
      }
    });

    return Object.values(this.productCosts).reduce((total, product) => total +=  product.cost, 0).toFixed(2);
  }
}
