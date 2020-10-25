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

