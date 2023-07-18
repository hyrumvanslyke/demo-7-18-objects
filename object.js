let person = {
    firstName: 'Hyrum',
    lastName: 'Van Slyke',
    age: 'almost 21'
}// object of person
console.log(person.firstName)
console.log(person['firstName'])

let meal = {
    appetizer: 'Jalepeno Poppers',
    entree: 'Shrimp Scampi',
    dessert: 'Ice Cream',
    drink: 'Dr.Pepper'
}// object of a meal I came up with

let{appetizer: app} = meal// destructuring and renaming
console.log(app)

let{entree, dessert} = meal// destructuring

console.log(entree)
console.log(dessert)

let bestDessertEver= meal.dessert
console.log(bestDessertEver)// can save it too a new variable

for(key in person){// for in loop to run through an object
    // console.log(key)
    // console.log(Object.values(person))
    console.log(person[key])
}
let meal2 ={...meal}
console.log(meal2)// greating a new meal using spread operator(...) to copy meal onto meal2


meal.togo = 'chicken nuggies'
console.log(meal)// adding properties

meal2.togo = meal.togo
console.log(meal2)// adding properties using another object

delete meal2.togo
console.log(meal2)// deleting property

/// CLASSES
class Pet{
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age
    }
    greeting(){
        console.log(`Hi my name is ${this.name} and I am a ${this.age} year old ${this.breed}`)
    }
}

let pet1 = new Pet('Macy', 'shorthair tabby', 3)
console.log(pet1.name)

let pet2 = new Pet('Gogi', 'tuxedo', 14)
console.log(pet2.name)

pet1.greeting()
pet2.greeting()

class Dog extends Pet{// child clas for pet named Dog
    constructor(name, breed, age, barkCount){
        super(name, breed, age)
        this.barks = barkCount
        this.isGoodBoy = true
    }
    speak(){
        this.barks += 3
        console.log('SQUIRREL')
    }

}

let dog1 = new Dog('Lupin', 'pitbull mix', 3, 0)
dog1.greeting()// we inherit greeting
dog1.speak()
dog1.speak()
dog1.speak()
console.log(dog1.barks)
console.log(dog1.isGoodBoy)