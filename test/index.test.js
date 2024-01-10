const {
  fetchProductsData,
  setProductsCards,
  convertToRupiah,
  countDiscount,
} = require("../src/index.js");
const cartData = require("../src/data/cart.js");

const { fetchCartsData } = require('../src/dataService');
jest.mock('../src/dataService', () => ({
  __esModule: true,
  ...jest.requireActual('../src/dataService'),
  fetchCartsData: jest.fn(),
}));

describe('Product API Testing', () => {
  test('Test Case 1: should return product data with id 1', async () => {
    const productData = await fetchProductsData(1);
    expect(productData.id).toBe(1);
  });

  test('Test Case 2: should check products.length with limit', async () => {
    const productData = await fetchProductsData();
    expect(productData.products.length).toBeLessThanOrEqual(30);
  });

  test('Test Case 3: should handle error for invalid product id', async () => {
    const invalidProductId = 'invalidId';
    const productData = await fetchProductsData(invalidProductId);
    expect(productData).toEqual({});
  });
});

describe('Cart API Testing', () => {
  test('should compare total cart items with length of fetched data', async () => {
    fetchCartsData.mockResolvedValue(cartData.carts);

    const cartsData = await fetchCartsData();

    const totalItems = cartsData.length;
    const expectedTotal = cartData.total;
    expect(totalItems).toBe(expectedTotal);
  });
});

let productsData;

beforeAll(async () => {
  productsData = await fetchProductsData();
});

describe("Product Utility Testing", () => {
  describe("convertToRupiah", () => {
    test("should convert 100 dollars into rupiah", () => {
      const priceInRupiah = convertToRupiah(100);
      expect(priceInRupiah).toMatch(/Rp\s1\.543\.600,\d{2}/);
      expect(typeof priceInRupiah).toBe("string");
    });

    test("should convert 1000 dollars into rupiah", () => {
      const priceInRupiah = convertToRupiah(1000);
      expect(priceInRupiah).toMatch(/Rp\s15\.436\.000,\d{2}/);
    });
  });

  test("should calculate discount correctly", () => {
    const discountedPrice1 = countDiscount(100000, 20);
    expect(discountedPrice1).toBe(80000);

    const discountedPrice2 = countDiscount(75000, 10);
    expect(discountedPrice2).toBe(67500);
  });

  describe("setProductsCards", () => {
    test("it should return an array of products with specific keys", () => {
      const productsCards = setProductsCards(productsData.products);
      const firstProductKeys = Object.keys(productsCards[0]);
      const expectedKeys = ["price", "after_discount", "image"];
      expect(firstProductKeys).toEqual(expect.arrayContaining(expectedKeys));
    });
  });
});
