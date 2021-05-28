// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeed = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
let milesPerKm = 0.621;

// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log( "ShuttleName type is " + typeof shuttleName );
console.log( "ShuttleSpeed type is " + typeof shuttleSpeed );
console.log( "distanceToMarsKm type is " + typeof distanceToMarsKm );
console.log( "distanceToMoonKm type is " + typeof distanceToMoonKm );
console.log( "milesPerKm type is " + typeof milesPerKm );

let milesToMars = distanceToMarsKm * milesPerKm;
//console.log( "miles To Mars = " + milesToMars );

let hoursToMars = milesToMars / shuttleSpeed;
//console.log( "hours To Mars = " + hoursToMars );

let daysToMars = hoursToMars / 24;

console.log( shuttleName + " will take " + Math.floor(daysToMars) + " days to reach Mars." );

// Code your solution to exercises 3 and 4 here:

// Code your solution to exercise 5 here:
