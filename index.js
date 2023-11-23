"use strict";

/**
 * Calls the dog api to randomly get an image
 */
function getDogImage() {
  let requiredUrl = `https://dog.ceo/api/breeds/image/random/${1}`;

  fetch(requiredUrl)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((error) => alert("Something went wrong. Try again later."));
}

/**
 * Displays the image within a div
 */
function displayResults(responseJson) {
  console.log(responseJson);
  console.log("displaying the image...");
  let arrayOfImg = responseJson.message;
  let display = getImages(arrayOfImg);

  $(".results-img").html(display); //replace the existing image with the new one
}

/**
 * Prepares a string of <img> elements
 * and returns "valueToReturn" - string
 */
function getImages(arrayOfImg) {
  let valueToReturn = "";
  for (let i = 0; i < arrayOfImg.length; i++) {
    valueToReturn += `<img src="${arrayOfImg[i]}" class="results-img">`;
  }
  console.log(valueToReturn);
  return valueToReturn;
}

function watchForm() {
  let inputValue = $(".quantity").val();
  getDogImage(inputValue);
}

$(function () {
  console.log("App loaded! Waiting for submit! Wathform done");
  watchForm();
});

/**
 * Runs the watchForm function and hides/shows the firefox logo
 * and dog image when the dog button is pressed
 */

// #TODO: change button to hover

// Wait until the document is fully loaded
$().ready(function () {
  // Attach a click event handler to all button elements
  $("button").click(function () {

    // Toggle the "active" class on the element with id "imagediv"
    $("#imagediv").toggleClass("active");

    // Get the element with id "dogcontainer"
    var x = document.getElementById("dogcontainer");

    // If the "dogcontainer" element is not being displayed, display it
    // Otherwise, hide it
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";

      // Get the value of the element with class "quantity"
      let inputValue = $(".quantity").val();

      // Call the function getDogImage with inputValue as an argument
      getDogImage(inputValue);
    }

    // Get the element with id "imagediv"
    var x = document.getElementById("imagediv");

    // If the "imagediv" element is not being displayed, display it
    // Otherwise, hide it
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  });
});
