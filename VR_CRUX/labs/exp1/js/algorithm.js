// Preparing Empty ready queue for the round robin algorithm
function prepareReadyQueue(Queue, processes){
  for (var i = 0; i < processes.length; i++) {
    if (processes[i].status == READY) {
      Queue.enqueue(processes[i])
    }
  }
}

// function to get the next process to execute
function selectNextProcessForExecution(Queue){
  return Queue.dequeue()
}

// function to check the next process to execute
function checkNextProcess(Queue){
  return Queue.peek()
}

// add the process to the completed queue after the complition of the process
function addToCompleteQueue(Queue, process){
  process.status = COMPLETED
  Queue.enqueue(process)
}

// add the process to the ready queue at the end of the queue
function addToReadyQueue(Queue, process){
  if (process.status == READY) {
    Queue.enqueue(process)
  }
}

// create empty process flow chat for the visualization purpose
function createProcessChart(no_of_process){
  data = [no_of_process]
  for(var i = 0; i< no_of_process; i++){
    data[i] = []
  }
  return data;
}

// reset the process chart after every iteration
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
// check if the process is finish or not
function checkisFinish(Processes) {
  for (var i = 0; i < Processes.length; i++) {
    if (Processes[i].status != COMPLETED) {
      return false;
    }
  }
  return true
}
