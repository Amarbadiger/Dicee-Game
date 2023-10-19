let player1 = document.querySelector('.img1');
let player2 = document.querySelector('.img2');
let randomNumber;
let randomNumber2;
document.querySelector('#Refresh').addEventListener("click", function(){
    dice(player1);
});
document.querySelector('#Refresh').addEventListener("click", function(){
    dice1(player2);
});
document.querySelector('#Refresh').addEventListener("click", function(){
    win(randomNumber,randomNumber2);
});
function dice(player){
    randomNumber=Math.floor(Math.random()*6)+1;
    if(randomNumber==1){
        player.src="images/dice1.png";
    }
    else if(randomNumber==2){
        player.src="images/dice2.png";
    }
    else if(randomNumber==3){
        player.src="images/dice3.png";
    }
    else if(randomNumber==4){
        player.src="images/dice4.png";
    }
    else if(randomNumber==5){
        player.src="images/dice5.png";
    }
    else{
        player.src="images/dice6.png";
    }
}
function dice1(player){
    randomNumber2=Math.floor(Math.random()*6)+1;
    if(randomNumber2==1){
        player.src="images/dice1.png";
    }
    else if(randomNumber2==2){
        player.src="images/dice2.png";
    }
    else if(randomNumber2==3){
        player.src="images/dice3.png";
    }
    else if(randomNumber2==4){
        player.src="images/dice4.png";
    }
    else if(randomNumber2==5){
        player.src="images/dice5.png";
    }
    else{
        player.src="images/dice6.png";
    }
}
function win(randomNumber,randomNumber2){
    if(randomNumber==randomNumber2){
        document.querySelector('h1').innerText="its tie";
    }
    else if(randomNumber>randomNumber2){
        document.querySelector('h1').innerText="player 1 wins";
    }
    else{
        document.querySelector('h1').innerText="player 2 wins";
    }
}

