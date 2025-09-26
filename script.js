"use strict";

let billInput = document.querySelector(".bill-input");
let billAmount = 0.00;
let tip5Btn = document.querySelector(".tip-5-btn");
let tip10Btn = document.querySelector(".tip-10-btn");
let tip15Btn = document.querySelector(".tip-15-btn");
let tip25Btn = document.querySelector(".tip-25-btn");
let tip50Btn = document.querySelector(".tip-50-btn");
let allTipBtns = document.querySelectorAll(".tip-btn");
let customTipContainer = document.querySelector(".custom-tip-container")
let customTipInput = document.querySelector(".custom-tip");
let customTipAmount = Number(customTipInput.value.replace(/\D/g, ''));
let selectedTip = document.querySelector(".selected-tip");
let selectedTipAmount = 0.00;
let peopleInput = document.querySelector(".num-people-input");
let numPeople = 0;
let allInputs = document.querySelectorAll(".inputs");
let splitTip = document.querySelector(".tip-amount-display");
let splitTotal = document.querySelector(".total-amount-display");


billInput.addEventListener("input", function () {
    billAmount = Number(billInput.value);
    // console.log(billAmount);
})

// loop over tip btns for event listener
for (let btn of allTipBtns) {
    btn.addEventListener("click", function () {
        // click & reset styling per click
        for (let option of allTipBtns) {
            option.classList.remove("selected-tip");
        };

        // change style on clicked
        btn.classList.add("selected-tip");

        // update tip amount
        selectedTipAmount = Number(btn.textContent.replace(/\D/g, ''));
        // console.log(selectedTipAmount);

        // clear custom tip style if needed
        customTipContainer.classList.remove("has-input");
        customTipInput.value = "";
    }
    );
}

// event listener for custom tip input
customTipInput.addEventListener("input", function () {
    for (let option of allTipBtns) {
        option.classList.remove("selected-tip");
    };

    customTipContainer.classList.add("has-input");

    selectedTipAmount = Number(customTipInput.value);
    console.log(selectedTipAmount);

})

peopleInput.addEventListener("input", function () {
    numPeople = Number(peopleInput.value);
    // console.log(numPeople);
})

// for (let input of allInputs) {
//     input.addEventListener("input", function () {
//         console.log(`Bill: ${billAmount}`);
//         console.log(`Tip %: ${selectedTipAmount}`);
//         console.log(`# People: ${numPeople}`);
//     });
// }