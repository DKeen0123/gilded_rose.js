describe('Shop', () => {
  let shop;

  describe('#constructor', () => {
    beforeEach(() => {
      shop = new Shop();
    });

    it('initializes with an empty items array', () => {
      expect(shop.items).toEqual([]);
    });
  });
});
