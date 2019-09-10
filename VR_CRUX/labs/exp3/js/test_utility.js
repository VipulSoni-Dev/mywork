//var DATA=[];
//var lb
//var counter = 5;

function testFillTable()
{
//    TestAllProcess = createRandomProcess(no_of_process)
//    fillTestTable();
//    test_fill_btn();
//    document.(window.location.href);
   TestReadyQueue = null;
    TestCompletedQueue = null;

    TestReadyQueue = new Queue()
    TestCompletedQueue = new Queue()
    TestTimer = 0


  
    no_of_process = 5
    createTestTable(no_of_process)
    TestAllProcess = createRandomProcess(no_of_process)
    fillTestTable()
    
    
    TestProcessChart = createProcessChart(no_of_process + 1)
    TestAllProcess = sortprocesses(TestAllProcess);
    testsjf()

    //code for deleting old table and creating new table 
    var tbl1 = document.getElementById('chartTable')
    var parent = tbl1.parentNode
    if (tbl1)parent.removeChild(tbl1)
    var tblnew = document.createElement('table')
    tblnew.setAttribute('id', 'chartTable')
    parent.appendChild(tblnew)
    TableChart()

    // window.open(window.location.href, "_self")
}

function printQuantom()
{
    document.write(quantom)
}


function addToTestCompleteQueue(process)
{
    TestCompleteQueue.enqueue(process)
}
function printval()
{
    for (i = 0; i < TestCompleteQueue.linkedList.length; i++)
    {
        var t = TestCompleteQueue.linkedList[i];
        if (t != null)
            document.write(t.getProcessStatus());

    }

}
function totalBt()
{
    var Total = 0;
    for (var i = 0; i < TestCompleteQueue.linkedList.length; i++)
    {

        if (checkCompletedProcess(i))
            Total += TestCompleteQueue.linkedList[i].getProcessBt();

    }


    return (Total + (TestCompleteQueue.linkedList[0].getProcessAt() + 1));
}
function checkCompletedProcess(i)
{
    if (TestCompleteQueue.linkedList[i].getProcessStatus() == 3)
    {
        return true;
    } else
    {
        return false;
    }

}
function TableChart()
{

    for (i = 0; i < 6; i++)
    {
        var tbl1 = document.getElementById('chartTable').insertRow(i)

        for (var j = 0; j < TestTimer + 2; j++)
        {
            var y = tbl1.insertCell(j);
            if (i == 0)
            {
                y.style = "border:none;"
                y.innerHTML = "<div style='transform: rotate(-44deg);-webkit-transform-origin-x: 99%;-webkit-transform-origin-y: 99%;color: black; ' >PT<div>"
                if (j == 0)
                {

                } else if (j > 10)
                {
                    y.style = "color: black;border: none;padding: 30px 27px 0px 0px;text-align: start;"
                    y.innerHTML = j - 1
                } else {
                    y.style = "color: black;border: none;padding: 30px 35px 0px 0px;text-align: start;"
                    y.innerHTML = j - 1
                }
            } else
            {
                if (j == 0) {
                    y.style = "padding: 2% auto;text-align: center;background-color: #000000ad;text-align: center;color: white;"
                    y.innerHTML = "P" + i;
                } else if (j == TestTimer + 1)
                {
                    tbl1.deleteCell(j);
                } else
                {
                    var tbldiv = document.createElement("lable")
                    tbldiv.id = "tbl" + i
                    tbldiv.innerHTML = ""
                    tbldiv.style = "text-align: center;"
                    tbldiv.setAttribute("ondrop", "droplbl(event)")
                    tbldiv.setAttribute("data", "-")
                    tbldiv.setAttribute("ondragover", "allowdrop(event)")
                    tbldiv.setAttribute("ondblclick", "dropdelete(this)")
                    y.style = "padding:0"
                    y.setAttribute("ondrop", "drop(event)")
                    y.setAttribute("ondragover", "allowdrop(event)")
                    y.setAttribute("ondblclick", "dropdelete_column(this)")
                    y.appendChild(tbldiv);

                }
            }
        }


    }

}
function resetTableChart()
{

    for (var i = 0; i < 6; i++)
    {
        for (var j = 0; j < TestTimer + 1; j++)
        {
            if (i == 0)
            {
                continue
            } else if (j == 0) {
                continue
            } else {
                resetCellContent('chartTable', i, j)
            }
        }
    }

}
function help()
{

    var tmp = document.getElementById('chart_table_div')
    var help = document.getElementById('help')
    if (tmp.getAttribute("flag") == "false")
    {
        tmp.style = "display:none"
        tmp.setAttribute("flag", true)
        help.style = "padding-left: 20%;padding-right: 20%;padding-top: 10%;display:flex"
    } else
    {
        tmp.style = ""
        tmp.setAttribute("flag", false)
        help.style = "padding-left: 20%;padding-right: 20%;padding-top: 10%;display:none"
    }
}
function createGanttChart()
{
    //document.getElementById('ganttChart')
    var tbl = document.getElementById('ganttChart').insertRow(0)
    for (i = 0; i < TestCompleteQueue.linkedList.length; i++)
    {
        var tbldiv = document.createElement("div")
        tbldiv.className = "lbl"
        tbldiv.innerHTML = "-"
        var y = tbl.insertCell(i);
        //  var z = x.insertCell(1);
        tbldiv.id = "tbl" + i
        tbldiv.setAttribute("ondrop", "droplbl(event)")
        tbldiv.setAttribute("data", "-")
        tbldiv.setAttribute("ondragover", "allowdrop(event)")
        tbldiv.setAttribute("draggable", "false")
        y.setAttribute("data-column", "process")
        y.setAttribute("ondrop", "drop(event)")
        y.setAttribute("ondragover", "allowdrop(event)")

        y.style = "width:auto;border: 1px solid #ddd;border-collapse: collapse;"
        y.appendChild(tbldiv);


    }
    createTimeLables();
}
function createProcessLables()
{

    for (i = 0; i < 5; i++)
    {
        //document.getElementById("lblDiv").removeChild()
        var lbl = document.createElement("div")
        lbl.id = "P" + (i + 1)
        lbl.setAttribute("data", i + 1)
        lbl.setAttribute("dragged", false)
        lbl.innerHTML = "P" + (i + 1)
        lbl.className = "lbl" + (i + 1)
        lbl.draggable = true
        lbl.setAttribute("ondragstart", "drag(event)")
        document.getElementById("lblDiv").appendChild(lbl);
    }
}
function allowdrop(ev) {
    ev.preventDefault();
}

function drag(ev) {

    ev.dataTransfer.setData("text", ev.target.id);
}
var flag = 0;
function droplbl(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    var tt = document.getElementById(data)
    ev.target.innerHTML = tt.id
    ev.target.setAttribute("data", tt.getAttribute("data"))
    ev.target.setAttribute("color", "2")
    if (!(validateDrop(ev.target)))
    {
        ev.target.parentNode.setAttribute("class", "wrongPorcess")
    }
    //flag=1;
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    var tt = document.getElementById(data)

    //tt.setAttribute("ondragstart", "dragdelete("+ev+")")

    tt.setAttribute("ondblclick", "dropdelete(" + (tt.id).toString() + ")")
    var child = ev.target.childNodes[0];

    //console.log(child)

    try {
        child.setAttribute("data", tt.getAttribute("data"))
    } catch (e) {
    }

    child.innerHTML = tt.id

    try {
        if (!(validateDrop(ev.target.childNodes[0])))
        {
            ev.target.setAttribute("class", "wrongPorcess")
        }
    } catch (e) {
    }


}
function dropdelete(element) {


    element.innerHTML = " "
    element.removeAttribute("color")
    element.parentNode.removeAttribute("class")
    element.setAttribute("data", "-")
    //  var elm =document.getElementById(id.id)
    // id.parentNode.removeChild(id)
    //console.log((document.getElementById(id.id)))

//    var data = ev.dataTransfer.getData("text");
//
//    ev.target.appendChild(document.getElementById(data));
//    ev.target.removeChild(document.getElementById(data));
}
function dropdelete_column(element)
{
    var child = element.childNodes[0];
    child.innerHTML = " "
    child.removeAttribute("color")
    child.parentNode.removeAttribute("class")
    child.setAttribute("data", "-")

}
function validateDrop(element)
{
    return (element.id == "tbl" + element.getAttribute("data"));
}
function verifyTable()
{

    //var tmp= document.getElementById("chartTable");
    for (i = 0; i < 6; i++)
    {
        if (i == 0)
            continue;
        for (j = 0; j < TestTimer + 1; j++)
        {
            if (j == 0)
                continue;
            else {
                console.log(getCellContent("chartTable", i, j))
            }
        }

    }

}

function getCellContent(id, row, cell) {
    var x = document.getElementById(id).rows[row].cells;
    return x[cell].childNodes[0];
}
function resetCellContent(id, row, cell) {
    var x = document.getElementById(id).rows[row].cells;

    x[cell].removeAttribute("class")
    x[cell].childNodes[0].innerHTML = " "
    //x[cell].childNodes[0].removeAttribute("class")
    x[cell].childNodes[0].setAttribute("data", "-")

}

function pushUserData()
{
    var t1 = 1;
    var dat = [5];
    dat[0] = [];
    for (var i = 0; i < 6; i++)
    {
        dat[t1] = [];
        if (i == 0)
            continue;
        for (var j = 0; j < TestTimer + 1; j++)
        {
            if (j == 0)
                continue;
            else {

                dat[t1].push({"status": getCellContent("chartTable", i, j).getAttribute("data")});

            }
        }
        t1++;
    }
//console.log(dat)
    return dat
}
function verifychart()
{
    var dat = pushUserData();
    for (var i = 0; i < 6; i++)
    {
        if (i == 0)
            continue;
        for (var j = 0; j < TestTimer; j++)
        {
            if ((dat[i][j].status == i) && (TestProcessChart[i][j].color == 2))
            {

                var x = document.getElementById("chartTable").rows[i].cells;
                x[(j + 1)].setAttribute("class", "correct");

                /// console.log(dat[i][j].status);
                //console.log(TestProcessChart[i][j]);

            } else if (dat[i][j].status != "-")
            {
                var x = document.getElementById("chartTable").rows[i].cells;
                x[(j + 1)].setAttribute("class", "wrong");
            } else if ((dat[i][j].status == "-") && (TestProcessChart[i][j].color == 2))
            {
                var x = document.getElementById("chartTable").rows[i].cells;
                x[(j + 1)].setAttribute("class", "empty");

            }
        }

    }


}