"use strict";

let billInput = document.querySelector(".bill-input");
let billAmount = 0.00;
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
let finalTip = 0.00;
let splitTotal = document.querySelector(".total-amount-display");
let finalTotal = 0.00;
let resetBtn = document.querySelector(".reset-btn");
let errorMsg = document.querySelector(".error-msg");

// defining outside click events since multiple uses
function getFinals() {
    finalTip = (billAmount * (selectedTipAmount / 100)) / numPeople;
    finalTotal = (billAmount / numPeople) + finalTip;
    if (Number.isFinite(finalTip)) {
        splitTip.textContent = `$${finalTip.toFixed(2)}`;
        splitTotal.textContent = `$${finalTotal.toFixed(2)}`;
    }

}

billInput.addEventListener("input", function () {
    billAmount = Number(billInput.value);
    getFinals();
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

        // clear custom tip style if needed
        customTipContainer.classList.remove("has-input");
        customTipInput.value = "";

        getFinals();
    }
    );
}

// event listener for custom tip input
customTipInput.addEventListener("input", function () {
    for (let option of allTipBtns) {
        option.classList.remove("selected-tip");
    };

    // adding class to update styling
    customTipContainer.classList.add("has-input");

    selectedTipAmount = Number(customTipInput.value);

    getFinals();
})

// event listener for the number of people input
peopleInput.addEventListener("input", function () {
    numPeople = Number(peopleInput.value);

    if (numPeople <= 0) {
        peopleInput.classList.add("zero-people");
        errorMsg.style.display = "block";
    } else {
        peopleInput.classList.remove("zero-people");
        errorMsg.style.display = "none";
    }

    getFinals();
})

resetBtn.addEventListener("click", function () {
    location.reload();
})