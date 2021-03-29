$(document).ready(function() {
  // console.log("do we get here?")

  $("form").submit(function(event) {
    // console.log("what about here?")
    event.preventDefault();
    let array = []
    let thing1Val = $("#thing1").val();
    array.push(thing1Val);

    array.push($("#thing2").val());
    array.push($("#thing3").val());
    array.push($("#thing4").val());
    console.log(array);
  });
});


