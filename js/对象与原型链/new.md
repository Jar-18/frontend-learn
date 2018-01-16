function Person() {
  this.name = 'Teddy';
}
var person = new Person();
person.name

//Similar to
var person2 = new Object();
Person.call(person2);
person2.prototype = Person.prototype;
person2.name;

//But some differences
person instanceof Person //true
person2 instanceof Person //false



Person.prototype.lastName = 'Li';

Person.prototype.constructor === Person //true

Person.prototype.isPrototypeOf(person1) //true

Object.getPrototypeOf(person) === Person.prototype //true

person.hasOwnProperty('name') //true

person.hasOwnProperty('lastName') //false
person.hasOwnProperty('notExisted') //false

"name" in person
"lastName" in person //true



function hasPrototypeProperty(object, name) {
  return !object.hasOwnProperty(name) && (name in object);
}


for(let prop in person) {
  console.log(prop, person[prop]);
}
//name Teddy, lastName, Li