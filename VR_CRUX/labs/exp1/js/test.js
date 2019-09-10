var TestAverageWaitingTime;
var TestTurnAroundTime;
TestCompleteQueue = new Queue();

function test(randomState = 0){
  TestReadyQueue = new Queue()
 
  TestCompletedQueue = new Queue()
  TestTimer = 0



  //quantom = 3
  quantom =generateRandomQuntum();
  no_of_process = 5
  createTestTable(no_of_process)
  TestAllProcess = createRandomProcess(no_of_process)
  fillTestTable()

  TestProcessChart = createProcessChart(no_of_process + 1)
  TestAllProcess = sortprocesses(TestAllProcess);
  testRoundRobin(quantom)
  console.log(TestProcessChart)
  console.log(TestCompleteQueue.linkedList)
 // printval()
    //calculateAnalysis()
   // pushUserData()
}

function test_fill_btn()
{
  
  TestProcessChart = createProcessChart(no_of_process + 1)
  TestAllProcess = sortprocesses(TestAllProcess);
  //testRoundRobin(quantom)
 // printval()
    
}

function testRoundRobin(quntom){
  while (!checkisFinish(TestAllProcess)) {
    executingProcess = checkNextProcess(TestReadyQueue)
    //console.log(executingProcess)
    
    if (executingProcess == null) {
      updateTestProcessChart()
      continue
    }
    executingProcess = selectNextProcessForExecution(TestReadyQueue)
    executingProcess.status = EXECUTING
    if (executingProcess.remainingExecutionTime >= quntom) {
      for (var i = 0; i < quntom; i++) {
        updateTestProcessChart()
      }
      executingProcess.remainingExecutionTime -= quntom

      if (executingProcess.remainingExecutionTime == 0) {
        addToCompleteQueue(TestCompletedQueue, executingProcess);
      }
      else{
        executingProcess.status = READY
        addToReadyQueue(TestReadyQueue, executingProcess);
      }
    }
    else{
      for (var i = 0; i < executingProcess.remainingExecutionTime; i++) {
        updateTestProcessChart()
      }
      executingProcess.remainingExecutionTime = 0
      addToCompleteQueue(TestCompletedQueue, executingProcess);
    }
    addToTestCompleteQueue(executingProcess)
  }

}

function updateTestProcessChart(){

  for (var i = 0; i < TestAllProcess.length; i++) {
    TestProcessChart[TestAllProcess[i].id].push({
      'color':TestAllProcess[i].status,
      'id':TestAllProcess[i].id
    })
  }
  TestTimer +=1
  resetProcessStatus(TestReadyQueue, TestAllProcess, TestTimer)
}

function fillTestTable() {
  tbl = document.getElementById('testTable')
  for (var i = 0; i < TestAllProcess.length; i++) {
    document.getElementById("testTable" + (i + 1) + 1).innerHTML = TestAllProcess[i].arrivalTime
    document.getElementById("testTable" + (i + 1) +2).innerHTML = TestAllProcess[i].brustTime
  }
}

function createTestTable(no_of_process){

  var rn = no_of_process
  rn = rn + 1;

  var cn = 3;
  tbl = document.getElementById('testTable')
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
        input.id = "testTable" + r + c ;
        input.innerHTML = r
        y.appendChild(input);
      }
      else {
        var y =  x.insertCell();
        var input = document.createElement('span')
        input.type = "number"
        input.min = "0"
        input.max = "5"
        input.style.width = "100%"
        input.id = "testTable" + r + "" + c ;
        y.appendChild(input);
      }

    }
  }
}

function calculateAnalysis(){
  wait = 0
  turn = 0
  inQueue = 0
  for (var i = 0; i < TestProcessChart.length; i++) {
    for (var j = 0; j < TestProcessChart[i].length; j++) {
      if (i != 0) {
        if (TestProcessChart[i][j].color == READY) {
            wait ++
        }else if (TestProcessChart[i][j].color == EXECUTING) {
            turn ++
        }
      }
    }
  }
  res = [
    (wait / (TestProcessChart.length - 1)),
    (turn / (TestProcessChart.length - 1))
  ]
console.log(wait);
  awtr = Math.round(res[0] * 100) / 100
  attr = Math.round(res[1] * 100) / 100

  return res;
}


function varifyAnswer(){

  if (!document.getElementById('avgWait').checkValidity()) {
    document.getElementById('avgWait').reportValidity()
    return
  }
  if (! document.getElementById('avgTurn').checkValidity()) {
    document.getElementById('avgTurn').reportValidity()
    return
  }

  res = calculateAnalysis()

  awtr = Math.round(res[0] * 100) / 100
  attr = Math.round(res[1] * 100) / 100

  awt = parseFloat(document.getElementById('avgWait').value)
  att = parseFloat(document.getElementById('avgTurn').value)

  awt = Math.round(awt * 100) / 100
  att = Math.round(att * 100) / 100

    verifychart();

  if (awtr == awt && attr == att) {
      alert("Correct Answer")
  }
  else {
    if (awtr == awt) {
      alert("Averagw Waiting Time is Correct")
    }else if (attr == att) {
      alert("Averagw TurnAround Time is Correct")
    }
    else {
      alert("Both Answers are Wrong")
    }
  }


}
