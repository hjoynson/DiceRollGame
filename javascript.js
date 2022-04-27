
//Generate random number from 1 to 6

const firstRandomNum=
Math.floor(Math.random() * 6) + 1 ;


// images/dice1.jpg up to images/dice6.jpg

const firstDiceImage = 'assets/dice' + firstRandomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);


//Generate random number from 1 to 6

const secondRandomNum=
Math.floor(Math.random() * 6) + 1 ;


// images/dice1.jpg up to images/dice6.jpg

const secondDiceImage = 'assets/dice' + secondRandomNum + '.png';

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

// Logic for winner

if (firstRandomNum > secondRandomNum) {
    document.querySelector('h1').innerHTML = 'The Winner is User 1';
} else if (firstRandomNum < secondRandomNum)
{
    document.querySelector('h1').innerHTML = 'The Winner is User 2';
} else { document.querySelector('h1').innerHTML = 'It is a draw';

}
