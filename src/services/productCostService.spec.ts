import {expect, use} from 'chai';
import * as sinonChai from 'sinon-chai';
import {describe} from 'mocha';
import { ProductOffers } from '../models/ProductOffers';
import { ProductPrices } from '../models/ProductPrices';
import { ProductCostService, ProductCostServiceImpl } from './productCostService';

use(sinonChai);

describe('Product Cost Service', () => {
  let items: string[];
  let offers: ProductOffers;
  let prices: ProductPrices;
  let costService: ProductCostService;

  beforeEach(() => {
    items = ['A', 'A', 'A', 'A', 'B', 'B','B',  'C', 'C', 'C', 'D'];
    offers = {
      A: {
        itemNumber: 3,
        total: 130
      },
      B: {
        itemNumber: 2,
        total: 45
      }
    };
    prices = {
      A: 50,
      B: 30,
      C: 20,
      D: 15
    }

    costService = new ProductCostServiceImpl(prices);
  });

  it('should return total cost of the checkout items', () => {
    // Act
    const totalCost = costService.getTotalCost(items, prices, offers);

    // Assert
    expect(totalCost).to.be.equal(330);
  });
});


