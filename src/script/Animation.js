//observer declaration
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
        } else {
            entry.target.classList.remove('show2');
        }
    });
});

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show3');
        } else {
            entry.target.classList.remove('show3');
        }
    });
});

const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show4');
        } else {
            entry.target.classList.remove('show4');
        }
    });
});

const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show5');
        } else {
            entry.target.classList.remove('show5');
        }
    });
});

const hiddenElements = document.querySelectorAll('.animation1');
hiddenElements.forEach((element) => observer.observe(element));

const hiddenElements2 = document.querySelectorAll('.animation2');
hiddenElements2.forEach((element) => observer2.observe(element));

const hiddenElements3 = document.querySelectorAll('.animation3');
hiddenElements3.forEach((element) => observer3.observe(element));

const hiddenElements4 = document.querySelectorAll('.animation4');
hiddenElements4.forEach((element) => observer4.observe(element));

const hiddenElements5 = document.querySelectorAll('.animation5');
hiddenElements5.forEach((element) => observer5.observe(element));




