// Prompt 1
// We need a function that can transform a string into a number. What ways of achieving this do you know?

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
