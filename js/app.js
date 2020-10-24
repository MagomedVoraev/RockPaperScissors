//++++++ OUVERTURE FERMETURE RULES ++++++++++++

// button RULES
var rulesElement = document.getElementById('rules');

// selection du block des RULES à faire disparaitre//apparaitre
var rulesBlock = document.querySelector('.rules__logo');

// j'active class flex et je désactive ++ toggle ++
rulesElement.addEventListener('click', function () {
    rulesBlock.classList.toggle('rules__logo--flex');
    document.querySelector('.first-page').style.backgroundColor = 'red';
});

// =====================================================

// selection du img X de rules
var rulesElementCloseX = document.getElementById('rulesCloseX');

// fermeture de RULES block par X
rulesElementCloseX.addEventListener('click', function () {
    rulesBlock.className = 'rules__logo';

});


// ===========************++++++++++**$$$$$$$$$*********

