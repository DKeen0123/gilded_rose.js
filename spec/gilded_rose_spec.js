describe('Gilded Rose', function() {
  describe('Item', function() {
    let item;

    beforeEach(function() {
      bread = new Item('Bread', 10, 30);
    });

    it('has a name', function() {
      expect(bread.name).toEqual('Bread');
    });

    it('has a sellIn', function() {
      expect(bread.sellIn).toEqual(10);
    });

    it('has a quality rating', function() {
      expect(bread.quality).toEqual(30);
    });
  });
});
