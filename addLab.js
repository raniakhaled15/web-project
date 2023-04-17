// Populate the table with data from Local Storage
window.onload = function() {
  var lab_Name = localStorage.getItem("Name");
  var lab_ID = localStorage.getItem("id");
  var lab_Bno = localStorage.getItem("buildingnumber");
  var lab_Fno = localStorage.getItem("floornumber");
  var lab_Pcsno = localStorage.getItem("pcsnumber");
  var lab_Cap = localStorage.getItem("capacity");
  var lab_Chairsno = localStorage.getItem("chairsnumber");
  var lab_stat = localStorage.getItem("labstatus");

  if (lab_Name !== null) {
    var readData = [lab_Name, lab_ID, lab_Bno, lab_Fno, lab_Pcsno, lab_Cap, lab_Chairsno, lab_stat];
    insert(readData);
  }
}

var row = null;

function Submit() {
  var input_data = retrieve();
  if(input_data==false){
    alert("Please Fill The Data!");
  }
  else{
    var readData = readingData(input_data);
  
  if (row == null) {
    insert(readData);
  } else {
    Update();
    setTimeout(function() {
      alert("Updated");
    },0.5);
  }
}
document.getElementById("myform").reset();
}

// Get data input
function retrieve() {
  var name = document.getElementById("name").value;
  var id = document.getElementById("id").value;
  var Buildingno = document.getElementById("Buildingno").value;
  var floorno = document.getElementById("Floor").value;
  var pcsnumber = document.getElementById("pcsno").value;
  var capacity = document.getElementById("cap").value;
  var chairsnumber = document.getElementById("chairsno").value;
  var stats = document.getElementById("label").value;
  var arr = [name, id, Buildingno, floorno, pcsnumber, capacity, chairsnumber, stats];
  if(arr.includes("")){
    return false;
  }
  else{
    return arr;
  }
}

// Store data in Local Storage
function readingData(input_data) {
  localStorage.setItem("Name", input_data[0]);
  localStorage.setItem("id", input_data[1]);
  localStorage.setItem("buildingnumber", input_data[2]);
  localStorage.setItem("floornumber", input_data[3]);
  localStorage.setItem("pcsnumber", input_data[4]);
  localStorage.setItem("capacity", input_data[5]);
  localStorage.setItem("chairsnumber", input_data[6]);
  localStorage.setItem("labstatus", input_data[7]);

  return input_data;
}


function insert(readData){
  if (row == null) {
    row = document.createElement("tr");
    document.getElementById("my").appendChild(row);
    for (var i = 0; i < 8; i++) {
      var cell = document.createElement("td");
      row.appendChild(cell);
      cell.innerHTML = readData[i];
    }
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Update";
    editBtn.onclick = function() { edit(this); };
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.onclick = function() { remove(this); };
    var actionCell = document.createElement("td");
    row.appendChild(actionCell);
    actionCell.appendChild(editBtn);
    actionCell.appendChild(deleteBtn);
  } else {
    row.cells[0].innerHTML = readData[0];
    row.cells[1].innerHTML = readData[1];
    row.cells[2].innerHTML = readData[2];
    row.cells[3].innerHTML = readData[3];
    row.cells[4].innerHTML = readData[4];
    row.cells[5].innerHTML = readData[5];
    row.cells[6].innerHTML = readData[6];
    row.cells[7].innerHTML = readData[7];
  }
}
function edit(td){
  row = td.parentElement.parentElement;
document.getElementById("name").value = row.cells[0].innerHTML;
document.getElementById("id").value = row.cells[1].innerHTML;
document.getElementById("Buildingno").value = row.cells[2].innerHTML;
document.getElementById("Floor").value = row.cells[3].innerHTML;
document.getElementById("pcsno").value = row.cells[4].innerHTML;
document.getElementById("cap").value = row.cells[5].innerHTML;
document.getElementById("chairsno").value = row.cells[6].innerHTML;
document.getElementById("label").value = row.cells[7].innerHTML;
}
function Update(){
  row.cells[0].innerHTML = document.getElementById("name").value;
  row.cells[1].innerHTML = document.getElementById("id").value;
  row.cells[2].innerHTML = document.getElementById("Buildingno").value;
  row.cells[3].innerHTML = document.getElementById("Floor").value;
  row.cells[4].innerHTML = document.getElementById("pcsno").value;
  row.cells[5].innerHTML = document.getElementById("cap").value;
  row.cells[6].innerHTML = document.getElementById("chairsno").value;
  row.cells[7].innerHTML = document.getElementById("label").value;
  row=null;
}
function remove(td){
  var ans=confirm("Are you sure you want to delete the lab?")
  if(ans==true){
   row=td.parentElement.parentElement;
   document.getElementById("my").deleteRow(row.rowIndex);
   
   // remove the data stored in localStorage for the deleted row
   localStorage.removeItem("Name");
   localStorage.removeItem("id");
   localStorage.removeItem("buildingnumber");
   localStorage.removeItem("floornumber");
   localStorage.removeItem("pcsnumber");
   localStorage.removeItem("capacity");
   localStorage.removeItem("chairsnumber");
   localStorage.removeItem("labstatus");
  }
}
