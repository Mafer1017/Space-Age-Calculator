export default class Person {
  constructor (name, earthAge) {
    this.name = name;
    this.earthAge = earthAge;
  }


  mercuryConverter() {
  this.mercuryAge = parseInt(this.earthAge / .24);
  }

}