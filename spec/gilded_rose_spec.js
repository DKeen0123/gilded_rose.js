describe('Gilded Rose', function() {
  describe('Item', function() {
    let item;
    let gildedRose;

    beforeEach(function() {
      bread = new Item('Bread', 10, 30);
      gildedRose = new Shop([bread]);
    });

    it('has a name', function() {
      expect(bread.name).toEqual('Bread');
    });

    it('has a sellIn', function() {
      expect(bread.sellIn).toEqual(10);
    });
  });
});
