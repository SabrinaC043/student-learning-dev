var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW


// method--unshift


constellations.unshift ("Canis major")
console.log (constellations);




// method--pop() think of it like pop it off the end-removes it from last position on list. 
//It says I am going to grab //
//this array value and remove it from the list.//


planets.pop()
console.log (planets);

//method--concatenation//
var galaxy= constellations.concat(planets)
console.log (galaxy);

var upperCased = star.toUpperCase();
console.log (upperCased);


