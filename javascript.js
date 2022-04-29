//Player 1

let User1Total = 0;

let User2Total = 0;

let player1turn = true;
let player2turn = false;


document.getElementById("roll").addEventListener("click", () => {  
    // Play a sound - slight delay - so maybe see if can cycle images /delay image or something
    // document.getElementById("sound").play()

    if (player1turn == true){
        // Generate a number
    let diceRolled = Math.floor(Math.random()*6)+1;


    // Generate dice image 
    const diceImage = 'assets/dice' + diceRolled + '.png';

    // Insert dice image
    document.querySelectorAll('img')[0].setAttribute('src', diceImage);
    let score1 = User1Total += diceRolled;
    document.getElementById("score1").innerHTML = score1

    player1turn = false 
    player2turn = true

    } else if (player2turn == true){
            // Generate a number
    let diceRolled = Math.floor(Math.random()*6)+1;


    // Generate dice image 
    const diceImage = 'assets/dice' + diceRolled + '.png';

    // Insert dice image
    document.querySelectorAll('img')[1].setAttribute('src', diceImage);
    let score2 = User2Total += diceRolled;
    document.getElementById("score2").innerHTML = score2 

    player1turn = true
    player2turn = false

    }


  // Create win/lose scenario 

  if(player1total >= 20){
    document.getElementById("1winLose").textContent = "You win!"
    User1Total = 0;
}
else if (diceRolled ==1){ 
    document.getElementById("1winLose").textContent = "You rolled 1! You lose!"
    document.getElementById("score1").textContent = ""
    User1Total = 0;
}

if(player2total >= 20){
    document.getElementById("2winLose").textContent = "You win!"
    User1Total = 0;
}
else if (diceRolled ==1){ 
    document.getElementById("2winLose").textContent = "You rolled 1! You lose!"
    document.getElementById("score2").textContent = ""
    User1Total = 0;
}
})

//Button to refresh the page

const refreshButton = document.getElementById('refresh-button');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click',() => {
document.getElementById("score1").textContent = 0 
document.getElementById("score2").textContent = 0 
document.getElementById("winLose").textContent = ""

}) 

