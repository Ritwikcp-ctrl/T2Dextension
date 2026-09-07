const distanceElement =
document.getElementById("distance");

const distanceStatElement =
document.getElementById("distanceStat");

const keyCountElement =
document.getElementById("keyCount");

const messageElement =
document.getElementById("message");

const resetButton =
document.getElementById("reset");


function updateMessage(distance){

    if(distance===0){

        return "Start typing to begin your journey.";

    }else if(distance<1){

        return "You're on your way.";

    }else if(distance<10){

        return "You've typed the distance of a short walk.";

    }else{

        return "That's serious keyboard mileage.";
    }
}


async function updateUI(){

    const result =
    await chrome.storage.local.get("keyCount");

    const keyCount =
    result.keyCount || 0;

    const distance =
    keyCount/100;

    distanceElement.textContent =
    distance.toFixed(2);

    distanceStatElement.textContent =
    `${distance.toFixed(2)} m`;

    keyCountElement.textContent =
    keyCount.toLocaleString();

    messageElement.textContent =
    updateMessage(distance);
}


resetButton.addEventListener(
"click",
async ()=>{

    await chrome.storage.local.set({
        keyCount:0
    });

    updateUI();
});

updateUI();