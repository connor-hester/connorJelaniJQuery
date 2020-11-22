var userChoice;
var cpuChoice;
var counter=0;
var result;
var cpuW=0;
var cpuL=0;
var userW=0;
var userL=0;
var ties=0;
var rounds;
var winText=$("#winner");


$(document).ready(function(){
    $("#endGame").hide();
$("#three").click(function(){
    rounds=3;
    $("#three").toggle();
    $("#five").toggle();
    $("#seven").toggle();
    $("#roundPicker").toggle();
});
$("#five").click(function(){
    rounds=5;
    $("#three").toggle();
    $("#five").toggle();
    $("#seven").toggle();
    $("#roundPicker").toggle();
});
$("#seven").click(function(){
    rounds=7;
    $("#three").toggle();
    $("#five").toggle();
    $("#seven").toggle();
    $("#roundPicker").toggle();
});
$("#rock").click(function(){
    var playerHand=$("#playerHand");
    var cpuHand=$("#cpuHand");
    userChoice="rock";
    newCPUChoice();
    animation(playerHand, cpuHand);
    findResult();
    logResult();
    counter++;
    $("#roundTrack").text(counter+"/"+rounds);
    if(counter>=rounds){
        turnOff();
    }
    });
$("#paper").click(function(){
    var playerHand=$("#playerHand");
    var cpuHand=$("#cpuHand");
    userChoice="paper";
    newCPUChoice();
    animation(playerHand, cpuHand);
    findResult();
    logResult();
    counter++;
    $("#roundTrack").text(counter+"/"+rounds);
    if(counter>=rounds){
        turnOff();
    }
    });
$("#scissors").click(function(){
    var playerHand=$("#playerHand");
    var cpuHand=$("#cpuHand");
    userChoice="scissors";
    newCPUChoice();
    animation(playerHand, cpuHand);
    findResult();
    logResult();
    counter++;
    $("#roundTrack").text(counter+"/"+rounds);
    if(counter>=rounds){
       turnOff();
    }
    });
});

function turnOff(){
        if(userW>cpuW){
            $("#endGameTxt").text("You Win!");
        }
        else if(cpuW>userW){
            $("#endGameTxt").text("You Lose :(");
        }
        $("#endGame").show();
        $("#playerHand").toggle();
        $("#cpuHand").toggle();
        $("#rock").toggle();
        $("#paper").toggle();
        $("#scissors").toggle();
        $("#winner").toggle();
        $(".player").toggle();
        $("#roundTrack").toggle();
        // $("#yourChoice").toggle();
}

function animation(player, cpu){
    // player.animate({height:'250px'});
    // cpu.animate({height:'250px'});
    // player.animate({height:'200px'});
    // cpu.animate({height:'200px'});
    // player.animate({height:'250px'});
    // cpu.animate({height:'250px'});
    // player.animate({height:'200px'});
    // cpu.animate({height:'200px'});
    // player.animate({height:'250px'});
    // cpu.animate({height:'250px'});
    // player.animate({height:'200px'});
    // cpu.animate({height:'200px'});
    player.attr("src","media/"+userChoice+".png");
    cpu.attr("src","media/"+cpuChoice+".png");
    cpu.css("transform","rotateY(180deg)");
}

    function newCPUChoice(){
        cpuChoice=Math.floor(Math.random()*3)+1;
        if(cpuChoice===1){
            cpuChoice="rock";
        }
        else if(cpuChoice===2){
            cpuChoice="paper";
        }
        else if(cpuChoice===3){
            cpuChoice="scissors";
        }
    }

    function findResult(){
        if(userChoice===cpuChoice){
            result="Tie!";
            ties+=1;
        }
        else if(userChoice==="rock" && cpuChoice==="paper"){
            result="CPU Wins!";
            cpuW+=1;
            userL+=1;
        }
        else if(userChoice==="rock" && cpuChoice==="scissors"){
            result="User Wins!";
            cpuL+=1;
            userW+=1;
        }
        else if(userChoice==="paper" && cpuChoice==="scissors"){
            result="CPU Wins!";
            cpuW+=1;
            userL+=1;
        }
        else if(userChoice==="paper" && cpuChoice==="rock"){
            result="User Wins!";
            cpuL+=1;
            userW+=1;
        }
        else if(userChoice==="scissors" && cpuChoice==="paper"){
            result="User Wins!";
            cpuL+=1;
            userW+=1;
        }
        else if(userChoice==="scissors" && cpuChoice==="rock"){
            result="CPU Wins!";
            cpuW+=1;
            userL+=1;
        }
        winText.text(result);
    }

    function logResult(){
        $("#yourWins").text(userW);
        $("#yourLosses").text(userL);
        $("#cpuWins").text(cpuW);
        $("#cpuLosses").text(cpuL);
        $(".ties").text(ties);
    }
