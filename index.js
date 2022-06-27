document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });

  console.log("This console.log() fired when index.js loades - before DomContentLoaded is triggered")

  function changeTextAfterLoading() {
    const text = document.querySelector('p');
    text.textContent = "This is really cool!";
    console.log("This is executed after the DOM has loaded");
  }

  document.addEventListener("DOMContentLoaded", changeTextAfterLoading);