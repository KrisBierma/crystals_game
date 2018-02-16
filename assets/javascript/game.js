    var randomNumber;
    var blueNum;
    var pinkNum;
    var greenNum;
    var orangeNum;
    var totalScore;
    var totalWins=0;
    var totalLosses=0;

//generate first set of random numbers
newNumbers();

//generate a random number every time game starts between 19-120
//generate number for pink, blue, green, and orange crystals between 1-12
function newNumbers(){
    randomNumber = Math.floor(Math.random()*101)+19;
    console.log("ranNum="+randomNumber);
    blueNum = Math.floor(Math.random()*12)+1;
    pinkNum = Math.floor(Math.random()*12)+1;
    greenNum = Math.floor(Math.random()*12)+1;
    orangeNum = Math.floor(Math.random()*12)+1;
    totalScore=0;
    $("#randomNum").text(randomNumber);
}

//when click on crystal, add random value of points to total score; compare score to random number
    $("#blue").on("click", function(){
        totalScore=totalScore+blueNum;
        $("#score").text(totalScore);
        console.log("blue="+blueNum);
        checkScore();
    })

    $("#pink").on("click", function(){
        totalScore=totalScore+pinkNum;
        $("#score").text(totalScore);
        console.log("pink="+pinkNum);
        checkScore();
    })

    $("#green").on("click", function(){
        totalScore=totalScore+greenNum;
        $("#score").text(totalScore);
        console.log("green="+greenNum);
        checkScore();
    })

    $("#orange").on("click", function(){
        totalScore=totalScore+orangeNum;
        $("#score").text(totalScore);
        console.log("orange"+orangeNum);
        checkScore();
    })

//when total score equals random number: get a win, reset total score to 0, generate new random number, give 4 crystals new random numbers
//when total score is above random number: get a loss, reset total score to 0, generate new numbers
    function checkScore(){
        if (totalScore===randomNumber){
            totalWins++;
            $("#wins").text(totalWins);
            $("#score").text(totalScore+ " You won!");
            newNumbers();
        }
        else if (totalScore > randomNumber){
            totalLosses++;
            $("#losses").text(totalLosses);
            $("#score").text(totalScore+ " Too high. That's a loss.");
            newNumbers();
        }
}