/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * All variables are already declared in roundRobin.js so i m not declaring it here
*/
function updateProcessChart() {
    for (var i = 0; i < AllProcess.length; i++) {
        ProcessChart[AllProcess[i].id].push({
            'color': AllProcess[i].status,
            'id': AllProcess[i].id
        })
    }
    Timer += 1
    resetProcessStatus(ReadyQueue, AllProcess, Timer)
    saveReadyQeueStage()
    saveCompleteQeueStage()
}

function sjf()
{
    while (!checkisFinish(AllProcess))
    {
        executingProcess = checkNextProcess(ReadyQueue)

        if (executingProcess == null) {
            updateProcessChart()
            continue
        }
        executingProcess = selectNextProcessForExecution(ReadyQueue)
        executingProcess.status = EXECUTING
        for (var i = 0; i < executingProcess.brustTime; i++) {
            updateProcessChart(AllProcess)
        }
        
        executingProcess.remainingExecutionTime -= executingProcess.brustTime
        addToCompleteQueue(CompletedQueue, executingProcess);
        
    

    }
      saveReadyQeueStage()
      saveCompleteQeueStage()
}

function runsjf()
{
    ReadyQueue = new Queue()
    CompletedQueue = new Queue()
    ReadyQueueHistory = []
    CompletedQueueHistory = []
    ProcessChart = []
    AllProcess = []
    Timer = 0

    no_of_process = Number(document.getElementById('noOfProcess').value)
    if (validateProcessTable(document.getElementById('myTable'))) {
        readTable();
        
        ProcessChart = createProcessChart(no_of_process + 1)
        sjf();
        return true;
    } else {
        return false
    }
}