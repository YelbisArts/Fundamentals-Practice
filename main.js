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
