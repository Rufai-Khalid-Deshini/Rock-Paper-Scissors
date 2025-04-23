const imgs = [
    {
        "src": "./Assets/Question.png",
        "alt": "none"
    },
    {
        "src": "./Assets/Rock Gesture Icon.png",
        "alt": "rock"
    },
    {
        "src": "./Assets/Paper Hand Gesture.png",
        "alt": "paper"
    },
    {
        "src": "./Assets/Scissors Gesture.png",
        "alt": "scissors"
    }
];

let next = document.getElementById("next");
let prev = document.getElementById("prev");
let computer = document.getElementById("computer");
let user = document.getElementById("user");
let shoot = document.getElementById("shoot");
let modal = document.getElementById("modal");
let message = document.getElementById("message");
let severity = document.getElementById("severity");
let canc = document.getElementById("close");
let icon = document.getElementById("icon");
let labels = document.getElementsByClassName("label");
let index = 0;
let index2 = 0;
let winner = "";
let score = {
    "comp": 0,
    "user": 0
}
const mod = [
    {
        "severity": "Congratulations 🎉🎉🎉",
        "message": "You Won!"
    },
    {
        "severity": "Ooops 😖😖😖",
        "message": "You Lost!"
    },
    {
        "severity": "Draw 🫱🏿‍🫲🏼",
        "message": "It's ended in a try!"
    }
]

if(user.alt == "none") {
    prev.style.visibility = "hidden";
    shoot.style.display = "none";
}
if(user.alt == "scissors") {
    next.style.visibility = "hidden";
}

prev.addEventListener("click", () => {
    index--;
    user.setAttribute("src", imgs[index].src);
    user.setAttribute("alt", imgs[index].alt);

    if(user.alt == "none") {
        prev.style.visibility = "hidden";
        shoot.style.display = "none";

    }else {
        prev.style.visibility = "visible";
        shoot.style.display = "block";
    }
    if(user.alt == "scissors") {
        next.style.visibility = "hidden";
    }else {
        next.style.visibility = "visible";
    }
})
next.addEventListener("click", () => {
    index++;
    user.setAttribute("src", imgs[index].src);
    user.setAttribute("alt", imgs[index].alt);

    if(user.alt == "scissors") {
        next.style.visibility = "hidden";
    }else {
        next.style.visibility = "visible";
    }
    if(user.alt == "none") {
        prev.style.visibility = "hidden";
        shoot.style.display = "none";
    }else {
        prev.style.visibility = "visible";
        shoot.style.display = "block";
    }
})

shoot.addEventListener("click", () => {
    index2 = 1 + Math.round(Math.random()*2);
    computer.setAttribute("src", imgs[index2].src);
    computer.setAttribute("alt", imgs[index2].alt);

    if(computer.alt == "rock") {
        if(user.alt == "scissors") {
            score.comp++;
            winner = "comp";
        }else if(user.alt == "rock"){
            winner = "draw";
        }else {
            score.user++;
            winner = "user";
        }
    }else if(computer.alt == "paper") {
        if(user.alt == "rock") {
            score.comp++;
            winner = "comp";
        }else if(user.alt == "paper"){
            winner = "draw";
        }else {
            score.user++;
            winner = "user";
        }
    }else if(computer.alt == "scissors") {
        if(user.alt == "paper") {
            score.comp++;
            winner = "comp";
        }else if(user.alt == "scissors"){
            winner = "draw";
        }else {
            score.user++;
            winner = "user";
        }
    }

    if(winner == "user") {
        message.innerHTML = mod[0].message;
        severity.innerHTML = mod[0].severity;
        icon.style.display = "block";
        icon.style.display = "block";
        icon.setAttribute("src", "./Assets/User.png");

    }else if(winner == "comp") {
        message.innerHTML = mod[1].message;
        severity.innerHTML = mod[1].severity;
        icon.style.display = "block";
        icon.style.display = "block";
        icon.setAttribute("src", "./Assets/Computer.png");
    }else {
        message.innerHTML = mod[2].message;
        severity.innerHTML = mod[2].severity;
        icon.style.display = "block";
        icon.style.display = "none";
    }

    modal.style.display = "flex";
    labels[0].innerHTML = `Computer - ${score.comp}`;
    labels[1].innerHTML = `User - ${score.user}`;
})

canc.addEventListener("click", () => {
    modal.style.display = "none";
})