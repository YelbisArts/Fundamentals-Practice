// Prompt 1
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Solution 1

var stringToNumber = function(str){
  mayo = parseInt(str)

  return mayo;
}

console.log(stringToNumber)

// Sample Tests
describe( "stringToNumber", function(){
  it( "should work for the examples" , function(){
    Test.assertEquals(stringToNumber("1234"),1234)
    Test.assertEquals(stringToNumber("605"), 605)
    Test.assertEquals(stringToNumber("1405"),1405)
    Test.assertEquals(stringToNumber("-7"),  -7)
  });
});
