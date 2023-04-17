function changeStatus(statusId){
    var statusElement = document.getElementById(statusId);
    
    if (statusElement.innerHTML === "Not Repaired"){
      statusElement.innerHTML = "Repaired";
    }
    else{
      statusElement.innerHTML = "Not Repaired";
    }
}

let myButtons = document.querySelectorAll(".button");
myButtons.forEach(button => {
  button.classList.add("my-button");
});

