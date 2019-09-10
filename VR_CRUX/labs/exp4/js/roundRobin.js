// import Queue from './queue.js';
// import Process from '/Volumes/Hiren/bootcamp/crux_hiren/dashboard/static/js/process.js';


var LOADED = 0
var READY = 1
var EXECUTING = 2
var COMPLETED = 3
var Mycolor = ['white', "yellow", "green", "white"]
var AllProcess = null
var ReadyQueue = null
var CompletedQueue = null
var ExecutingProcess = null
var ReadyQueueHistory = []
var CompletedQueueHistory = []
var ProcessChart = null
var Timer = 0

function updateProcessChart(){
  for (var i = 0; i < AllProcess.length; i++) {
    ProcessChart[AllProcess[i].id].push({
      'color':AllProcess[i].status,
      'id':AllProcess[i].id
    })
  }
  Timer +=1
  resetProcessStatus(ReadyQueue, AllProcess, Timer)
  saveReadyQeueStage()
  saveCompleteQeueStage()
}

function roundRobin(quntom){
  while (!checkisFinish(AllProcess)) {
    executingProcess = checkNextProcess(ReadyQueue)
    if (executingProcess == null) {
      updateProcessChart()
      continue
    }
    executingProcess = selectNextProcessForExecution(ReadyQueue)
    executingProcess.status = EXECUTING
    if (executingProcess.remainingExecutionTime >= quntom) {
      for (var i = 0; i < quntom; i++) {
        updateProcessChart(AllProcess)
      }
      executingProcess.remainingExecutionTime -= quntom

      if (executingProcess.remainingExecutionTime == 0) {
        addToCompleteQueue(CompletedQueue, executingProcess);
      }
      else{
        executingProcess.status = READY
        addToReadyQueue(ReadyQueue, executingProcess);
      }
    }
    else{
      for (var i = 0; i < executingProcess.remainingExecutionTime; i++) {
        updateProcessChart()
      }
      executingProcess.remainingExecutionTime = 0
      addToCompleteQueue(CompletedQueue, executingProcess);
    }
  }
  saveReadyQeueStage()
  saveCompleteQeueStage()
}
