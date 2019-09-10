var data = [];
var AnimTrafficChart = null
var ContextTrafficChart = null
var CanvasTrafficChart = null

var Top = null;
var bottom = null;
var right = null;
var left = null;
var radius = 20
class light{
    constructor(x,y,r,color,timeStamp){
        this.x=x;
        this.y=y;
        this.r=r;
        this.color=color;
        this.timeStamp = timeStamp;
    }
}


var topCenter = null
var rightCenter = null
var bottomCenter = null
var leftCenter = null


function setCenters() {
  bottomCenter = [ CanvasTrafficChart.width / 2, CanvasTrafficChart.height  * (3 / 4)]
  topCenter = [ CanvasTrafficChart.width / 2, CanvasTrafficChart.height * (1 / 4)]
  rightCenter = [ CanvasTrafficChart.width * (3 / 4), CanvasTrafficChart.height / 2]
  leftCenter = [ CanvasTrafficChart.width * (1 / 4) , CanvasTrafficChart.height / 2 ]


  Top = new light(topCenter[0],topCenter[1],radius,"white","0");
  left = new light(leftCenter[0],leftCenter[1],radius,"white","0");
  right = new light(rightCenter[0],rightCenter[1],radius,"white","0");
  bottom = new light(bottomCenter[0],bottomCenter[1],radius,"white","0");
}



function createDataSet(){

    data.push({left: "R8", top: "R5", right: "R2", bottom: "G2"});
    data.push({left: "R7", top: "R4", right: "R1", bottom: "G1"});
    data.push({left: "R6", top: "R3", right: "Y1", bottom: "R9"});
    data.push({left: "R5", top: "R2", right: "G2", bottom: "R8"});
    data.push({left: "R4", top: "R1", right: "G1", bottom: "R7"});
    data.push({left: "R3", top: "Y1", right: "R9", bottom: "R6"});
    data.push({left: "R2", top: "G2", right: "R8", bottom: "R5"});
    data.push({left: "R1", top: "G1", right: "R7", bottom: "R4"});
    data.push({left: "Y1", top: "R9", right: "R6", bottom: "R3"});
    data.push({left: "G2", top: "R8", right: "R5", bottom: "R2"});
    data.push({left: "G1", top: "R7", right: "R4", bottom: "R1"});
    data.push({left: "R9", top: "R6", right: "R3", bottom: "Y1"});

}

function returnColor(c){
    if(c.substring(0,1)=="R"){
        return "red";
    }
    else if(c.substring(0,1)=="G"){
        return "green";
    }
    else if(c.substring(0,1)=="Y"){
        return "yellow";
    }
}

function initiateTrafficLight(){

    Top.color = returnColor(data[0].top);
    left.color = returnColor(data[0].left);
    right.color = returnColor(data[0].right);
    bottom.color = returnColor(data[0].bottom);

    Top.timeStamp = data[0].top.substring(1,2);
    left.timeStamp = data[0].left.substring(1,2);
    right.timeStamp = data[0].right.substring(1,2);
    bottom.timeStamp = data[0].bottom.substring(1,2);

}

function setTrafficLight(i){
    Top.color = returnColor(data[i].top);
    left.color = returnColor(data[i].left);
    right.color = returnColor(data[i].right);
    bottom.color = returnColor(data[i].bottom);
}

function setTrafficTime(i){
    Top.timeStamp = data[i].top.substring(1,2);
    left.timeStamp = data[i].left.substring(1,2);
    right.timeStamp = data[i].right.substring(1,2);
    bottom.timeStamp = data[i].bottom.substring(1,2);
}

function drawLights(i){

    setTrafficLight(i);


    ContextTrafficChart.beginPath();
    ContextTrafficChart.arc(Top.x, Top.y, Top.r, 0, 2 * Math.PI, false);
    ContextTrafficChart.lineWidth = 2;
    ContextTrafficChart.strokeStyle = "black";
    ContextTrafficChart.fillStyle = Top.color;
    ContextTrafficChart.fill();
    ContextTrafficChart.stroke();

    ContextTrafficChart.beginPath();
    ContextTrafficChart.arc(left.x, left.y, left.r, 0, 2 * Math.PI, false);
    ContextTrafficChart.lineWidth = 2;
    ContextTrafficChart.strokeStyle = "black";
    ContextTrafficChart.fillStyle = left.color;
    ContextTrafficChart.fill();
    ContextTrafficChart.stroke();

    ContextTrafficChart.beginPath();
    ContextTrafficChart.arc(right.x, right.y, right.r, 0, 2 * Math.PI, false);
    ContextTrafficChart.lineWidth = 2;
    ContextTrafficChart.strokeStyle = "black";
    ContextTrafficChart.fillStyle = right.color;
    ContextTrafficChart.fill();
    ContextTrafficChart.stroke();

    ContextTrafficChart.beginPath();
    ContextTrafficChart.arc(bottom.x, bottom.y, bottom.r, 0, 2 * Math.PI, false);
    ContextTrafficChart.lineWidth = 2;
    ContextTrafficChart.strokeStyle = "black";
    ContextTrafficChart.fillStyle = bottom.color;
    ContextTrafficChart.fill();
    ContextTrafficChart.stroke();
}

function startTrafficLight(){
    var i=0
    AnimTrafficChart = new Animation("trafficCanvas");
    CanvasTrafficChart = AnimTrafficChart.getCanvas();
    ContextTrafficChart = AnimTrafficChart.getContext();

    setCenters()

    createDataSet();
    function frame(){
        if(i%10==0 && i%11==0){
            ContextTrafficChart.clearRect(0, 0 , CanvasTrafficChart.width, CanvasTrafficChart.height);
            drawLights((i/110)%12);
            writeTextTraffic((i/110)%12);
        }
        i++;
    }
    AnimTrafficChart.setStage(frame);
    AnimTrafficChart.start();
}
function stopTrafficLight(){
  if (AnimTrafficChart != null) {
      AnimTrafficChart.stop();
  }
}
function writeTextTraffic(i){

    setTrafficTime(i);
    setTrafficLight(i);

    ContextTrafficChart.beginPath();
    ContextTrafficChart.font = "40px Arial";
    ContextTrafficChart.fillStyle = Top.color;
    ContextTrafficChart.fillText(Top.timeStamp, topCenter[0] - radius / 2, topCenter[1] - (2 * radius ));
    ContextTrafficChart.stroke();

    ContextTrafficChart.beginPath();
    ContextTrafficChart.font = "40px Arial";
    ContextTrafficChart.fillStyle = left.color;
    ContextTrafficChart.fillText(left.timeStamp, leftCenter[0] - ( 3 * radius ), leftCenter[1] + radius / 2);
    ContextTrafficChart.stroke();

    ContextTrafficChart.beginPath();
    ContextTrafficChart.font = "40px Arial";
    ContextTrafficChart.fillStyle = right.color;
    ContextTrafficChart.fillText(right.timeStamp, rightCenter[0] + (2 * radius), rightCenter[1] + (radius / 2));
    ContextTrafficChart.stroke();

    ContextTrafficChart.beginPath();
    ContextTrafficChart.font = "40px Arial";
    ContextTrafficChart.fillStyle = bottom.color;
    ContextTrafficChart.fillText(bottom.timeStamp, bottomCenter[0] - (radius / 2) , bottomCenter[1] + (3 * radius));
    ContextTrafficChart.stroke();

}
