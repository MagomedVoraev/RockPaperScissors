/* ====================================================
================= RULES OPEN / CLOSE ==================
==================================================== */

// button RULES
var rulesElement = document.getElementById('rules');

// block des RULES
var rulesContainer = document.getElementById('rulesContainer');

function showRules() {
    rulesContainer.classList.toggle('big-container--off');
};

// j'active class flex et je désactive ++ toggle ++
rulesElement.addEventListener('click', showRules);

// img X de rules
var rulesElementCloseX = document.getElementById('rulesCloseX');
// fermeture de RULES block par X
rulesElementCloseX.addEventListener('click', function () {
    rulesContainer.classList.toggle('big-container--off');
});


/* ====================================================
=================== PLAY STEP 1 =======================
==================================================== */

// la main page de base (à désactiver quand PLAY)
var mainPage = document.querySelector('.first-page__main');

// la main PLAY page
var playZone = document.querySelector('.first-page--play');

// selectionne la section de game joueur ME
var mePlayer = document.querySelector('.rackPaperScissors__me--play');


// selection computer play
var computerPlayer = document.querySelector('.rackPaperScissors__computer--play');


// message de victoire, égalité, nul
// var messageLoose =


// selection pour début de jeu de paper, rock ou scissors
var rock = document.querySelector('.rock');
var paper = document.querySelector('.paper');
var scissors = document.querySelector('.scissors');

function rockPlay(event) {

    var konami = event.target.dataset.choice;

    mainPage.style.display = 'none';
    playZone.style.display = 'flex';
    mePlayer.classList.add('rock--play');
    computerPlayer.classList.add('computer-play--picked');

    var computer = Math.round((Math.random() * (3 - 1)) + 1);
    if (computer === 1) {
        console.log('tu as perdu');
        computerPlayer.classList.add('paper--play');
    }
    else if (computer == 2) {
        computerPlayer.classList.add('scissors--play');
        console.log('tu as gagné');
    }
    else if (computer == 3) {
        computerPlayer.classList.add('rock--play');
        console.log('égalité');
    }

};

// fonctions pour lancer le jeu par les élements choisis
rock.addEventListener('click', rockPlay);



function paperPlay() {
    mainPage.style.display = 'none';
    playZone.style.display = 'flex';
    mePlayer.classList.add('paper--play');
    computerPlayer.classList.add('computer-play--picked');

    var computer = Math.round((Math.random() * (3 - 1)) + 1);
    if (computer === 1) {
        computerPlayer.classList.add('paper--play');
    }
    else if (computer == 2) {
        computerPlayer.classList.add('scissors--play');
    }
    else if (computer == 3) {
        computerPlayer.classList.add('rock--play');
    }
};

paper.addEventListener('click', paperPlay);




function scissorsPlay() {
    mainPage.style.display = 'none';
    playZone.style.display = 'flex';
    mePlayer.classList.add('scissors--play');
    computerPlayer.classList.add('computer-play--picked');

    var computer = Math.round((Math.random() * (3 - 1)) + 1);
    if (computer === 1) {
        computerPlayer.classList.add('paper--play');
    }
    else if (computer == 2) {
        computerPlayer.classList.add('scissors--play');
    }
    else if (computer == 3) {
        computerPlayer.classList.add('rock--play');
    }
};

scissors.addEventListener('click', scissorsPlay);


