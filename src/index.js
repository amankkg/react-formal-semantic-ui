// @flow
import exp42 from './exp42'

class Person {
  constructor(age: number) {
    this.age = age
  }

  getAgeInExp = () => exp42('24');
}

export default Person
