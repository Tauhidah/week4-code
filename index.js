// 1 Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.
//                 0  1  2  3  4  5  6  7
let array =       [3, 9, 23, 64, 2, 8, 28, 93];
console.log(array[array.length-1] - array[0]); 
console.log(array[7])

console.log(array[array.length - 1 ]);
// subtract the firt and last elements programmatically 
let firstElement = age[0] ;
let lastElement = age [age.length - 1];
let subtractionResult = lastElement-
firstElement;
// add a new age dynamically 
let newAge=42;
ages.push(newAge);

// Calculate the average age using loops 
let sum =0;
for (let i =0; i<ages.length; i++) {sum += ages};

let averageAge= sum /ages.length;

console.log('Subtract Result', subtractionResult);

//2 Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name.
//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

//create the names array 
let names= ["Sam", "Tommy", "Tim", "Sally",
"Buck", "Bob"];

//Calculate the average number of letters 
//per name
let totalLetters=0;
for (let i =0; i< names.length; i++) {
    
    totalLetters += names[i].length;
}

let averageLetters = totalLetters/names.length;

//Concatenate all the names together separated by spaces
let concatenateNames= "";
for (let i = 0; i< names.length; i++) {

}
console.log("Concatenated names: " + concatenateNames.trim());

//3 How do you access the last element of any array?

let numArray = [1, 2, 3, 4, 5];
lastElement = numArray[numArray.length - 1];

console.log(lastElement); Output: 5

//4 How do you access the first element of any array?


firstElement = numArray[0];

console.log(firstElement); // Output: 1

//5 Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:
names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array


let nameLengths2 = [];

for  (let i = 0; i < names.length; i++) {
    nameLengths2.push(names[i])
}
 
console.log(nameLengths); //Output: [5, 3, 4]

//6  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let namelengths = [5,3,4];
let sum2 = 0;

for (let i = 0; i< nameLengths.lengths; i++) {
sum2 += nameLengths[i];
}
//7 Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function concatenateWord(word, n) {
     let result = "";
 for(let i = 0; i < 3 ; i++){
    result += word;
 }
return result;
}

console.log(concatenateNames("hello", 3)) //calls the concatenateNames and output the results to the console
// console.log();
// concatenateNames()
// 8 Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.


// 9 Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function isSumGreaterThan100(numbers) { 
    let sum = 0
    for  (let i =0; i<numbers.length; i ++) {
        sum += numbers[1]
    }
    return sum > 100;
}
// 10 Write a function that takes an array of numbers and returns the average of all the elements in the array.

function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let sum= 0;
    for (let i =0; i< numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

console.log(calculateAverage([1,2,3,4,5])); // Output:3
console.log(calculateAverage([10,20,30])); //  Output: 20
console.log(calculateAverage( []) ); // Output: 0



// 11 Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

if (array1.lenth === 0 ||array1, array2){
    if (array1.length ===0 ||array2.length === 0) {
        return false;

    }
}

// 12 Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50. 


function willBuyDrink(isHotOutside,moneyInPocket){
    if(isHotOutside && moneyInPocket> 10.50){
        return true;
    
    }else{
        return false;
    }
}
console.log(willBuyDrink(true, 15)); //
Output:true
console.log(willBuyDrink(false, 8)); //
Output: false
console.log(willBuyDrink(true, 5)); //


// 13 Create a function of your own that solves a problem. In comments, write what the function does and why you created it
