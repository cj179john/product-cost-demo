import {expect} from 'chai';
import {describe} from 'mocha';
import { ProductOffers } from '../models/ProductOffers';
import { ProductPrices, InputProductPrices } from '../models/ProductPrices';
import { ProductCostService, ProductCostServiceImpl } from './productCostService';

describe('Product Cost Service', () => {
  let items: string[];
  let offers: ProductOffers;
  let inputPrices: InputProductPrices;
  let prices: ProductPrices;
  let costService: ProductCostService;

  beforeEach(() => {
    items = ['A', 'A', 'A', 'A', 'B', 'B','B', 'C', 'C', 'C', 'D'];
    offers = {
      A: {
        itemNumber: 3,
        total: 11.99
      },
      B: {
        itemNumber: 2,
        total: 9.99
      }
    };

    inputPrices = {
      A: 5.343,
      B: 6,
      C: 20.12,
      D: 15.12
    };

    prices = new ProductPrices(inputPrices);
    costService = new ProductCostServiceImpl(prices);
  });

  it('should return total cost of the checkout items', () => {
    // Act
    const totalCost = costService.getTotalCost(items, prices, offers);

    // Assert
    expect(totalCost).to.be.equal('108.80');
  });

  it('should return 0 if items are empty', () => {
    // Arrange
    const emptyItems = [] as string[];

    // Act
    const totalCost = costService.getTotalCost(emptyItems, prices, offers);

    // Assert
    expect(totalCost).to.be.equal('0.00');
  });
});
