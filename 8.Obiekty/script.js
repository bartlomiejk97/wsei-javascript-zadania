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

// exercise 3
let newObject = {
  sum: 0,
  sumFunction: function(array)
  {
    array.forEach(item => this.sum += item);
  }
}


// exercise 4
let car = {
  name: "BMW",
  age: 12,
  fuel: "petrol"
}

for(let key in car)
  {
    console.log(key + " : " + car[key]);
  }
