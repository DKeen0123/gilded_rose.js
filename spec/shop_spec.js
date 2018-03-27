describe('Shop', () => {
  let shop;
  let bread;

  describe('#constructor', () => {
    beforeEach(() => {
      shop = new Shop();
    });

    it('initializes with an empty items array', () => {
      expect(shop.items).toEqual([]);
    });
  });

  describe('#updateQuality', () => {
    describe('when it is a normal item', () => {
      describe('and sellIn is >= 0', () => {
        beforeEach(() => {
          bread = {
            name: 'Bread',
            sellIn: 10,
            quality: 8
          };
          shop = new Shop([bread]);
          shop.updateQuality();
        });

        it('degrades quality of the item by 1', () => {
          expect(shop.items[0].quality).toEqual(7);
        });

        it('lowers the sellIn value of the item by 1', () => {
          expect(shop.items[0].sellIn).toEqual(9);
        });
      });

      describe('and sellIn date is < 0', () => {
        beforeEach(() => {
          bread = {
            name: 'Bread',
            sellIn: -1,
            quality: 8
          };
          shop = new Shop([bread]);
          shop.updateQuality();
        });

        it('lowers the quality by 2', () => {
          expect(shop.items[0].quality).toEqual(6);
        });
      });
    });
  });
});
