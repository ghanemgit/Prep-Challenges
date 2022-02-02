'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 1) ---------------------
// 
// Given an array of values use filter to extract odd values.
//  
// EX:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] ==> [89, 41, 31, 111, 31]
// 
// ------------------------

const oddFiltration = (arr) => {
    // write your code here
    function isOdd(num) {

        if (num % 2 != 0)
            return true;

    }

    return (arr.filter(isOdd));
}

// 2) ---------------------
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// EX:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
//   ===>
//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name
// ------------------------

const cvsFiltration = (arr) => {
    // write your code here
    function FinalCons(fullName, tech) {
        this.fullName = fullName;
        this.tech = tech;
    }
    var fullName = "";
    let arr2 = [];
    function filterByExAndTech(data) {
        if (data.yearsOfExperience > 4 && data.tech == "JS") {
            if (data.LastName != "null")
                fullName = data.firstName + " " + data.LastName;
            else {
                fullName = data.firstName;
                return true;
            }
        }
        let obj = new FinalCons(fullName, data.tech);
        arr2.push(obj);

    }
    // function concatenationName(data) {
    //     if (data.LastName != "null")
    //         var fullName = data.firstName + " " + data.LastName;
    //     else
    //         fullName = data.firstName;
    //     return fullName;
    // }

    arr.filter(filterByExAndTech);
    return arr2;

}

// 3) ---------------------
//
// Given an array of words filter the names that contains one of the vowels (a, e, i, o, u)

// EX:
// ['car', 'boy', 'spy', 'building', 'why', 'dry' ] ==> ['spy', 'why', 'dry']
// 
// ------------------------

const vowelsFiltration = (arr) => {
    // write your code here

    let Arr = arr.filter(data => {
        let regex = /[aeiou]/gm;
        if (regex.test(data)) {
            return data;
        }
    });
    return Arr;
}

// 4) ---------------------
//
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// EX:
// first_Employee = [C, C#, Java, Angular, PHP]
// first_Employee = [C#, .Net, JavaScript, React, Angular]
// ==>
// result = [C, Java, PHP, .Net, JavaScript, React]
// Hint:
// - the 'include' method can help you, read about it.
// ------------------------

const skillComparison = (arr1, arr2) => {
    // write your code here
}


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };

