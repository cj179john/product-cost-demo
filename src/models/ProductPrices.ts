export interface InputProductPrices {
  [key: string]: number;
}

export class ProductPrices {
  private prices: InputProductPrices;

  constructor(prices: InputProductPrices) {
    this.prices = prices;
  }

  public getPrice(productName: string) {
    return parseFloat(this.prices[productName].toFixed(2));
  }

  public getProductNames() {
    return Object.keys(this.prices);
  }
}
