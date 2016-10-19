/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

var monkey={
  name: 'Monkey1',
  species: 'Monkey',
  foodsEaten: ["Banana", "Burger", "Hot Dog"],
  introduction: function(){

    alert()
  }
  eatSomething: function(moreFood){
    this.foodsEaten.push(moreFood);
  }
}
console.log(monkey.foodsEaten);
monkey.eatSomething("BANANAS");
console.log(monkey.foodsEaten);


var person = {
     species: "human",
     legs: 2,
     arms: 2,
     name: "John Doe",
     age: 150,
     eyeColor: "Blue",
     languages: [ "Javascript", "Ruby", "HTML", "CSS"],
     getOlder: function(){
       this.age+= 1;
     },
     addLanguage: function(language_name){
      this.languages.push(language_name);
     }

};

console.log(person.languages);
person.addLanguage("SASS");
console.log(person.languages);


var Person = function(full_name, years){

}

var Monkey = function(param1, param2){
  this.name = param1,
  this.species = param2
}

var monkey1 = new Monkey("Timon", "Meerkat")
var monkey2 = new Monkey("Pumba", "Hog")


var Person = function(name, age){
     this.name = name
     this.age = age,
     this.species = "human",
     this.getOlder: function(){
       this.age+= 1;
     }
}

var person1 = new Person("John Doe", 150);
var person2 = new Person("Jane Smith", 100);
