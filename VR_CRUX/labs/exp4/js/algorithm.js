function prepareReadyQueue(Queue, processes){
  for (var i = 0; i < processes.length; i++) {
    if (processes[i].status == READY) {
      Queue.enqueue(processes[i])
    }
  }
}

function selectNextProcessForExecution(Queue){

  Queue.linkedList = sortprocessesQ(Queue.linkedList)
    return Queue.dequeue()
}

function checkNextProcess(Queue){
  return Queue.peek()
}

function addToCompleteQueue(Queue, process){
  process.status = COMPLETED
  Queue.enqueue(process)
}

function addToReadyQueue(Queue, process){
  if (process.status == READY) {
    Queue.enqueue(process)
  }
}

function createProcessChart(no_of_process){
  data = [no_of_process]
  for(var i = 0; i< no_of_process; i++){
    data[i] = []
  }
  return data;
}

function resetProcessStatus(Queue, Processes, time) {
  for (var i = 0; i < Processes.length; i++) {
    if (Processes[i].status == LOADED) {
      if(Processes[i].arrivalTime <= time) {
        Processes[i].status = READY
        addToReadyQueue(Queue, Processes[i])
      }
    }
  }
}

function checkisFinish(Processes) {
  for (var i = 0; i < Processes.length; i++) {
    if (Processes[i].status != COMPLETED) {
      return false;
    }
  }
  return true
}
