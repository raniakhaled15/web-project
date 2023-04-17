var pcID = document.querySelector("#id");
pcID.oninput = (event) => {
  event.target.value = event.target.value.replace(/[^0-9]/g, "");
};

var labID = document.querySelector("#lab-id");
labID.oninput = (event) => {
  event.target.value = event.target.value.replace(/[^0-9]/g, "");
};

window.onload = function() {
  var pc_ID = localStorage.getItem("PCID");
  var lab_ID = localStorage.getItem("LabID");
  var pc_stat = localStorage.getItem("status");

  if (pc_ID !== null) {
    var readData = [pc_ID, lab_ID, pc_stat];
    insert(readData);
  }
}

var row = null;

function submitForm() {
  var input_data = retrieve();
  if(input_data==false){
    alert("Please Fill The Data!");
  }
  else{
    var readData = readingData(input_data);
  
    if (row == null) {
      insert(readData);
    }
  }
  document.getElementById("my-pc").reset();
}

// Get data input
function retrieve() {
  var pc = document.getElementById("id").value;
  var lab = document.getElementById("lab-id").value;
  var status = document.querySelector('input[name="radio1"]:checked');
  var states = status ? status.value : "";
  var arr = [pc, lab, states];
  if(arr.includes("")){
    return false;
  }
  else{
    return arr;
  }
}

// Store data in Local Storage
function readingData(input_data) {
  localStorage.setItem("PCID", input_data[0]);
  localStorage.setItem("LabID", input_data[1]);
  localStorage.setItem('status', input_data[2]);
  
  return input_data;
}

function insert(readData){
  var table = document.getElementById("my-pc");
  var newRow = table.insertRow(-1); // -1 will insert the row at the end of the table
  
  for (var i = 0; i < 2; i++) {
    var cell = newRow.insertCell(i);
    cell.innerHTML = readData[i];
  }
  
  var statusCell = newRow.insertCell(2);
  statusCell.innerHTML = readData[2];
  
  // Store data in Local Storage
  localStorage.setItem("PCID", readData[0]);
  localStorage.setItem("LabID", readData[1]);
  localStorage.setItem('status', readData[2]);
}



