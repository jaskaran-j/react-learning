// day 4 of learning react

// Objects
// key-value pairs that contain menaingful data, instead of loose
// variables that dont give any key information

const player = {
    name: "Steve",
    score: 500,
    badges: ["gold", "silver"],
    isActive: true
};
// here player has keys: name, score, bagdes(Array), isActive(boolean)
// and their specific values

// retrieving data
// we use . to get data
console.log(player.name);
console.log(player.isActive);

// or we can use Bracket Notation
console.log(player["badges"]);


// practice 
// create a movie object
const movie = {
    title: "Conjuring",
    year: 2025,
    rating: 7,
    genres: ["Horror", "Thriller"]
};
console.log(movie.title);

// objects are still mutablem since the const will only preserve the 
// name movie form being used. We can still change the data inside
movie.rating = 9;
movie.genres.push("Psychological");
console.log(movie);


// using 'this' keyword to use a value from the object itself
// for example: 
const p1 = {
    name: "Steve",
    score: 10,
    // Method Definition
    printStatus() {
        // We use 'this.score' to access our own data
        console.log("Current Score: " + this.score);
    }
};

p1.printStatus(); // Output: "Current Score: 0"

// practice question: 
// use the movie object and add a method "watch", 
// that tells which movie we are watching: "watching Conjuring"
const m = {
    title: "Conjuring",
    year: 2025,
    rating: 9,
    genre: ["Horror", "Thriller"],
    watch(){
        return `watching ${this.title} `
    }
}
console.log(m.watch());

// now creating an array of objects:
const movies = [
    {title: "Conjuring", rating: 9},
    {title: "Stranger Things", rating: 10}
];

// final test question:
// use forEach to iterate through movies and print "X has a rating of N" for each object
movies.forEach((m) => console.log(`${m.title} has a rating of ${m.rating}`));

// end of day 4