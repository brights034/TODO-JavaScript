

//*.push() used to push one or more parameters and "pushes" them onto the end of the array.*//

// Setup
const myArray = [["Akhil",[25, 15-09-1997], "a@gmail.com" ], ["Bright", [25, 22-05-1997], "b@gmail.com"],["Sreepadh",[25, 20-11-1997],"s@gmail.com"]];


myArray.push(["vibin"]);
console.log(myArray);

//*.pop() is used to pop a value off of the end of an array.*//
// Setup
const Array = [["John", 23], ["cat", 2]];


const removedFromArray = Array.pop();
//console.log(removedFromArray);
//console.log(Array);

//* .shift() removes the first element instead of the last.*//
// Setup
const det = [["John", 23], ["dog", 3]];

const removeddet = det.shift();
//console.log(removeddet);
//console.log(det);

//* .unshift() adds the element at the beginning of the array.*//
// Setup
const details = [["John", 23], ["dog", 3]];
details.shift();

// Only change code below this line
details.unshift(["Paul", 35]);
//console.log(details);