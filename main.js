"use strict";

const options = ["rock", "paper", "scissor"];

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection,computerSelection){
    if(/rock/i.test(playerSelection)){
        if(computerSelection === "rock"){
            alert("You draw!");
        }
        else if(computerSelection === "paper"){
            alert("You Lose! Paper beats Rock");
        }
        else if(computerSelection === "scissor"){
            alert("You Win! Rock beats Scissor");
        }
    }
    else if(/paper/i.test(playerSelection)){
        if(computerSelection === "rock"){
            alert("You Win! Paper beats Rock");
        }
        else if(computerSelection === "paper"){
            alert("You draw!");
        }
        else if(computerSelection === "scissor"){
            alert("You Lose! Scissor beats Paper");
        }
    }
    else if(/scissor/i.test(playerSelection)){
        if(computerSelection === "rock"){
            alert("You Lose! Rock beats Scissor");
        }
        else if(computerSelection === "paper"){
            alert("You Win! Scissor beats Paper");
        }
        else if(computerSelection === "scissor"){
            alert("You draw!");
        }
    }
    else{
        alert("Your options is nothing!");
    }
}

const play = Number(prompt("How Many Do You Want to Play???"));

for(let i = 1; i <= play; i++){
    const playerSelection = prompt("Choose Your Option!");
    const computerSelection = options[+(getComputerChoice())];
    playRound(playerSelection, computerSelection);
}


