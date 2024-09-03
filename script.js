let first = document.querySelector(".first");
let firstImg = document.querySelector(".maldive-img");
let firstButton = document.querySelector(".firstButton");
let txt = document.querySelector(".page-text h4");



first.addEventListener("mouseover", (event) => {
    firstImg.style.width = "400px";
    firstImg.style.transition = "0.4s";
    firstImg.style.border = "none";
    first.style.border = "1px solid rgb(217, 217, 217)";
    first.style.boxShadow = "1px 3px 1px 1px rgb(217, 217, 217)";
    first.style.padding = "10px";
    firstButton.style.border = "2px solid rgb(37, 72, 160)";
    firstButton.style.borderRadius = "5px";
    firstButton.style.color = "rgb(37, 72, 160)";
    firstButton.style.padding = "5px";
    firstButton.style.fontSize = "15px";
    firstButton.style.transition = "0.4s";
    firstButton.style.textDecoration = "none";
});
first.addEventListener("mouseout", (event) => {
    firstImg.style.width = "361px";
    firstImg.style.border = "1px solid rgb(203, 203, 203)";
    first.style.border = "none";
    first.style.boxShadow = "none";
    firstButton.style.border = "none";
    firstButton.style.color = "grey";
    firstButton.style.fontSize = "17px";
    firstButton.style.transition = "0.3s";
    firstButton.style.borderRadius = "0px";
    firstButton.style.borderBottom = "2px solid grey";
});



let second = document.querySelector(".second");
let secondImg = document.querySelector(".second-img");
let secondBtn = document.querySelector(".secondBtn");


second.addEventListener("mouseover", (event) => {
    secondImg.style.width = "400px";
    secondImg.style.transition = "0.4s";
    secondImg.style.border = "none";
    second.style.border = "1px solid rgb(217, 217, 217)";
    second.style.boxShadow = "1px 3px 1px 1px rgb(217, 217, 217)";
    second.style.padding = "10px";
    secondBtn.style.border = "2px solid rgb(37, 72, 160)";
    secondBtn.style.borderRadius = "5px";
    secondBtn.style.color = "rgb(37, 72, 160)";
    secondBtn.style.padding = "5px";
    secondBtn.style.fontSize = "15px";
    secondBtn.style.transition = "0.4s";
    secondBtn.style.textDecoration = "none";
});
second.addEventListener("mouseout", (event) => {
    secondImg.style.width = "361px";
    secondImg.style.border = "1px solid rgb(203, 203, 203)";
    second.style.border = "none";
    second.style.boxShadow = "none";
    secondBtn.style.border = "none";
    secondBtn.style.color = "grey";
    secondBtn.style.fontSize = "17px";
    secondBtn.style.transition = "0.3s";
    secondBtn.style.borderRadius = "0px";
    secondBtn.style.borderBottom = "2px solid grey";
});


let third = document.querySelector(".third");
let thirdImg = document.querySelector(".thirdImg");
let thirdBtn = document.querySelector(".thirdBtn");

third.addEventListener("mouseover", (event) => {
    thirdImg.style.width = "400px";
    thirdImg.style.transition = "0.4s";
    thirdImg.style.border = "none";
    third.style.border = "1px solid rgb(217, 217, 217)";
    third.style.boxShadow = "1px 3px 1px 1px rgb(217, 217, 217)";
    third.style.padding = "10px";
    thirdBtn.style.border = "2px solid rgb(37, 72, 160)";
    thirdBtn.style.borderRadius = "5px";
    thirdBtn.style.color = "rgb(37, 72, 160)";
    thirdBtn.style.padding = "5px";
    thirdBtn.style.fontSize = "15px";
    thirdBtn.style.transition = "0.4s";
    thirdBtn.style.textDecoration = "none";
});
third.addEventListener("mouseout", (event) => {
    thirdImg.style.width = "361px";
    thirdImg.style.border = "1px solid rgb(203, 203, 203)";
    third.style.border = "none";
    third.style.boxShadow = "none";
    thirdBtn.style.border = "none";
    thirdBtn.style.color = "grey";
    thirdBtn.style.fontSize = "17px";
    thirdBtn.style.transition = "0.3s";
    thirdBtn.style.borderRadius = "0px";
    thirdBtn.style.borderBottom = "2px solid grey";
});




document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector(".home-main");
    let bodyItemA = document.querySelectorAll(".home a");
    let headerOffset = header.offsetTop;
    let home = document.querySelector(".home")


    window.addEventListener("scroll", function () {
        if (window.pageYOffset > headerOffset) {
            header.classList.add("fixed");
            bodyItemA.forEach((element, index) => {
                if (index === 0) {
                    element.setAttribute('style', 'color: blue !important');
                    header.style.boxShadow = "3px 0 7px black";
                } else {
                    element.setAttribute('style', 'color: black !important');

                }
            });
        } else {
            header.classList.remove("fixed");
            bodyItemA.forEach((element, index) => {
                if (index === 0) {
                    element.setAttribute('style', 'color: yellow !important');
                    header.style.boxShadow = "none";
                } else {
                    element.setAttribute('style', 'color: white !important');
                }
            });
        }
    });
});



function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);

    let timer = setInterval(function () {
        current += increment;
        obj.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

document.addEventListener("DOMContentLoaded", function () {
    let counters = document.querySelectorAll('.target');
    counters.forEach(counter => {
        let target = +counter.getAttribute('data-target');
        animateValue(counter.id, 0, target, 2000);
    });
});

let experience = document.querySelector(".experience i");
let expinfo = document.querySelector(".exp-info");

experience.addEventListener("click", (event) => {
    if (expinfo.style.display === "none") {
        expinfo.style.display = "flex";
        expinfo.style.width = "550px";
        experience.style.cursor = "pointer";
        experience.style.backgroundColor = "blue";
        experience.style.transition = "0.6s";
        expinfo.style.transition = "6s";
    } else {
        expinfo.style.display = "none";
        experience.style.backgroundColor = "white";
        experience.style.transition = "0.6s";
        expinfo.style.transition = "6s";
    }
});




let team = document.querySelector(".team i");
let teamInfo = document.querySelector(".team-info");

team.addEventListener("click", (event) => {
    if (teamInfo.style.display === "none") {
        teamInfo.style.display = "flex";
        teamInfo.style.width = "550px";
        team.style.cursor = "pointer";
        team.style.backgroundColor = "blue";
        team.style.transition = "0.6s";
        teamInfo.style.transition = "6s";
    } else {
        teamInfo.style.display = "none";
        team.style.backgroundColor = "white";
        team.style.transition = "0.6s";
        teamInfo.style.transition = "6s";
    }
});


let prices = document.querySelector(".prices i");
let pricesInfo = document.querySelector(".prices-info");

prices.addEventListener("click", (event) => {
    if (pricesInfo.style.display === "none") {
        pricesInfo.style.display = "flex";
        pricesInfo.style.width = "550px";
        prices.style.cursor = "pointer";
        prices.style.backgroundColor = "blue";
        prices.style.transition = "0.6s";
        pricesInfo.style.transition = "6s";
    } else {
        pricesInfo.style.display = "none";
        prices.style.backgroundColor = "white";
        prices.style.transition = "0.6s";
        pricesInfo.style.transition = "6s";
    }
});


let item = document.querySelector(".gallery .item1 img");
let imagehover = document.querySelector(".image-hover1");
let text = document.querySelector(".image-text");
let glass = document.querySelector(".image-text .fa-magnifying-glass");


item.addEventListener("mouseover", (event) => {
    if (imagehover.style.display === "none") {
        imagehover.style.display = "flex";
        imagehover.style.alignItems = "center";
        imagehover.style.justifyContent = "center";
        text.style.textAlign = "center";
        text.style.fontSize = "20px";
        text.style.fontWeight = "normal";
        glass.style.border = "1px solid blue";
        glass.style.backgroundColor = "blue";
        glass.style.padding = "10px";
        glass.style.borderRadius = "20px";
        glass.style.color = "white";

    } else {
        imagehover.style.display = "none";
    }
});

item.addEventListener("mouseout", (event) => {
    imagehover.style.display = "none";
});

let secondItem = document.querySelector(".gallery .item2 img");
let imagehover2 = document.querySelector(".image-hover2");
let text2 = document.querySelector(".image-text2");
let glass2 = document.querySelector(".image-text2 .fa-magnifying-glass");

secondItem.addEventListener("mouseover", (event) => {
    if (imagehover2.style.display === "none") {
        imagehover2.style.display = "flex";
        imagehover2.style.alignItems = "center";
        imagehover2.style.justifyContent = "center";
        text2.style.textAlign = "center";
        text2.style.fontSize = "20px";
        text2.style.fontWeight = "normal";
        glass2.style.border = "1px solid blue";
        glass2.style.backgroundColor = "blue";
        glass2.style.padding = "10px";
        glass2.style.borderRadius = "20px";
        glass2.style.color = "white";

    } else {
        imagehover2.style.display = "none";
    }
});

secondItem.addEventListener("mouseout", (event) => {
    imagehover2.style.display = "none";
});