'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    //write your code here ...
    let length = string.length;
    let newStr = "";
    for (let i = length; i >= 0; i--) {
        newStr += (string.charAt(i));
    }
    return newStr;
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    //write your code here ...
    let length = arr.length;
    let newArr = [];
    let isIncluded = false;
    for (let i = 0; i < length; i++) {
        let string = arr[i];
        isIncluded = string.includes("^_^");
        if (isIncluded) {
            newArr.push(string);
        }
        else {

        }
    }
    return newArr;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    //write your code here ...

    let length = str.length;
    let newStr = "";
    for (let i = 0; i < length; i += 2) {
        newStr += (str.charAt(i));
    }
    return newStr;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    //write your code here ...
    let newArr = [];
    let isIncluded = false;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let string = arr[i][j];
            isIncluded = string.includes("chicken");    //the code work correctly on replit online compiler but here not i dont know why
            if (isIncluded) {
                newArr.push([string]);
            }
            else {

            }
        }
    }
    let arr2 = JSON.stringify(newArr);


    return arr2;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
