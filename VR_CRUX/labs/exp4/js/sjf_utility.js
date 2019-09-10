function drawTableChart()
{

    for (i = 0; i <= no_of_process; i++)
    {
        var tbl1 = document.getElementById('fcfsTable').insertRow(i)

        for (var j = 0; j < Timer + 2; j++)
        {

            var y = tbl1.insertCell(j);
            if (i == 0)
            {
                y.style = "border:none;background-color: white"
                y.innerHTML = "<div style='transform: rotate(-44deg);-webkit-transform-origin-x: 91%;-webkit-transform-origin-y: 140%;background-color: #ffffff;color: black; ' >P/T<div>"
                if (j == 0)
                {

                }
                else if (j > 10)
                {
                    y.style = "color: black;border: none;padding: 30px 27px 0px 0px;text-align: start;background-color: rgb(255, 255, 255);"
                    y.innerHTML = j - 1
                } 
                else
                {
                    y.style = "color: black;border: none;padding: 30px 35px 0px 0px;text-align: start;background-color: rgb(255, 255, 255);"
                    y.innerHTML = j - 1
                }
            }
            else
            {
                if (j == 0)
                {
                    y.style = "padding: 2% auto;text-align: center;/*background-color: #000000ad*/background-color:black;border-color:black;text-align: center;color: white;"
                    y.innerHTML = "P" + i;
                } 
                else if (j == Timer + 1)
                {
                    tbl1.deleteCell(j);
                }
            }
        }
    }


}


function placeProcess()
{
    //var tbl = document.getElementById('fcfsTable')

    for (i = 0; i <= no_of_process; i++)
    {

        for (var j = 0; j < Timer ; j++)
        {
            if (i == 0) {
                continue
            } else if (j == 0) {
                continue
            } else
            {
                if (ProcessChart[i][j].color == 0)
                {

                } else if (ProcessChart[i][j].color == 1)
                {
                    //tbl;
                    var y = getCell("fcfsTable",i,j+1)
                    y.setAttribute("class","ready")
                    y.innerHTML=i
                } else if (ProcessChart[i][j].color == 2)
                {
                    //tbl;
                    var y = getCell("fcfsTable",i,j+1)
                    y.setAttribute("class","executing")
                    y.innerHTML=i
                }else if (ProcessChart[i][j].color == 3)
                {
                    //tbl;
                    var y = getCell("fcfsTable",i,j+1)
                    y.setAttribute("class","")
                    
                }
            }

        }
    }
}

function getCell(id,row,cell) {
    var x = document.getElementById(id).rows[row].cells;
    return x[cell];
}