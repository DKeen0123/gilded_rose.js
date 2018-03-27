describe('Item', () => {
  let item;

  beforeEach(() => {
    bread = new Item('Bread', 10, 30);
  });

  it('has a name', () => {
    expect(bread.name).toEqual('Bread');
  });

  it('has a sellIn', () => {
    expect(bread.sellIn).toEqual(10);
  });

  it('has a quality rating', () => {
    expect(bread.quality).toEqual(30);
  });
});
