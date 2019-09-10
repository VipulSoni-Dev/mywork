
function loadSimulator(){
  document.getElementById("helpLineOrTimeChart").innerHTML="<object type='text/html' data='simulator.html' style='width: 100%; height:100%;' ></object>";
}
function resetSimulator(){
  document.getElementById("helpLineOrTimeChart").innerHTML="<object type='text/html' data='practice.html'></object>";
}
function load_help(){
  document.getElementById("helpLineOrTimeChart").innerHTML="<object type='text/html' data='practice.html' ></object>";
}
function showExample(){
  //   document.getElementById("trafficSignal").innerHTML="traffic signal page"; //traffci signalpage using canvas
}
function checkAnswer(){
  var avgWait = parseFloat(document.getElementById("avgWait").value);
  var avgTurn = parseFloat(document.getElementById("avgTurn").value);
  var avgWaitCorrect = (avgWait == 5.66 || avgWait == 5.67);
  var avgTurnCorrect = (avgTurn == 9.67 || avgTurn == 9.66);
  if( avgTurnCorrect && avgWaitCorrect){
    alert("Congratulations Both Answers are correct");
  }
  else if(avgWaitCorrect && !avgTurnCorrect){
    alert("Only Average Waiting Time is correct. \n\nSolution : \nAverage Waiting Time = 5.67\nAverage Turnaround Time = 9.67")
  }
  else if(avgTurnCorrect && !avgWaitCorrect){
    alert("Only Average Turnaround Time is correct. \n\nSolution : \nAverage Waiting Time = 5.67\nAverage Turnaround Time = 9.67")
  }
  else{
    alert("Incorrect. \nSolution : \nAverage Waiting Time = 5.67\nAverage turnaround Time = 9.67")
  }
}
function addColor(row,color,n){
  for(var i=0;i<n;i++){
    var cell = row.insertCell();
    cell.style.backgroundColor = color;
    cell.style.width = 50;
    cell.style.border = "2px solid"
  }
}
function removeNodeChild(mynode){
  while (mynode.firstChild) {
    mynode.removeChild(mynode.firstChild);
  }
}
function solution(){
  var tb = document.getElementById("solutionTable");

  removeNodeChild(tb);
  tb.style.borderCollapse = "collapse";
  document.getElementById("tableCaption").innerHTML = "Process-Chart";
  for(var i=0;i<=3;i++){
    if(i==0){
      var row = tb.insertRow();
      var cell = row.insertCell();
      cell.style.border = "2px solid";
      cell.innerHTML = "Time-Slot"
      for(var j=1;j<=12;j++){
        cell = row.insertCell();
        cell.innerHTML = j;
        cell.style.border = "2px solid";
      }
    }
    else if(i==1){
      var row = tb.insertRow();
      var cell = row.insertCell();
      cell.innerHTML = "P"+i;
      cell.style.border = "2px solid";
      addColor(row,"white",2);
      addColor(row,"yellow",4);
      addColor(row,"green",2);
      addColor(row,"white",4);
    }
    else if(i==2){
      var row = tb.insertRow();
      var cell = row.insertCell();
      cell.innerHTML = "P"+i;
      cell.style.border = "2px solid";
      addColor(row,"yellow",3);
      addColor(row,"green",3);
      addColor(row,"yellow",5);
      addColor(row,"green",1);
    }
    else if(i==3){
      var row = tb.insertRow();
      var cell = row.insertCell();
      cell.innerHTML = "P"+i;
      cell.style.border = "2px solid"
      addColor(row,"green",3);
      addColor(row,"yellow",5);
      addColor(row,"green",3);
      addColor(row,"white",1);
    }
  }

  tb = document.getElementById("solutionProcessTable");
  while (tb.firstChild) {
    tb.removeChild(tb.firstChild);
  }
  tb.style.borderCollapse = "collapse";
  tb.style.border = "2px solid";
  for(var i=0;i<=4;i++){
    var row = tb.insertRow();
    if(i==0){
      row.style.border = "2px solid"
      row.insertCell().innerHTML = "Process ID";
      row.insertCell().innerHTML = "Waiting Time";
      row.insertCell().innerHTML = "Turnaround Time";
    }
    else if(i==1){
      row.style.border = "0.5px solid"
      row.insertCell().innerHTML = "P1";
      row.insertCell().innerHTML = 4;
      row.insertCell().innerHTML = 6;
    }
    else if(i==2){
      row.style.border = "0.5px solid"
      row.insertCell().innerHTML = "P2";
      row.insertCell().innerHTML = 8;
      row.insertCell().innerHTML = 12;
    }
    else if(i==3){
      row.style.border = "0.5px solid"
      row.insertCell().innerHTML = "P3";
      row.insertCell().innerHTML = 5;
      row.insertCell().innerHTML = 11;
    }
    else{
      row.style.border = "2px solid"
      row.insertCell().innerHTML = "Total";
      row.insertCell().innerHTML = 17;
      row.insertCell().innerHTML = 29 ;
    }

  }
}
