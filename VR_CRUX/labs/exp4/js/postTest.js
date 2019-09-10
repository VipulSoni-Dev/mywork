// function to
function removeNodeChild(mynode){
    while (mynode.firstChild) {
        mynode.removeChild(mynode.firstChild);
    }
}

// function to check the mcq for the post test
function testMCQ(){
    var inputAnswers = [];
    for(i=1;i<=5;i++){
        for(j=1;j<=4;j++){
            if(document.getElementById("que"+i+j).checked){
                inputAnswers[i]=document.getElementById("que"+i+j).value;
            }
        }
        if(inputAnswers[i]==null){
            alert("Please Attempt all questions!!");
            return;
        }

    }
    actualAnswers = ["a","b","c","d","a"];

    var tb = document.getElementById("testResultTable");
    removeNodeChild(tb);
    var correct=0;
    for(var i=1;i<=5;i++){
        if(inputAnswers[i]==actualAnswers[i-1]){
            var p1 = document.getElementById("q"+i);
            p1.innerHTML = "Correct"
            p1.style.color = "green";
            correct++;
        }
        else{
            var p1 = document.getElementById("q"+i);
            p1.innerHTML = "InCorrect"
            p1.style.color = "red";
            var p2 = document.getElementById("ans"+i);
            p2.innerHTML = "Correct Answer: "+actualAnswers[i - 1];
            p2.style.color = "green";
        }
    }

    tb.style.margin="20px";
    var p1 = document.getElementById("p1");
    alert("Your Score: "+correct+"/5")
    p1.style.margin = "50px";
    var elmnt = document.getElementById("p1");
    elmnt.scrollIntoView();
}
