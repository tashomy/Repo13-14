// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function myFunction(id) {
  modal.style.display = "block";
  var response = id;
  var frame = document.getElementById("setSrc");
  frame.src = setSrc(response);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function setSrc(response) {
  if (response == "img1") {
    return "image01.html";
  }
  if (response == "img2") {
    return "image02.html";
  }
  if (response == "img3") {
    return "image03.html";
  }
  if (response == "img4") {
    return "image04.html";
  }
  if (response == "img5") {
    return "image05.html";
  }
  if (response == "img6") {
    return "image06.html";
  }
  if (response == "img7") {
    return "image07.html";
  }
  if (response == "img8") {
    return "image08.html";
  }
  if (response == "img9") {
    return "image09.html";
  }
  {
    return "image10.html";
  }
}
