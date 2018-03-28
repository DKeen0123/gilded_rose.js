describe('Shop', () => {
  let shop;
  let bread;
  let agedBrie;
  let sulfuras;
  let backstagePass;

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
      describe('and quality is 0', () => {
        beforeEach(() => {
          bread = {
            name: 'Bread',
            sellIn: 2,
            quality: 0
          };
          shop = new Shop([bread]);
          shop.updateQuality();
        });

        it("doesn't lower items quality if quality is 0", () => {
          expect(shop.items[0].quality).toEqual(0);
        });
      });

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

    describe('when it is an Aged Brie item', () => {
      describe('and sellIn >= 0', () => {
        beforeEach(() => {
          agedBrie = {
            name: 'Aged Brie',
            sellIn: 10,
            quality: 5
          };
          shop = new Shop([agedBrie]);
          shop.updateQuality();
        });

        it('increases quality by 1', () => {
          expect(shop.items[0].quality).toEqual(6);
        });

        describe('and quality is 50', () => {
          beforeEach(() => {
            agedBrie = {
              name: 'Aged Brie',
              sellIn: 10,
              quality: 50
            };
            shop = new Shop([agedBrie]);
            shop.updateQuality();
          });

          it('doesnt increase quality above 50', () => {
            expect(shop.items[0].quality).toEqual(50);
          });
        });
      });

      describe('and sellIn < 0', () => {
        beforeEach(() => {
          agedBrie = {
            name: 'Aged Brie',
            sellIn: -1,
            quality: 30
          };
          shop = new Shop([agedBrie]);
          shop.updateQuality();
        });

        it('increases quality by 2', () => {
          expect(shop.items[0].quality).toEqual(32);
        });
      });
    });

    describe('when it is a legendary item', () => {
      beforeEach(() => {
        sulfuras = {
          name: 'Sulfuras, Hand of Ragnaros',
          sellIn: 10,
          quality: 30
        };
        shop = new Shop([sulfuras]);
        shop.updateQuality();
      });

      it('doesnt increase or decrease in quality as it gets older', () => {
        expect(shop.items[0].quality).toEqual(30);
      });

      it('doesnt decrease sellIn value', () => {
        expect(shop.items[0].sellIn).toEqual(10);
      });
    });

    describe('when it is a backstage pass', () => {
      describe('and sellIn is > 10', () => {
        beforeEach(() => {
          backstagePass = {
            name: 'Backstage passes to a TAFKAL80ETC concert',
            sellIn: 12,
            quality: 13
          };
          shop = new Shop([backstagePass]);
          shop.updateQuality();
        });

        it('increases in quality by 1', () => {
          expect(shop.items[0].quality).toEqual(14);
        });
      });
    });
  });
});
