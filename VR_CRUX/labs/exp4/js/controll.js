var AllProcess = [];

function createTable(no_of_process = null){

  if (no_of_process == null) {
    if (!document.getElementById('noOfProcess').checkValidity()) {
      document.getElementById('noOfProcess').reportValidity()
      return
    }
    if(document.getElementById('quantom')!=null){
        if (! document.getElementById('quantom').checkValidity()) {
      document.getElementById('quantom').reportValidity()
      return
    }
   }
  }

  if (no_of_process == null) {
    no_of_process = Number(document.getElementById('noOfProcess').value);
  }
  var rn = no_of_process
  rn = rn + 1;

  var cn = 3;
  tbl = document.getElementById('myTable')
  deleteALLChilds(tbl)

  for(var r=0; r < rn;r++)
  {
    if (r == 0) {
      var x= tbl.insertRow(r);
      var y=  x.insertCell();
      y.innerHTML="Process ID";
      var y=  x.insertCell();
      y.innerHTML="Arrival Time";
      var y=  x.insertCell();
      y.innerHTML="Brust Time";
      continue;
    }
    var x = tbl.insertRow(r);
    for(var c=0;c<parseInt(cn,10);c++)
    {
      if (c == 0) {
        var y =  x.insertCell();
        var input = document.createElement('span')
        input.style.width = "100%"
        input.id = r+""+c;
        input.innerHTML = r
        y.appendChild(input);
      }
      else {
        var y =  x.insertCell();
        var input = document.createElement('input')
        input.type = "number"
        input.min = "0"
        input.max = "10"
        input.style.width = "100%"
        input.id = r+""+c;
        y.appendChild(input);
      }

    }
  }
}

function fillRandom(){
  no_of_process = Number(document.getElementById('noOfProcess').value)
  AllProcess = createRandomProcess(no_of_process)
  fillTable()
}

function readTable() {
  AllProcess = [];
  var tbl = document.getElementById("myTable");
  for (var i = 1; i < tbl.rows.length; i++) {
    var arrivalTime = Number(document.getElementById(i+""+1).value);
    var brustTime = Number(document.getElementById(i+""+2).value);
    AllProcess.push(new Process(i, arrivalTime, brustTime));
  }
  AllProcess = sortprocesses(AllProcess);

}


function fillTable() {
  tbl = document.getElementById('myTable')
  for (var i = 0; i < AllProcess.length; i++) {
    document.getElementById((i + 1)+""+1).value = AllProcess[i].arrivalTime
    document.getElementById((i + 1)+""+2).value = AllProcess[i].brustTime
  }
}

function updateGUI(){
  processChartTable = document.getElementById('processChart')
  deleteALLChilds(processChartTable)

  for (var i = 0; i < ProcessChart.length; i++) {
    row = processChartTable.insertRow()
    for (var j = 0; j < ProcessChart[i].length; j++) {
      col = row.insertCell()
      col.innerHTML = ProcessChart[i][j].id
      col.style.color = Mycolor[ProcessChart[i][j].color]
    }
  }
}

function createRandomProcess(no_of_process){
  data = []
  for (var i = 0; i < no_of_process; i++) {
    var arrivalTime = generateRandomNumber();
    var brustTime = generateRandomNumber();
    data.push(new Process(i + 1, arrivalTime, brustTime));
  }
  return data
}

function createStaticProcess(){

  AllProcess = []
  var arrivalTime = 3
  var brustTime = 7
  AllProcess.push(new Process(1, arrivalTime, brustTime));

  var arrivalTime = 2
  var brustTime = 5
  AllProcess.push(new Process(2, arrivalTime, brustTime));

  var arrivalTime = 4
  var brustTime = 2
  AllProcess.push(new Process(3, arrivalTime, brustTime));

  return 3
}

function validateProcessTable(tbl){

    for (var i = 0; i < tbl.rows.length; i++) {
      for (var j = 0; j < tbl.rows[i].cells.length; j++) {
        if (i != 0 && j != 0) {
          cell = document.getElementById(i + "" + j)
          if (!cell.checkValidity()) {
            cell.reportValidity()
            return false
          }
        }
      }
    }
    return true;
}

function main(randomState = 0){

  ReadyQueue = new Queue()
  CompletedQueue = new Queue()
  ReadyQueueHistory = []
  CompletedQueueHistory = []
  ProcessChart = []
  Timer = 0


  if (randomState == 1) {
    quantom = 2
    no_of_process = 2
    createTable(no_of_process)
    AllProcess = createRandomProcess(no_of_process)
    fillTable()

  }else {
    no_of_process = Number(document.getElementById('noOfProcess').value)
    quantom = Number(document.getElementById('quantom').value)
    readTable()
  }

  if (validateProcessTable(document.getElementById('myTable'))) {
    AllProcess = sortprocesses(AllProcess);
    ProcessChart = createProcessChart(no_of_process + 1)
    roundRobin(quantom)
  }else {
    return false
  }

  return true

}
