"use strict";

let billInput = document.querySelector(".bill-input");
let billAmount = Number(billInput.value);
let tip5Btn = document.querySelector(".tip-5-btn");
let tip10Btn = document.querySelector(".tip-10-btn");
let tip15Btn = document.querySelector(".tip-15-btn");
let tip25Btn = document.querySelector(".tip-25-btn");
let tip50Btn = document.querySelector(".tip-50-btn");
let allTipBtns = document.querySelectorAll(".tip-btn");
let customTipContainer = document.querySelector(".custom-tip-container")
let customTipInput = document.querySelector(".custom-tip");
let customTipAmount = Number(customTipInput.value.replace(/\D/g, ''));
let peopleInput = document.querySelector(".num-people-input");
let numPeople = Number(peopleInput.value);
let allInputs = document.querySelectorAll(".inputs");
let splitTip = document.querySelector(".tip-amount-display");
let splitTotal = document.querySelector(".total-amount-display");


function tipBtnSelect(btn) {
    return function () {
        // click & reset styling per click
        for (let option of allTipBtns) {
            option.classList.remove("selected-tip");
        };

        // change style on clicked
        btn.classList.add("selected-tip");

        // clear custom tip style if needed
        customTipContainer.classList.remove("has-input");
        customTipInput.value = "";
    };
}

// loop over tip btns
for (let btn of allTipBtns) {
    btn.addEventListener("click", tipBtnSelect(btn));
}

// event listener for custom tip
customTipInput.addEventListener("input", function () {
    for (let option of allTipBtns) {
        option.classList.remove("selected-tip");
    };

    customTipContainer.classList.add("has-input");
})

function setDisplays(input) {
    return function () {

    }
}