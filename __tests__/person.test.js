import Person from './../src/js/person.js'

describe('Person', () => {

  test('should correctly create a Person object with age relative to Earth', () => {
    const person = new Person();
    person.age();
    expect(person.age).toEqual(20);
  });

});