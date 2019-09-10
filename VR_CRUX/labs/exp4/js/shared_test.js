/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var control = null;
//var flow_var = 1;
//var data  =null;
//var t=null;

var test_data = generateRandomNumber();  
var result = null;
var toggle = false;
function set()
{
    x = document.getElementById("test_send");
    x.innerHTML = "Sender(data:"+test_data+")";
    
}

function test_send()
{
    x = document.getElementById("test_row1");
    x.innerHTML = "r:"+test_data;
    //var tmp = prompt("calculate area of "+test_data);
    
}
function test_compute()
{
    var tmp = prompt("Calculate area of "+test_data);
    x = document.getElementById("test_row2");
    x.innerHTML = "Area:"+tmp;
    result = tmp;
    
}
function test_receive()
{
    if(test_data == result)
    {
        alert("Compute area of given data first......")
    }
    else if(result == (3.14*test_data*test_data).toFixed(2))
    {
            x = document.getElementById("test_receiver");
            x.innerHTML = "Data Received:"+result;
            x.style = "position: absolute;margin: 0 57%;height: 11%;width: 14.5%;padding: 2.5% 5%;background:lightgreen";
    }
    else
    {
        x = document.getElementById("test_receiver");
        x.innerHTML = "Data Received:"+result;
        x.style = "position: absolute;margin: 0 57%;height: 11%;width: 14.5%;padding: 2.5% 5%;background:red";
        alert("area computed is wrong")
            
    }
}


function test_reset()
{
    test_data = generateRandomNumber();
    set();
    x = document.getElementById("test_row1");
    x.innerHTML = "-";
    x = document.getElementById("test_row2");
    x.innerHTML = "-";
    
    
        x = document.getElementById("test_receiver");
        x.innerHTML = "Receiver";
        x.style = "position: absolute;margin: 0 57%;height: 11%;width: 14.5%;padding: 2.5% 5%";
        
    
}

function test_help()
{
    if(toggle==false)
    {
       x = document.getElementById("test_div");
       x.style = "width:100%; display:none";
       
       x = document.getElementById("test_help_div");
       x.style = "display:flex";
       toggle =true;
    }    
    else
    {
       x = document.getElementById("test_div");
       x.style = "width:100%; display:flex";
       
       x = document.getElementById("test_help_div");
       x.style = "display:none";
       toggle =false;
    }
}

