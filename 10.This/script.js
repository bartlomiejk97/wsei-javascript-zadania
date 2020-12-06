// exercise 1
function Person(name, lastname, age, country, city) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;

    this.showDetails = function () {
        console.log(`Person: ${this.name} ${this.lastname} age: ${this.age} country: ${this.country}, ${this.city}`);
    }

    this.addOneYear = function () {
        ++this.age;
    }
}

const person = new Person('Jan', 'Dzban', 25, 'Poland', 'Warsaw');
const person2 = new Person('Grzegorz', 'Orzech', 16, 'Poland', 'Warsaw');

person.showDetails();
person.addOneYear();
person.showDetails();

person.addOneYear();
person.addOneYear();
person.addOneYear();

person.showDetails();

person2.showDetails();
person2.addOneYear();
person2.showDetails();

person2.addOneYear();
person2.addOneYear();
person2.addOneYear();

person2.showDetails();


// exercise 2







function PersonAdvanced(name, last, age, country, city, language, dishes){
	this.name = name;
	this.last = last;
	this.age = age;
	this.country = country;
	this.city = city;
	this.dishes = dishes;
	
	this.logInfo = () => {
		for(let key in this){
			console.log(key + " : " + this[key]);
		}
	}
    
    this.addDish = (dish) => {
        this.dishes.push(dish);
    }
	
	this.increaseAge = () => {
		this.age++;
	}
}

let personAdvanced = new PersonAdvanced("Andrzej", "Kowalczyk", 18, "Polska", "Gdynia", "Polski", ["Gołąbki", "Kluski", "Pomidorowa"]);

personAdvanced.addDish("Zrazy");
personAdvanced.addDish("Rosół");

personAdvanced.logInfo();
