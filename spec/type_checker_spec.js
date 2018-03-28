describe('TypeChecker', () => {
  let typeChecker;
  let bread;

  beforeEach(() => {
    bread = {
      name: 'Bread',
      sellIn: 10,
      quality: 8
    };
    typeChecker = new typeChecker(bread);
  });

  it('takes an item as an argument and saves it as a property', () => {
    expect(typeChecker.item).toEqual(bread);
  });
});
