describe('#typeChecker', () => {
  let shop;
  let bread;

  beforeEach(() => {
    bread = {
      name: 'Bread',
      sellIn: 10,
      quality: 8
    };
    shop = new Shop([bread]);
  });

  it('takes an item as an argument and returns its name', () => {
    expect(shop.typeChecker(bread)).toEqual('Bread');
  });
});
