function generateRandomNumber()
{
    max = 5
    min = 1
    return parseInt(Math.random() * (max - min) + min);
}
function generateRandomQuntum()
{
    max = 5
    min = 1
    return parseInt(Math.random() * (max - min) + min);
}
function deleteALLChilds(myNode) {
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

function copyCanvasToAnalys() {
    var source = document.getElementById('processChartCanvas')
    // var target = document.getElementById('processChartDivAnalysis')

    var sourceImageData = source.toDataURL("image/png");
//  ContextProcessChart = target.getContext('2d');
//  ContextProcessChart.clearRect(0,0, target.width, target.height)
//  ContextProcessChart.drawImage(sourceImageData,0,0)
    var img = document.getElementById("analysis_img");
    img.src = sourceImageData;
    calculateAverageWaitingAndTurnAroundTime()
}


function calculateAverageWaitingAndTurnAroundTime() {

    deleteALLChilds(document.getElementById('analysisTable'))

    div = document.getElementById('analysisTable')
    outputTable = document.createElement('TABLE')
    var averageWaitingTime = 0
    var averageTurnAroundTime = 0
    for (var i = 0; i < ProcessChart.length; i++) {
        var yellow = 0
        var green = 0
        row = outputTable.insertRow()
        if (i == 0) {
            col = row.insertCell()
            col.style.width = "20%"
            col.innerHTML = "Time"
            col = row.insertCell()
            col.style.width = "40%"
            col.innerHTML = "Waiting Time"
            col = row.insertCell()
            col.style.width = "40%"
            col.innerHTML = "Turn Around Time"
        } else {
            for (var j = 0; j < ProcessChart[i].length; j++) {
                if (ProcessChart[i][j].color == READY) {
                    yellow++
                } else if (ProcessChart[i][j].color == EXECUTING) {
                    green++
                }
            }

            col = row.insertCell()
            col.innerHTML = "P" + i
            col = row.insertCell()
            col.innerHTML = yellow
            col = row.insertCell()
            col.innerHTML = green + yellow
        }
        averageWaitingTime += yellow
        averageTurnAroundTime += green + yellow
    }

    row = outputTable.insertRow()
    col = row.insertCell()
    col.innerHTML = "Total"
    col = row.insertCell()
    col.innerHTML = averageWaitingTime
    col = row.insertCell()
    col.innerHTML = averageTurnAroundTime



    localdiv = document.createElement('div')
    localdiv.setAttribute("style", "margin:0 auto; text-align : center")
    label1 = document.createElement('label')
    label1.setAttribute("style", "text-align:center")
    label1.innerHTML = "Waiting Time for a Process = ( Turnaround Time - Burst Time )"
    localdiv.appendChild(label1)
    div.appendChild(localdiv)

    localdiv = document.createElement('div')
    localdiv.setAttribute("style", "margin:0 auto; text-align : center")
    label1 = document.createElement('label')
    label1.setAttribute("style", "text-align:center")
    label1.innerHTML = "Turnaround Time for a Process = (Completion Time - Arrival Time)"
    localdiv.appendChild(label1)
    div.appendChild(localdiv)

    div.appendChild(document.createElement('br'))

    outputTable.setAttribute("style", "margin:0 auto; text-align : center")
    div.appendChild(outputTable)

    div.appendChild(document.createElement('br'))


    div1 = document.createElement('div')
    div1.setAttribute(
            "style", "width:100% ; margin:0 auto ; display: inline-flex");

    label1 = document.createElement('label')
    label1.setAttribute("style", "margin:0 auto;")
    label1.innerHTML = "Average Waiting Time"
    div1.appendChild(label1)


    span1 = document.createElement('span')
    span1.innerHTML = (averageWaitingTime / (ProcessChart.length - 1))
    span1.setAttribute("style", "margin:0 auto;")
    div1.appendChild(span1)

    div.appendChild(div1)

    div1 = document.createElement('div')
    div1.setAttribute(
            "style", "width:100%; margin:0 auto; display: inline-flex");

    label1 = document.createElement('label')
    label1.setAttribute("style", "margin:0 auto;")

    label1.innerHTML = "Average Turnaround Time"
    div1.appendChild(label1)


    span1 = document.createElement('span')
    span1.innerHTML = averageTurnAroundTime / (ProcessChart.length - 1)
    span1.setAttribute("style", "margin:0 auto;")
    div1.appendChild(span1)
    div.appendChild(div1)

}


function playRealLifeExample() {
    // window.open("trafficLight.html","_top")
    window.open("trafficLight.html", 'name', 'height=200,width=150')


    // document.getElementById("trafficlightDemo").innerHTML='<object type="text/html" data="trafficLight.html" ></object>';
    // document.getElementById('trafficlightDemo').style.display = "block";
}

function load_home() {

}
