var AnimProcessChart = null
var CanvasProcessChart = null
var ContextProcessChart = null

var xorigin = 10
var yorigin = 0
var xtime = null;
var ytime = null;
var x = null;
var y = null;
var time_slap = null;
var frameCount = null;
var extraa = 7
var textmargin = 100
var executionQueueGap = 2
var readyQueueGap = 4
var completedQueueGap = 6
var width = null;
var height = null;

var status = "reset"

function initializeVariable(){
  xtime = xorigin
  ytime = yorigin
  x = xorigin;
  y = yorigin;
  time_slap = 0
  frameCount = 0
}

function pauseSimulator(){
  status = "pause"
  stop1()
}

function resetEverything() {
  location.reload();
}

function stop1()
{
  AnimProcessChart.stop();
}

function completedSimulation() {
  AnimProcessChart.stop();
  status = "reset"
}

function setWidthHeight(){
  width = Number(Number(CanvasProcessChart.width) / (Number(ProcessChart[1].length) + 3))
  height = Number(Number(CanvasProcessChart.height) / (Number(ProcessChart.length) + extraa))
}

function startSimulator(){

  console.log(status);

  if (status != "pause") {
    if (!runsjf()) {
      return
    }
    status = "running"
    initializeVariable()
  }

  if (AnimProcessChart == null) {
      AnimProcessChart = new Animation("processChartCanvas");
      CanvasProcessChart = AnimProcessChart.getCanvas();
      ContextProcessChart = AnimProcessChart.getContext();
      ContextProcessChart.clearRect(0, 0, CanvasProcessChart.width, CanvasProcessChart.height);
  }
  else{
    if (status != "pause") {
      stop1()
      ContextProcessChart.clearRect(
        0,
        0,
        CanvasProcessChart.width,
        CanvasProcessChart.height
      )
    }
    if (status == "reset") {
      status = "running"
      initializeVariable()
      ContextProcessChart.clearRect(0, 0, CanvasProcessChart.width, CanvasProcessChart.height);
      console.log("Here");
    }
    status = "running"
  }

  setWidthHeight()
  var frame_controll = parseInt(100 / Number(document.getElementById('speed').value))
  AnimProcessChart.setStage(frame);
  AnimProcessChart.start();

  function writeText(text, x, y){
    y = y + height - 3
    ContextProcessChart.beginPath();
    ContextProcessChart.font = "10px Arial";
    ContextProcessChart.fillStyle = "black";
    ContextProcessChart.fillText(text, x, y)
    ContextProcessChart.stroke();
  }

  function createRectangle(x, y, id, color = "white", text=null){
    y = y + id * height
    ContextProcessChart.beginPath();
    ContextProcessChart.rect(x, y, width, height);
    ContextProcessChart.fillStyle = color;
    ContextProcessChart.fill();
    // ContextProcessChart.lineWidth = "1";

    if (text != null) {
      ContextProcessChart.font = "10px Arial";
      ContextProcessChart.fillStyle = "white";
      ContextProcessChart.fillText(text, x + 3, (y + height - 2))
    }
    ContextProcessChart.stroke();
  }

  function createExecutingProcess(flag = 1){
    var xOriginForReadyQueue = xorigin
    var yOriginForReadyQueue = yorigin + (no_of_process + executionQueueGap) * height

    writeText("Executing Process", xOriginForReadyQueue, yOriginForReadyQueue)
    xOriginForReadyQueue = xOriginForReadyQueue + textmargin

    if (flag) {
      for (var i = 0; i < ProcessChart.length; i++) {
        if (i != 0) {
          if (ProcessChart[i][time_slap].color == EXECUTING) {
            createRectangle(
              xOriginForReadyQueue,
              yOriginForReadyQueue,
              0,
              "green",
              ProcessChart[i][time_slap].id
            )
          }
        }
      }
    }
  }

  function createReadyQueue(){
    var xOriginForReadyQueue = xorigin
    var yOriginForReadyQueue = yorigin + (no_of_process + readyQueueGap) * height

    writeText("Ready Queue", xOriginForReadyQueue, yOriginForReadyQueue)
    xOriginForReadyQueue = xOriginForReadyQueue + textmargin

    for (var i = 0; i < ReadyQueueHistory[time_slap].length; i++) {
      createRectangle(
        xOriginForReadyQueue,
        yOriginForReadyQueue,
        0,
        "blue",
        ReadyQueueHistory[time_slap][i].id
      )
      xOriginForReadyQueue = xOriginForReadyQueue + width
    }
  }

  function createCompletedQueue(){
    var xOriginForReadyQueue = xorigin
    var yOriginForReadyQueue = yorigin + (no_of_process + completedQueueGap) * height

    writeText("Complete Queue", xOriginForReadyQueue, yOriginForReadyQueue)
    xOriginForReadyQueue = xOriginForReadyQueue + textmargin

    for (var i = 0; i < CompletedQueueHistory[time_slap].length; i++) {
      createRectangle(
        xOriginForReadyQueue,
        yOriginForReadyQueue,
        0,
        "green",
        CompletedQueueHistory[time_slap][i].id
      )
      xOriginForReadyQueue = xOriginForReadyQueue + width
    }
  }

  function removeReadyQueue() {
    var xOriginForReadyQueue = xorigin
    var yOriginForReadyQueue = yorigin + (no_of_process + readyQueueGap) * height

    ContextProcessChart.clearRect(
      xOriginForReadyQueue - 3,
      yOriginForReadyQueue - 3,
      CanvasProcessChart.width,
      height + 5
    )
  }

  function removeCompletedQueue() {
    var xOriginForReadyQueue = xorigin
    var yOriginForReadyQueue = yorigin + (no_of_process + completedQueueGap) * height

    ContextProcessChart.clearRect(
      xOriginForReadyQueue - 3,
      yOriginForReadyQueue - 3,
      CanvasProcessChart.width,
      height + 5
    )
  }

  function removeExecutingProcess() {
    var xOriginForReadyQueue = xorigin
    var yOriginForReadyQueue = yorigin + (no_of_process + executionQueueGap) * height

    ContextProcessChart.clearRect(
      xOriginForReadyQueue - 3,
      yOriginForReadyQueue - 3,
      CanvasProcessChart.width,
      height + 5
    )
  }

  function drawProcessChart() {
    for (var i = 0; i < ProcessChart.length; i++) {
      if (i != 0) {
        createRectangle(
          x,
          y,
          ProcessChart[i][time_slap].id,
          color = Mycolor[ProcessChart[i][time_slap].color],
          text = ProcessChart[i][time_slap].id
        )
      }
    }
  }

  function writeProcessName(){
    for (var i = 0; i < ProcessChart.length; i++) {
      if (i != 0) {
        createRectangle(
          x,
          y,
          ProcessChart[i][time_slap].id,
          color = 'black',
          text = "P" + ProcessChart[i][time_slap].id
        )
      }
    }
  }

  function frame(){
    if (frameCount % frame_controll == 0) {

      if (time_slap == 0) {
          writeProcessName()
          x = xorigin + width
          xtime = xorigin + width
          y = yorigin
      }

      writeText(time_slap, xtime, ytime)
      xtime = xtime + width

      drawProcessChart()

      if (time_slap > 1) {
        removeExecutingProcess()
        removeReadyQueue()
        removeCompletedQueue()
      }
      createExecutingProcess()
      createReadyQueue()
      createCompletedQueue()

      x = x + width;
      time_slap += 1
    }

    if (time_slap == ProcessChart[1].length) {
      removeExecutingProcess()
      removeReadyQueue()
      removeCompletedQueue()
      createReadyQueue()
      createCompletedQueue()
      writeText(time_slap, xtime, ytime)
      createExecutingProcess(0)

      completedSimulation()
    }

    frameCount += 1
  }
}
