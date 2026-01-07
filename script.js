let step = 0;
const data = {};

document.addEventListener("DOMContentLoaded", showStep);

function showStep() {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));

    const current = document.getElementById(`step${step}`);
    if (current) current.classList.add('active');

    // FINAL STEP → SUMMARY
    if (step === 5) renderSummary();
}

function yes() {
    step++;
    showStep();
}

function no() {
    const step0 = document.getElementById("step0");

    // prevent duplicate joke messages
    if (!step0.querySelector(".joke")) {
        const msg = document.createElement("p");
        msg.textContent = "It’s not like you have a choice here HAHAHA 😌";
        msg.className = "joke";
        step0.appendChild(msg);
    }

    setTimeout(() => {
        step++;
        showStep();
    }, 2000);
}

function select(key, value) {
    data[key] = value;
    step++;
    showStep();
}

/* FOOD HANDLING */

function chooseFood(value) {
    data.food = value;
    step++;
    showStep();
}

function customFood() {
    const value = document.getElementById('customFood').value.trim();
    if (!value) {
        alert("Please type what you want ❤️");
        return;
    }
    data.food = value;
    step++;
    showStep();
}

/* SUMMARY */

function renderSummary() {
    document.getElementById('summary').innerHTML = `
        <strong>Date:</strong> ${data.day}<br>
        <strong>Time:</strong> ${data.time}<br>
        <strong>Location:</strong> ${data.location}<br>
        <strong>Food:</strong> ${data.food}
    `;
}
