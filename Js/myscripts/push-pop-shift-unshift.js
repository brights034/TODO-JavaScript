

//*.push() used to push one or more parameters and "pushes" them onto the end of the array.*//

// Setup
const myArray = [["Akhil",[25, "15-09-1997"], "a@gmail.com" ], ["Bright", [25, "22-05-1997"], "b@gmail.com"],["Sreepadh",[25, "20-11-1997"],"s@gmail.com"]];


// myArray.push(["vibin"]);
//  console.log(myArray);


//*.pop() is used to pop a value off of the end of an array.*//
// const removedFromArray = myArray.pop();
// // console.log(removedFromArray);
// // console.log(myArray);

// //* .shift() removes the first element instead of the last.*//
// const removefarray = myArray.shift();
// //console.log(removefarray);
// //console.log(myArray);

// // Setup
// // const det = [["John", 23], ["dog", 3]];

// //const removeddet = det.shift();
// //console.log(removeddet);
// //console.log(det);

// //* .unshift() adds the element at the beginning of the array.*//
// // Setup

const details = myArray.shift();
//details.shift();
console.log(details);
console.log(myArray);

// Only change code below this line
details.unshift(["Akhil",[25, "15-09-1997"], "a@gmail.com" ]);
// console.log(details);
// console.log(myArray);