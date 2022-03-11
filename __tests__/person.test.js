import Person from './../src/js/person.js'

describe('Person', () => {

  test('should correctly create a Person object with name and age relative to Earth', () => {
    const person = new Person("Buzz", 20);
    expect(person.name).toEqual("Buzz")
    expect(person.earthAge).toEqual(20);
  });

});

describe('mercuryConverter', () => {

  test('should correctly convert the users Earth age to their age relative to Mercury', () => {
    const person = new Person("Buzz", 20);
    person.mercuryConverter();
    expect(person.mercuryAge).toEqual(83)
  });

});

describe('venusConverter', () => {

  test('should correctly convert the users Earth age to their age relative to Venus', () => {
    const person = new Person("Buzz", 20);
    person.venusConverter();
    expect(person.venusAge).toEqual(32)
  });

});

describe('marsConverter', () => {

  test('should correctly convert the users Earth age to their age relative to Mars', () => {
    const person = new Person("Buzz", 20);
    person.marsConverter();
    expect(person.marsAge).toEqual(10)
  });

});