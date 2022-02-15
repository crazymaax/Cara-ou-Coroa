const gamecontainer = document.querySelector(".game__container");

const game = document.createElement("div");
game.classList = "game_coinsShow";
gamecontainer.appendChild(game);

const coin = {
    state: 0,

    flip: function () {
        let result = this.state = Math.round(Math.random());
        return result;

    },

    toString: function () {
        if (this.state === 0) {

            return "Heads";
        } else {

            return "Tails";
        }
    },

    toHTML: function () {
        const image = document.createElement("img");

        if (this.state === 0) {

            image.src = "./coinObject/Dollar symbol coin PNG.png";
            image.alt = "Heads!";
        } else if (this.state === 1) {

            image.src = "./coinObject/Crown symbol coin PNG.png";
            image.alt = "Tails!";
        }

        game.appendChild(image);

        return image;
    },
};

function display20Flips() {
    const results = [];

    for (let i = 0; i < 20; i++) {
        results.push(coin.flip());

        let text = document.createElement("p");
        text.innerText = coin.toString();
        game.appendChild(text);
    }

    return results;
}

function display20Images() {
    const results = [];

    for (let i = 0; i < 20; i++) {
        results.push(coin.flip());

        coin.toHTML();
    }

    return results;
}

const start = document.getElementById("instructions__start");
start.addEventListener("click", hideInstructions);

function hideInstructions() {
    const instructions = document.querySelector(".instructions");
    instructions.style.display = "none";

    const game = document.querySelector(".game");
    game.style.display = "block";

    const backSection = document.querySelector(".back");
    backSection.style.display = "block";
}

const backButton = document.getElementById("backToStart");
backButton.addEventListener("click", backButtonClick);

function backButtonClick() {
    const instructions = document.querySelector(".instructions");
    instructions.style.display = "block";

    game.innerHTML = "";

    const gameSection = document.querySelector(".game");
    gameSection.style.display = "none";

    const backSection = document.querySelector(".back");
    backSection.style.display = "none";
}

const oneFlipButton = document.getElementById("flip1");
oneFlipButton.addEventListener("click", flipOne);

const twentyFlipButton = document.getElementById("flip20");
twentyFlipButton.addEventListener("click", flipTwenty);


function flipOne() {
    game.innerHTML = "";

    coin.flip();
    coin.toString();
    coin.toHTML();

    let text = document.createElement("p");
    text.innerText = coin.toString();
    game.appendChild(text);

    const character = document.querySelector(".game__character");
    character.src = "./coinObject/final.png";
    character.style.height = "110px";
    character.style.width = "130px";
    character.style.margin = "20px 80px";

    setTimeout(() => {
        character.src = "./coinObject/Move_gif.gif";
        character.style.height = "160px";
        character.style.width = "280px";
        character.style.margin = "0px";
    }, 1200);

    let audio = new Audio("./coinObject/coinFlip.mp3");
    audio.play();
}


function flipTwenty() {
    game.innerHTML = ""

    const results = [];
    for (let i = 0; i < 20; i++) {
        results.push(coin.flip());

        coin.toHTML();
        let text = document.createElement("p");
        text.innerText = coin.toString();
        game.appendChild(text);


    }

    const character = document.querySelector(".game__character");
    character.src = "./coinObject/final.png";
    character.style.height = "110px";
    character.style.width = "130px";
    character.style.margin = "20px 80px";

    setTimeout(() => {
        character.src = "./coinObject/Move_gif.gif";
        character.style.height = "160px";
        character.style.width = "280px";
        character.style.margin = "0px";
    }, 1200);

    let audio = new Audio("./coinObject/coinFlip.mp3");
    audio.play();
}