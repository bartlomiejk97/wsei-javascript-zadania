// exercise 1
function Person(firstName,name,age,country,city,language)
{
  this.firstName = firstName;
  this.name = name;
  this.age= age;
  this.country = country;
  this.city = city;
  this.language = language;
  this.changeAge = function changeAge(Age)
  {
    this.age= Age;
  }
  this.changeCity = function changeCity(City)
  {
    this.city = City;
  }
  }


const Person1 = new Person("Bartek","Kocik","25","Polska","Krakow","polski");
//const Person2 = new Person("Kwadrat","Kocik","24","Polska","Piast","polski");
//const Person3 = new Person("Bartek","Kocik","23","Polska","Warszawa","polski");
//const Person4 = new Person("Bartek","Kocik","22","Polska","Gdansk","polski");
//onst Person5 = new Person("Bartek","Kocik","21","Polska","Lubinka","polski");
console.log(Person1);
//console.log(Person2);
//console.log(Person3);
//console.log(Person4);
//console.log(Person5);

Person1.changeAge(26);
Person1.changeCity("Budapeszt");
console.log(Person1);

// exercise 2
function Calculator() {
    this.memory = [];
    this.sum = function(a, b) {
        this.memory.push('Dodawanie');
        return a + b;
    }

    this.sub = function(a, b) {
        this.memory.push('Odejmowanie');
        return a - b;
    }

    this.mult = function(a, b) {
        this.memory.push('Monożenie');
        return a * b;
    }

    this.div = function(a, b) {
        this.memory.push('Dzielnie');
        return a / b;
    }

    this.clear = function() {
        this.memory = [];
    }

}

const calc = new Calculator();
console.log(calc.sum(2,5));
console.log(calc.sum(5,5));
console.log(calc.memory)
calc.clear();
console.log(calc.memory)


// exercise 3
function Game(){
    
   this.lastNumber = 0;
   this.number = 0;
   this.generator = null;
    
    this.startGenerator = () => {
        this.generator = setInterval(() => {
            this.lastNumber = this.number;
            this.number = Math.floor((Math.random() * 10) + 1);
            
            console.log(this.number);
            this.checkWin();
        }, 1000)
    }
    
    this.checkWin = () => {
        if(this.lastNumber + 5 === this.number){
            console.log("Wygrałeś");
            clearInterval(this.generator);
        }
    }
}

let game1 = new Game();
game1.startGenerator();
