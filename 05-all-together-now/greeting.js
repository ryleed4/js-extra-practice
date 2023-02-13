// Greeting
// Define a function greeting that accepts an optional string argument called name.
// greeting should return a personalized string if the name is present.
// Example:
// greeting('Sadie'); // => Hello Sadie!
// greeting(); // => Hello!

// YOUR CODE BELOW
function greeting(name){
    if(name) {
        return `Hello ${name}!`
    }
    else {
        return "Hello!"
    }
}
// Do not change the code below
module.exports = { greeting };
