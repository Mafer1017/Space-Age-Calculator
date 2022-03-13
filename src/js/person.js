export default class Person {
  constructor (name, earthAge, lifeExpectancy) {
    this.name = name;
    this.earthAge = earthAge;
    this.lifeExpectancy = lifeExpectancy;
    this.yearsOnEarth;
  }


  mercuryConverter() {
  this.mercuryAge = parseInt(this.earthAge / .24);
  }

  venusConverter() {
    this.venusAge = parseInt(this.earthAge / .62);
  }
  
  marsConverter() {
    this.marsAge = parseInt(this.earthAge / 1.88);
  }

  jupiterConverter() {
    this.jupiterAge = parseInt(this.earthAge / 11.86);
  }

  earthExpectancy() {
    let differenceOnEarth = this.lifeExpectancy - this.earthAge;
    if (differenceOnEarth > 0) {
      this.yearsOnEarth = parseInt(this.lifeExpectancy - this.earthAge)
    } else {
      this.yearsOnEarth = parseInt(this.earthAge - this.lifeExpectancy)
    }
  }
}
