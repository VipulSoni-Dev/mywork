class Process{
  constructor(id, arrivalTime, brustTime) {
    this.id = id;
    this.arrivalTime = arrivalTime;
    this.brustTime = brustTime;
    this.remainingExecutionTime = brustTime;
    this.status = LOADED;
  }

  isComplete(){
    return this.remainingExecutionTime <= 0;
  }
  setProcessRt(rt)
  {
     this.remainingExecutionTime=rt; 
  }
  setProcessStatus(st)
  {
     this.status=st; 
  }
  getProcessId() {
      return this.id;
  }
  getProcessAt() {
      return this.arrivalTime;
  }
  getProcessBt() {
      return this.brustTime;
  }
  getProcessRt() {
      return this.remainingExecutionTime;
  }
  getProcessStatus() {
      return this.status;
  }

}

function printProcess(process){
  data = []
  for (var i = 0; i < process.length; i++) {
    data.push([
      process[i].id,
      process[i].arrivalTime,
      process[i].brustTime,
      process[i].remainingExecutionTime,
      process[i].status
    ]);
  }
}

function sortprocesses(process){
  return process.sort(function(a,b){
    return a.arrivalTime - b.arrivalTime;
  });
}

