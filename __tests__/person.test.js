import Person from './../src/js/person.js'

describe('Person', () => {

  test('should correctly create a Person object with name, age relative to Earth, and life expectancy relative to Earth years', () => {
    const person = new Person("Buzz", 20, 75);
    expect(person.name).toEqual("Buzz")
    expect(person.earthAge).toEqual(20);
    expect(person.lifeExpectancy).toEqual(75);
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

describe('jupiterConverter', () => {

  test('should correctly convert the users Earth age to their age relative to Jupiter', () => {
    const person = new Person("Buzz", 20);
    person.jupiterConverter();
    expect(person.jupiterAge).toEqual(1)
  });

});

describe('earthExpectancy', () => {

  test('should correctly determine how many years the user has left to live on Earth', () => {
    const person = new Person("Buzz", 20, 75);
    person.earthExpectancy();
    expect(person.yearsOnEarth).toEqual(55)
  });
  test('should correctly determine how many years over life expectancy the inputted users age is in Earth Years.', () => {
    const person = new Person("Neil", 80, 75);
    person.earthExpectancy();
    expect(person.yearsOnEarth).toEqual(5)
  });

});

describe('mercuryExpectancy', () => {

  test('should correctly determine how many years the user has left to live on Mercury', () => {
    const person = new Person("Buzz", 20, 75);
    person.mercuryConverter();
    person.mercuryExpectancy();
    expect(person.yearsOnMercury).toEqual(229)
  });

});

describe('venusExpectancy', () => {

  test('should correctly determine how many years the user has left to live on Venus', () => {
    const person = new Person("Buzz", 20, 75);
    person.venusConverter();
    person.venusExpectancy();
    expect(person.yearsOnVenus).toEqual(88)
  });

});

describe('marsExpectancy', () => {

  test('should correctly determine how many years the user has left to live on Mars', () => {
    const person = new Person("Buzz", 20, 75);
    person.marsConverter();
    person.marsExpectancy();
    expect(person.yearsOnMars).toEqual(29)
  });

});

describe('jupiterExpectancy', () => {

  test('should correctly determine how many years the user has left to live on Jupiter', () => {
    const person = new Person("Buzz", 20, 75);
    person.jupiterConverter();
    person.jupiterExpectancy();
    expect(person.yearsOnJupiter).toEqual(5)
  });

});