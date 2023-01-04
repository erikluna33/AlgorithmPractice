// // Setting and Swapping
// // Set variable myNumber to 42. Set variable myName to your name. Now swap myNumber into myName & vice versa.

let myNumber = 42;
let myName = "Erik";
let temp = 0;

temp = myName;
myName = myNumber;
myNumber = temp;

console.log(`Name is now ${myName}`);
console.log(`Number is now ${myNumber}`);


// // Print -52 to 1066
// // Print integers from -52 to 1066 using a FOR loop.

for(let i = 0; i <= 10; i++){
    console.log(i);
}


// // Don’t Worry, Be Happy
// // Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful(){
    for(let i = 1; i <= 10; i++){
        console.log(`Good morning! For the ${i} time!`)
    }
}

beCheerful();


// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for(let i = -30; i <= 0; i++){
    if(i !== -3 && i !== -6){
        if(i%3 == 0){
            console.log(`${i} is divisible by 30`)
        }
    }
}


// Printing Integers with While
// Print integers from 0 to 10, using a WHILE.

let num = 0;
while(num <= 10){
    console.log(num);
    num++;
}


// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day....",

// Example: given yourBirthday(4,19) or yourBirthday(19,4)

function yourBirthday(num, num){
    if(num ===8 || num === 17 ){
        console.log("How did you know?")
    }
    else{
        console.log("Just another day...")
    }
}

yourBirthday(17, 8);


function leapYear(year){
    if(year%4 == 0){
        // console.log(`${year} is divisible by 4`)
            if(year%100 !== 0){
                // console.log(`${year} is NOT divisible by 100 so it IS a leap year.`)
                console.log(`The year ${year} IS a leap year.`)
        
            }
            else{
                // console.log(`${year} is divisble by 100. It might not be a leap year`)
                if(year%400 == 0){
                    console.log(`The year ${year} is indeed a leap year.`)
                }
                else{
                    // console.log(`It is NOT a leap year and ${year} is NOT divisible by 400`)
                    console.log(`The year ${year} IS a leap year`)
                }
            }
    }
    else{
        console.log(`The year ${year} is NOT a leap year`)
    }
}
leapYear(2024);





// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

let total = 0;
for(let i = 512; i <= 4096; i++){
    if(i%5 === 0){
        console.log(`${i} is a multiple of 5.`);
        total++;   
    }
}
console.log(`There are a total of ${total} integers that are multiples of 5 from 512 to 4096.`)



// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.


let num = 0;
while(num <=60){
    if(num%6===0){
        console.log(`${num} is a multiple of 6 up to 10`)
    }
    num++
}



// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

for(let i = 1; i <= 100; i++){
    if(i%10 ==0){
        console.log("Dojo")
    }
    else if(i%5 == 0){
        console.log("Coding");
    }
    else{
        console.log(i);
    }
}


// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

let total = 0;
for(let i = -300000; i <= 300000; i++){
    if(i%2 == 1){
        total = total + i
    }
}
console.log(total)





// Flexible Countdown
// Based from earlier “Countdown By Fours”, given (lowNum, highNum, mult), print the numbers in multiples of mult from highNum down to lowNum, using a FOR loop.

// Example: For (2,9,3), print 9 6 3 (on successive lines).

function countDown(lowNum, highNum, mult){
    for(let i = highNum; i>=lowNum; i--){
        if(i%mult == 0){
            console.log(`The integers are ${i}`);
        }
    }
}

countDown(2, 9, 3);




// The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) that one. Do this using a WHILE loop.

// Example: Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, except for the value 9).

function finalCount(param1, param2, param3, param4){

    while(param2 <= param3){
        if(param2%param1 == 0 && param2 !== param4){
            console.log(`The integers are ${param2}`);
        }
        param2++;
    }
}

finalCount(3,5,17,9);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Coding Dojo's Foundation of basic 13


// Print 1-255
// Print all the integers from 1 to 255.


for(let i = 1; i<= 255; i++){
    console.log(i);
}



// Print Odds 1-255
// Print all odd integers from 1 to 255.

for(let i = 1; i <= 255; i++){
    if(i%2 !== 0){
        console.log(i);
    }
}




// Print Ints and Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.


let sum = 0;
for(let i = 0; i<= 255; i++){
    sum = sum + i;
}
console.log(`The sum from 0-255 is ${sum}`);



// Iterate and Print Array
// Iterate through a given array, printing each value.

function itArr(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(itArr([1,2,"Hello", false, 5]));




// Find and Print Max
// Given an array, find and print its largest element.

function printMax(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return `The largest integer in the given array is ${max}`;
}
console.log(printMax([4,76,34,99,100, 541]));




// Get and Print Average
// Analyze an array’s values and print the average.

function avg(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    let arrAvg = sum / arr.length;
    return `The average integer in the given array is ${arrAvg}`;
}
console.log(avg([3,5,1,6,7]))



// Square the Values
// Square each value in a given array, returning that same array with changed values.

function square(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
console.log(square([2,4,6,8,10]))



// Greater than Y
// Given an array and a value Y, count and print the number of array values greater than Y.

function greaterThanY(arr, Y){
    let count = 0;
    for(let i = 0; i<=arr.length;i++){
        if(arr[i] > Y){
            count++;
        }
    }
    return `There are ${Y} numbers greater than the given value of Y`;
}
console.log(greaterThanY([1,2,3,4,5,6,7,8,9,10], 7));



// Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.


function zeroOut(arr){
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0
        }
    }
    return arr;
}
console.log(zeroOut([1,-6,3,-2,-10,5]));



// Max, Min, Average
// Given an array, print the max, min and average values for that array.


function maxMinAvg(arr){
    let max = arr[0];
    let min = arr[0];
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
        
        if(arr[i] < min){
            min = arr[i];
        }

        sum = sum + arr[i];
    }
   let avg = sum / arr.length;
   
   return `The largest value in the array is ${max}, the smallest value in the array is ${min}, and the average value in the array is ${avg}`;
    
    
}
console.log(maxMinAvg([4,7,22,78,25,76,69,2]));