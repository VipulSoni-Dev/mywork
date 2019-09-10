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
  data = [];
 var p = new Process(process.id,process.arrivalTime,process.brustTime) ;
 p.setProcessRt(process.remainingExecutionTime);
 p.setProcessStatus(process.status)
//    data.push([
//      process.id,
//      process.arrivalTime,
//      process.brustTime,
//      process.remainingExecutionTime,
//      process.status
//    ]);
   return p;
  
}

function sortprocesses(process){
  return process.sort(function(a,b){
    return (a.arrivalTime - b.arrivalTime)
 
  });
}

function sortprocessesQ(Q){
  return Q.sort(function(a,b){
    return (a.brustTime - b.brustTime)
    });
}