export default class Person {
  constructor (name, earthAge, lifeExpectancy) {
    this.name = name;
    this.earthAge = earthAge;
    this.mercuryAge;
    this.venusAge;
    this.marsAge;
    this.jupiterAge;
    this.lifeExpectancy = lifeExpectancy;
    this.yearsOnEarth;
    this.yearsOnMercury;
    this.yearsOnVenus;
    this.yearsOnMars;
    this.yearsOnJupiter;
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
      this.yearsOnEarth = parseInt(this.lifeExpectancy - this.earthAge);
    } else {
      this.yearsOnEarth = parseInt(this.earthAge - this.lifeExpectancy);
    }
  }

  mercuryExpectancy() {
    let differenceOnMercury = (this.lifeExpectancy / .24) - this.mercuryAge;
    if (differenceOnMercury > 0) {
      this.yearsOnMercury = parseInt((this.lifeExpectancy / .24)  - this.mercuryAge);
    } else {
      this.yearsOnMercury = parseInt(this.mercuryAge - (this.lifeExpectancy / .24));
    }
  }

  venusExpectancy() {
    let differenceOnVenus = (this.lifeExpectancy / .62) - this.venusAge;
    if (differenceOnVenus > 0) {
      this.yearsOnVenus = parseInt((this.lifeExpectancy / .62)  - this.venusAge);
    } else {
      this.yearsOnVenus = parseInt(this.venusAge - (this.lifeExpectancy / .62));
    }
  }

  marsExpectancy() {
    let differenceOnMars = (this.lifeExpectancy / 1.88) - this.marsAge;
    if (differenceOnMars > 0) {
      this.yearsOnMars = parseInt((this.lifeExpectancy / 1.88)  - this.marsAge);
    } else {
      this.yearsOnMars = parseInt(this.MarsAge - (this.lifeExpectancy / 1.88));
    }
  }

  jupiterExpectancy() {
    let differenceOnJupiter = (this.lifeExpectancy / 1.88) - this.jupiterAge;
    if (differenceOnJupiter > 0) {
      this.yearsOnJupiter = parseInt((this.lifeExpectancy / 1.88)  - this.jupiterAge);
    } else {
      this.yearsOnJupiter = parseInt(this.jupiterAge - (this.lifeExpectancy / 1.88));
    }
  }
}