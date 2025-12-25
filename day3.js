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
