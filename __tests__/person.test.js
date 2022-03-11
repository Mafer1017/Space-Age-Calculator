import Person from './../src/js/person.js'

describe('Person', () => {

  test('should correctly create a Person object with name and age relative to Earth', () => {
    const person = new Person("Buzz", 20);
    expect(person.name)
    expect(person.earthAge).toEqual(20);
  });

});