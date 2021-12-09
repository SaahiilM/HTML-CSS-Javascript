class Person {
  constructor() {
    this.type = "Human";
  }
  getName() {
    console.log("My " + this.type);
  }
}

let person = new Person();
person.getName();

class Male extends Person {
  random() {
    alert("I am annoying");
  }
}
let annoy = new Male();
annoy.random();
