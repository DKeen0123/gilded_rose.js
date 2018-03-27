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
    beforeEach(() => {
      bread = new Item('Bread', 10, 8);
      shop = new Shop([bread]);
    });

    describe('when it is a normal item', () => {
      beforeEach(() => {
        shop.updateQuality();
      });
      it('degrades quality of item by 1', () => {
        expect(shop.items[0].quality).toEqual(7);
      });
    });
  });
});
