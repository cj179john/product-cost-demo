export interface ProductOffer {
  itemNumber: number;
  total: number;
}

export interface ProductOffers {
  [key: string]: ProductOffer;
}