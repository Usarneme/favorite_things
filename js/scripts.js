let newArray = []

function switchValues() {
  // eg: array => [a,b,c,d]
  const zero = newArray[0] // copy what is in position 0
  // zero = a
  const one = newArray[1] // copy what is in pos1
  // one = b

  // a,b,c,d
  newArray[0] = one
  // newArray => b,b,c,d
  newArray[1] = zero
  // newArray => b,a,c,d
}

function switchValuesTwo(originalArray) {
  const outputArray = [...originalArray];

  const zero = originalArray[0]
  const one = originalArray[1] 

  outputArray[0] = one
  outputArray[1] = zero

  return outputArray;
}

function arrayPlusOne(inputArray) {
  // do something
  // return the NEW array
  return inputArray
}

$(document).ready(function() {
  // console.log("do we get here?")
  // what is it here?

  $("form").submit(function(event) {
    // console.log("what about here?")
    event.preventDefault();

    // declare our var
    let array = []

    // STEP 1 - push the values
    let thing1Val = $("#thing1").val();
    array.push(thing1Val);

    array.push($("#thing2").val());
    array.push($("#thing3").val());
    array.push($("#thing4").val());

    console.log(array);
    // newArray = [...array]
    // what is it here?

    // STEP 2. switch values 0 and 1
    const switchedArray = switchValuesTwo(array)

    // STEP 3. add one to each
     const plusArray = arrayPlusOne(switchedArray)

  });
  
});


const languages = ['HTML', 'CSS', 'JavaScript'];

languages.forEach(function(language) {
  debugger;
  // language = languages[i] = "HTML"
  alert('I love ' + language + '!');
});

// for (let i = 0; i < languages.length; i += 1) {
//   // 0 => languages[i] = "HTML"
//   alert( languages[i] );
// }


// const languages = ['HTML', 'CSS', 'JavaScript'];

// // this won't work
// languages.forEach(function printALanguage(language) {
//   alert('I love ' + language + '!');
// });


// // function declaration with name
// function printALanguage(language) {
//   alert('I love ' + language + '!');
// }

// const printALanguage = function(language) { 
//   // blah
// }

// // this will work
// languages.forEach(printALanguage);

let thingsILike = "I like...";
const thing = "bubble baths";

thingsILike = thingsILike.concat(" " + thing + "!");
thingsILike = thingsILike + " " + thing + "!"
thingsILike += " " + thing + "!"

const array1 = ['2', '3', '4'];
const array2 = [ 2, 3, 4];
const array3 = array1.concat(array2);
const array4 = [...array1 + array2];

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

const numberArray = []
array1.forEach(function(value) {
  // Number(value)
  // Number.parseInt(value)
  const numberValue = parseInt(value)
  numberArray.push(numberValue)
});

