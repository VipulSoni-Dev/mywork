// function to delete
function removeNodeChild(mynode){
    while (mynode.firstChild) {
        mynode.removeChild(mynode.firstChild);
    }
}

//
function posttestMCQ(){
    var inputAnswers = [];
    for(i=1;i<=3;i++){
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

    actualAnswers = ["a","a","d"];
    var correct = 0;
    for(var i=1;i<=3;i++){
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
    var score = document.getElementById("p1");
    score.innerHTML = "Your Score: "+correct+"/5";
    var elmnt = document.getElementById("p1");
    elmnt.scrollIntoView();

    alert("Your Score: "+correct+"/3")
}
