function Report() {
    var labId = document.getElementById("labId").value;
    var pcsNo = document.getElementById("pcsNo").value;
    var prob = document.getElementById("prob").value;
  
    if (labId === "" || pcsNo === "" || prob === "") {
      alert("Please fill out all fields.");
      return false;
    }
  
    var report = {
      labId: labId,
      pcsNo: pcsNo,
      prob: prob
    };
    localStorage.setItem("report", JSON.stringify(report));
    alert("Report submitted successfully!");
    return true;
  }
  