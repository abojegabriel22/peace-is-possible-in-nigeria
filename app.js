const targetDate =
new Date("June 23, 2026 00:00:00").getTime();

function updateTimer(){

    const now = new Date().getTime();

    const distance =
    targetDate - now;

    if(distance < 0){
        return;
    }

    const days =
    Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );

    const hours =
    Math.floor(
        (distance %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (distance %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds =
    Math.floor(
        (distance %
        (1000 * 60))
        /
        1000
    );

    animateCard("days", days);
    animateCard("hours", hours);
    animateCard("minutes", minutes);
    animateCard("seconds", seconds);
}

function animateCard(id, value){

    const card =
    document.getElementById(id);

    const number =
    card.querySelector("span");

    const newValue =
    String(value).padStart(2,"0");

    if(number.textContent === newValue){
        return;
    }

    const flip =
    document.createElement("div");

    flip.classList.add(
        "flip-page",
        "flip-animation"
    );

    flip.textContent =
    number.textContent;

    card.appendChild(flip);

    setTimeout(() => {

        number.textContent =
        newValue;

    }, 350);

    setTimeout(() => {

        flip.remove();

    }, 700);
}

updateTimer();

setInterval(
    updateTimer,
    1000
);