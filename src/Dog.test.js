import Dog from './Dog';

test('Dog.bark', () => {
  const testDog = new Dog('Test');
  expect(testDog.bark()).toBe('Wah wah, I am Test');
});
