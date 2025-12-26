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
// name movei form being used. We can still change the data inside
movie.rating = 9;
movie.genres.push("Psychological");
console.log(movie);
