// Prompt 1
// 8kyu: We need a function that can transform a string into a number. What ways of achieving this do you know?

// Solution 1

var stringToNumber = function(str){
  mayo = parseInt(str)

  return mayo;
}

console.log(stringToNumber)

// Solution 2

var stringToNumber = function(str){
  return parseInt(str)
}

console.log(stringToNumber)

// Notes: In the future, I do not need to use a variable (mayo), and can simply have 'return parseInt(str);' for the same result.

// Test Code

describe( "stringToNumber", function(){
  it( "should work for the examples" , function(){
    Test.assertEquals(stringToNumber("1234"),1234)
    Test.assertEquals(stringToNumber("605"), 605)
    Test.assertEquals(stringToNumber("1405"),1405)
    Test.assertEquals(stringToNumber("-7"),  -7)
  });
});




// Prompt 2
// 8kyu: Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.

// Solution 1

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U")
}

// Solution 2

const DNAtoRNA = dna => dna.replace(/T/g, 'U');

// Notes: This was challenging for me up front. I figured out that 'replace' was a viable key to the solution, but did not use the return function. I attempted to use conditionals (pseudo)"If T, conver to U", alongside a varaible that represented that.

// Test Code

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
    assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
    assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
    });
  })
  });
});



// Prompt 3
// 8kyu: This code does not execute properly. Try to figure out why.
// function multiply(a, b){
//   a * b
// }


// Solution 1

function multiply(a, b){
  return a * b
}


// Notes: Simplest one I found so far. Good reminder on using return.

// Test Code
const assert = require("chai").assert;

describe("Multiply", () => {
  it("fixed tests", () => {
    assert.strictEqual(multiply(1,1), 1);
    assert.strictEqual(multiply(2,1), 2);
    assert.strictEqual(multiply(2,2), 4);
    assert.strictEqual(multiply(3,5), 15);   
  });
});



// Prompt 4
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// function even_or_odd(number) {
  
// }


// Solution 1

function even_or_odd(number) {
  if(number % 2 === 0){
    return ("Even");
  }else{
    return ("Odd")
  }
}

console.log(even_or_odd(5))


// Notes: Practice on conditionals and utilizing arguments. Took a few minutes figuring out how to call the function, but then I realized I was missing a closing curly brace. Whoops.

// Test Code
const chai = require('chai');
const assert = chai.assert;

describe("Sample tests",() => {
  
  it("2 is even", () => {
    assert.strictEqual(even_or_odd(2), "Even");
  });
  it("7 is odd", () => {
    assert.strictEqual(even_or_odd(7), "Odd");
  });
  it("-42 is even", () => {
    assert.strictEqual(even_or_odd(-42), "Even");
  });
  it("-7 is odd", () => {
    assert.strictEqual(even_or_odd(-7), "Odd");
  });
  it("0 is even", () => {
    assert.strictEqual(even_or_odd(0), "Even");
  });
});



// Prompt 5
// Very simple, given an integer or a floating-point number, find its opposite.

 function opposite(number) {
  //your code here
}


// Solution 1

function opposite(number) {
  return(number * -1)
}


// Notes: Initiall had "opposite(10)" after the closing braces.

// Test Code

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(opposite(1), -1,)
  });
});



// Prompt 6
// We need a function that can transform a number into a string.

function numberToString(num) {
  // Return a string of the number here!
}


// Solution 1

function numberToString(num) {
  return num.toString()
}

// Solution 2

function numberToString(num) {
  let convert = num.toString()
  return convert
}



// Notes: Had some trouble upfront using the function within the return/assignment. Eventually plugged the parameter itself and that fixed it.

// Test Code

const assert = require('chai').assert;
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(numberToString(67), '67');
  });
});
