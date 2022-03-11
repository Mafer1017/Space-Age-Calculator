export default class Person {
  constructor (name, earthAge) {
    this.name = name;
    this.earthAge = earthAge;
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
}