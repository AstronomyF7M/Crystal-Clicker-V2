let score = 0;

const crystalValues = {
    lapis: 1,
    ruby: 5,
    iceShard: 3,
    uranium: 10
};

function clickCrystal(crystal) {
    score += crystalValues[crystal];
    updateScore();
}

function updateScore() {
    document.getElementById('score').innerText = `Score: ${score}`;
}
