//QnA animation
var qna1 = false;
var qna2 = false;
var qna3 = false;

function setClass(isOpen, element, elementAnswer) {
    if (isOpen) {
        element.classList.add("closed");
        element.classList.remove("opened");
        elementAnswer.classList.add("AnswerOpen");
        elementAnswer.classList.remove("AnswerClose");
    }
    else{
        element.classList.add("opened");
        element.classList.remove("closed");
        elementAnswer.classList.add("AnswerClose");
        elementAnswer.classList.remove("AnswerOpen");
    }
}

function extendContent(idName) {
    let element = document.getElementById(idName);
    let elementAnswer = document.getElementById(idName+"A");
    if (idName == "QnA1"){
        qna1 = !qna1;
        setClass(qna1, element, elementAnswer);
    }
    else if (idName == "QnA2"){
        qna2 = !qna2;
        setClass(qna2, element, elementAnswer);
    }
    else if (idName == "QnA3"){
        qna3 = !qna3;
        setClass(qna3, element, elementAnswer);
    }
}
//QnA end

//mobile navigation menu
let menuBarNav = false;
let elementBar = document.getElementById("menuBar");
let offsetY;
function openBar(){
    offsetY = window.pageYOffset;
    elementBar.classList.add(`top-[${offsetY}]`);
    elementBar.classList.remove("menuClosed");
    elementBar.classList.add("menuOpened");
    document.documentElement.classList.remove("overflow-x-hidden");
    document.documentElement.classList.add("overflow-hidden");
    console.log("Bar open");
}


function closeBar() {
    elementBar.classList.remove(`top-[${offsetY}]`);
    elementBar.classList.remove("menuOpened");
    elementBar.classList.add("menuClosed");
    document.documentElement.classList.remove("overflow-hidden");
    document.documentElement.classList.add("overflow-x-hidden");
    console.log("Bar close");
}
//mobile navigation end

//HowItWorks feature
function HowItWorks(step) {
    document.getElementById("HowItWorks1").classList.remove("desktop:block");
    document.getElementById("HowItWorks1").classList.remove("mobile:hidden");
    document.getElementById("HowItWorks1").classList.remove("mobile:bg-purpleScale0");
    document.getElementById("HowItWorks1").classList.remove("mobile:dark:bg-purpleScale80");
    document.getElementById("HIW1").children[0].classList.remove("desktop:invert");
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    for (let i = 1; i <= 4; i++) {
        if (i == step) continue;
        let id = "HowItWorks"+i;
        let id2 = "HIW"+i;
        document.getElementById(id).classList.add("hidden");
        document.getElementById(id).classList.remove("block");
        if (userTheme === "dark" || (!userTheme && systemTheme)) {
            document.getElementById(id2).classList.add("unselected-dark");
        }
        else {
            document.getElementById(id2).classList.add("unselected");
        }
        document.getElementById(id2).classList.remove("selected");
        document.getElementById(id2).classList.remove("desktop:dark:bg-purpleScale50");
        document.getElementById(id2).classList.add("desktop:hover:bg-purpleScale10");
        document.getElementById(id2).classList.add("desktop:dark:hover:bg-purpleScale70");
    }
    let id = "HowItWorks"+step;
    let id2 = "HIW"+step;
    document.getElementById(id).classList.add("block");
    document.getElementById(id).classList.remove("hidden");
    document.getElementById(id2).classList.add("selected");
    document.getElementById(id2).classList.add("desktop:dark:bg-purpleScale50");
    document.getElementById(id2).classList.remove("unselected");
    document.getElementById(id2).classList.remove("unselected-dark");
    document.getElementById(id2).classList.remove("desktop:hover:bg-purpleScale10");
    document.getElementById(id2).classList.remove("desktop:dark:hover:bg-purpleScale70");
}
//HowItWorks feature end

//navbar control


//darkMode control
function SetElementsDark(isDark) {
    let gradients = document.getElementsByClassName("gradien");
    let icon2 = document.getElementsByClassName("icon2");
    if (isDark) {
        let classes = document.getElementsByClassName("unselected");
        let icon = document.getElementsByClassName("iconMobile");
        for (let i = classes.length-1; i >= 0; i--) {
            console.log("dark" + i);
            classes[i].classList.add("unselected-dark");
            classes[i].classList.remove("unselected");
        }
        for (let i = 0; i < gradients.length; i++) {
            gradients[i].src = "../assets/Ellipse 13.svg";
        }
        for (let i = 0; i < icon.length; i++) {
            icon[i].classList.add("iconMobileDark");
        }
        for (let i = 0; i < icon2.length; i++) {
            icon2[i].classList.add("iconColor2");
        }
    }
    else if(!isDark) {
        let classesDark = document.getElementsByClassName("unselected-dark");
        let icon = document.getElementsByClassName("iconMobileDark");
        for (let i = classesDark.length-1; i >= 0; i--) {
            console.log("light" + i);
            classesDark[i].classList.add("unselected");
            classesDark[i].classList.remove("unselected-dark");
        }
        for (let i = 0; i < gradients.length; i++) {
            gradients[i].src = "../assets/Ellipse 12.png";
        }
        for (let i = 0; i < icon.length; i++) {
            icon[i].classList.remove("iconColor");
        }
        for (let i = 0; i < icon2.length; i++) {
            icon2[i].classList.remove("iconColor2");
        }
        icon[0].classList.add("iconMobile");
        icon[0].classList.remove("iconMobileDark");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const sunIcon = document.querySelector('#sun');
    const moonIcon = document.querySelector('#moon');

    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    const iconToggle = () => {
        moonIcon.classList.toggle("hidden");
        sunIcon.classList.toggle("hidden");
    };

    const themeCheck = () => {
        if (userTheme === "dark" || (!userTheme && systemTheme)) {
            document.documentElement.classList.add("dark");
            moonIcon.classList.remove("hidden");
            SetElementsDark(true);
            return;
        }
        sunIcon.classList.remove("hidden");
        SetElementsDark(false);
    }

    const themeSwitch = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            iconToggle();
            SetElementsDark(false);
            return;
        }
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme","dark");
        iconToggle();
        SetElementsDark(true);
    };

    sunIcon.addEventListener('click', () => {
        themeSwitch();
    });

    moonIcon.addEventListener('click', () => {
        themeSwitch();
    });

    themeCheck();
});

const closeBtn = document.getElementById('closeBtn');
    const container = document.getElementById('container');
    
    // Tambahkan event listener untuk SVG x
    closeBtn.addEventListener('click', function() {
        // Hapus kontainer
        container.remove();
    });


