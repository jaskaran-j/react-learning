// creating a to-do list aeeay and using loop to iterate throught the items
const todos = ["sleep", "eat", "code"];
for ( let i = 0; i < todos.length; i++){
    console.log(todos[i]);

}


// using enhanced for loop
for (const todo of todos){
    console.log(todo);
}

// functional loop
todos.forEach((todo) => {
    console.log(todo);
});




// continuing day 3 and moving onto day 4
// using .forEach() function to iterate through things
todos.forEach((todo) => {console.log(todo);})

todos.forEach((todo) => {
    console.log(`I need to ${todo}`);
})


// using .map
// forEach function just return something as a result, whereas
// .map transforms an array of data and return it as something,
// with changes to data

const number = [1,2,3];
const doubled = number.map((num) => {return num * 2;});
console.log(doubled);

// here it will take an array, make user-specified changes to it
// and store it somewhere

// practice
const prices = [10, 20, 30];
const salePrices = prices.map((num) => {return num/2;});
console.log(salePrices);

// we can make it cleaner it this way
// salePrices = prices.map(num => num/2);

// .filter method
// this method returns a new array that only contains items that
// pass some kind of test
// reaturn an array of things which return true on a test

const scores = [50, 90, 30, 100];
const passingScore = scores.filter(score => score>=50);
console.log(passingScore);

// practice ques
// using same salePrices array create exoensiveItems price>9
const expensiveItems = salePrices.filter(price => price>9);
console.log(expensiveItems);