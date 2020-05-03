import { ProductCostServiceImpl } from './services/productCostService';
import { ProductPrices } from './models/ProductPrices';

const checkoutItems = ['A', 'A', 'A', 'A', 'B', 'B','B', 'C', 'C', 'C', 'D'];
const offers = {
  A: {
    itemNumber: 3,
    total: 130
  },
  B: {
    itemNumber: 2,
    total: 45
  }
};

const prices = {
  A: 50,
  B: 30,
  C: 20,
  D: 15
};

const productPrices = new ProductPrices(prices);
const productCostService = new ProductCostServiceImpl(productPrices);

const totalCost = productCostService.getTotalCost(checkoutItems, productPrices, offers);

console.log(totalCost);