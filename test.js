function game(){
    for (let i = 0; i < 5; i++) {
        let playerChoice = playerSelection()
        let computerChoice = computerSelection()
        console.log(play(playerChoice,computerChoice))
    }
}

game()
function play(playerChoice, computerChoice){
    
    switch(computerChoice){

        case "rock":

            switch(playerChoice){
                case "paper":
                    return 'You win! '+playerChoice+' beats '+computerChoice+'.'

                case "scissors":
                    return "You lose! "+computerChoice+" beats "+playerChoice+"."

                case "rock":
                    return 'No one wins.'
                }

        case "paper":

            switch(playerChoice){
                case "scissors":
                    return 'You win! '+playerChoice+' beats '+computerChoice+'.'

                case "rock":
                    return "You lose! "+computerChoice+" beats "+playerChoice+"."

                case "paper":
                    return 'No one wins.'
                }

        case "scissors":

            switch(playerChoice){
                case "rock":
                    return 'You win! '+playerChoice+' beats '+computerChoice+'.'

                case "paper":
                    return "You lose! "+computerChoice+" beats "+playerChoice+"."

                case "scissors":
                    return 'No one wins.'
                }

        default:
            return "WTF was that"
    }
}

function computerSelection(){
    let num = getRandomInt(0,3);
    let choice = ["rock", "paper", "scissors"]
    return choice[num]
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function playerSelection(){
    let choice = prompt("Enter rock, paper or scissors");
    
    switch (choice.toLowerCase()){

        case "rock":
            return "rock";

        case "paper":
            return "paper";

        case "scissors":
            return "scissors";

        default:
            playerSelection();
}

}
