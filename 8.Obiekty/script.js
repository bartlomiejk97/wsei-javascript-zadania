// exercise 1
let car = {
  name: "BMW",
  age: 6,
  maxSpeed: 259,
  singpost: false
}
console.log(car.name);
console.log(car.age);
console.log(car.maxSpeed);
console.log(car.singpost);


// exercise 2
let car = {
  name: "BMW",
  age: 6,
  maxSpeed: 259,
  singpost: false,
  changeName: function newName(newName){
    this.name = newName;
}
}
car.changeName("Fiat");
console.log(car.name);
