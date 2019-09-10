/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var control = null;
var flow_var = 1;
var data  =null;
var t=null;
function  init()
{
   clearTimeout(t); 
 
   
   data = generateRandomNumber();  
   x = document.getElementById("row1");
   x.innerHTML = "-";
   x = document.getElementById("row2");
   x.innerHTML = "-";
   x = document.getElementById("comp")
   reset_comp_animation()
   x = document.getElementById("receive");
   x.innerHTML = "Receiver";
   
   
   x = document.getElementById("computer_lbl1")
   x.style="position: absolute;margin: -15.2%  39%;transform: rotate(90deg);display:none";
   x = document.getElementById("computer_lbl2")
   x.style="position: absolute;margin: -12.2%  39%;transform: rotate(90deg);display:none ";
   x = document.getElementById("sender_lbl")
   x.style="position: absolute;margin: -4%  16%;display:none ";
   x = document.getElementById("receiver_lbl")
   x.style="position: absolute;margin: 3.6%  48%;display:none "
   
    if(control != null)clearInterval(control);
    
    
    control = null;
    flow_var = 1;
    //data  =null;
    
 
    binaryflow();
}

function close()
{
 if(control != null)clearInterval(control);
 if(t != null)clearTimeout(t); 
    
}

function binaryflow()
{
   
  var x;
    if(flow_var ==1 )
        x = document.getElementById("sender_lbl");
    else if(flow_var == 2)
        x = document.getElementById("computer_lbl1");
    else if(flow_var == 3)
        x = document.getElementById("computer_lbl2");
    else if(flow_var == 4)
        x = document.getElementById("receiver_lbl");   
    
  
  if(flow_var == 1)
  {
      i=16;
       send = document.getElementById("send");
       send.innerHTML = "sending  data:"+data+"...";
       control=  setInterval(function(){        
            x.style="position: absolute;margin: -4% "+i+"%";
            if(i > 26.5)
            {
               
                x.style="position: absolute;margin: -4% 16% ;display:none";
               send.innerHTML = "Sender";
               push_data(data,flow_var)
            }
            else
            {
                i+=.1;
            }
           
              
            
            
        },30)
    }
    else if(flow_var ==2)
    {
        i=-15.2;
       control=  setInterval(function(){        
            x.style="position: absolute;transform: rotate(90deg);margin: "+i+"% 39%";
            if(i > -12.2)
            {
               
                x.style="position: absolute;transform: rotate(90deg);margin: -15.2% 39%;display:none";
                push_data(data,0)
            }
            else
            {
                i+=.1;
            }
                     
        },30)
        
        
    }else if(flow_var ==3)
    {
       i=-12.2;
       t =  setTimeout(function(){      
       control=  setInterval(function(){        
            x.style="position: absolute;transform: rotate(90deg);margin: "+i+"% 39%";
            if(i < -15.2)
            {
               
                x.style="position: absolute;transform: rotate(90deg);margin: -12.2% 39%;display:none";
                clearTimeout(t); 
               push_data(data,2)
            }
            else
            {
                i-=.1;
            }
                     
        },30)
        
        },2000);   
        
    }else if(flow_var ==4)
    {
       i=48;
      
        t =  setTimeout(function(){   
        control=  setInterval(function(){        
            x.style="position: absolute;margin: 3.6% "+i+"%";
            if(i > 55.5)
            {
               
                x.style="position: absolute;margin: 3.6%  48%;display:none;";
                receiver = document.getElementById("receive");
                receiver.innerHTML = "data received:"+(3.14*data*data).toFixed(2)+"...";
                reset_comp_animation()
                close()
            }
            else
            {
                i+=.1;
            }
           
              
            
            
        },30)
    },500);
       // init();
    }
    
    
   
}

function push_data(data,number)
{
    clearInterval(control);
    
 
    if(number == 0) 
    {
         
         var x = document.getElementById("comp");
         x.innerHTML = "processing data ..."
         x.style = "margin: -12% 41%;animation-name: example;animation-duration: 2s;";
         
       
        t =  setTimeout(function(){ x.innerHTML = "Computer" },2000);
         //clearTimeout(t);
    }    
    else if(number == 2){
       
        var x = document.getElementById("row"+number);
        x.innerHTML = "Area:"+(3.14*data*data).toFixed(2)
    }
    else if(number == 1) {
        var x = document.getElementById("row"+number);
        x.innerHTML =  "r:"+data;
        
    }

    
    
      
   
     flow_var++;
     binaryflow();
}

function reset_comp_animation()
{
     var x = document.getElementById("comp");
         x.innerHTML = "Computer";
         x.style = "margin: -12% 41%;";
    
}