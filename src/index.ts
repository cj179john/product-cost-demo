import { ProductCostServiceImpl } from './services/productCostService';

const checkoutItems = ['A', 'A', 'A', 'A', 'B', 'B','B',  'C', 'C', 'C', 'D'];
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

const productCostService = new ProductCostServiceImpl(prices);

const totalCost = productCostService.getTotalCost(checkoutItems, prices, offers);

console.log(totalCost);