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


