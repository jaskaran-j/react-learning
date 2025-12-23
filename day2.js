let score = 0;
const checkWinner = (score) => {
    if(score >= 10){
        return "Steve Wins!";

    }
    else{
        return "Steve loses.";
    }
}

// more better professional version
const checkWinnerBetter = (score) => {
    return score >= 10 ? "Steve Wins!" : "Steve loses";

}

// checking age if adult or not
const checkAge = (age) => age >= 18 ? "Adult" : "Minor";

// using bbooleans to check is eligible to drive
// must be adult (>=18) or must have a licence
const canDrive = (age, hasLicence) => age >= 18 && hasLicence ? "Can Drive" : "Can't Drive";



// using switch statement to give price of a fruit then given as input
const getPrice = (fruit) => {
    switch(fruit){
        case "apple":
            return "$1";
        case "banana":
            return "$0.50";
        case "mango":
            return "$2";
        default: 
            return "unknown";
    }
};
