// // run javascript after DOM Load
// document.addEventListener("DOMContentLoaded", function(){
//   console.log("The dom has loaded");
// })
// var count = 0
//   // declare the count variable
// document.getElementById("button").addEventListener("click", function(event) {
//      // display the current click count inside the clicked div
//      event.target.
//    }, false);
// click even on the button
  //build a div with the class of box
  // get the user's input for color
  // get the user's input for text
  // add the text into the div
  // add the color as the background color o the div
  // add the newly built div to the screen
  // increment the count
  // clear the inputs

$(document).ready(function(){
  var count=0;
})
$(".box-creator-button").click(function(event){
  event.preventDefault();
  var userColor = $(".box-color-input").val();
  var userText = $(".box-color-note").val();
  var newBoxDiv = $("<div class='box'>"+ count + userText +"</div>"


})
