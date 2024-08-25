import "./style.css";
const email = document.getElementById("email") as HTMLInputElement;
const emailError = document.querySelector("#email-error") as HTMLSpanElement;

email.addEventListener("input", () => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    }else {
        emailError.textContent = "Error";
        emailError.className = "error active";
    }
});

const country = document.getElementById("country") as HTMLInputElement;
const countryError = document.querySelector("#country-error") as HTMLSpanElement;
const countryPattern = /^[a-zA-Z\s'-]{2,}$/;

country.addEventListener("input", () => {
    if (countryPattern.test(country.value)) {
        country.setCustomValidity('');
        countryError.textContent = "";
        countryError.className = "error";
    }else {
        country.setCustomValidity('error')
        countryError.textContent = "Error";
        countryError.className = "error active";
    }
});

const zip = document.getElementById("zip") as HTMLInputElement;
const zipError = document.querySelector("#zip-error") as HTMLSpanElement;
const zipPattern = /^\d{5}(?:[-\s]\d{4})?$/;

zip.addEventListener("input", () => {
    if (zipPattern.test(zip.value)) {
        zip.setCustomValidity('');
        zipError.textContent = "";
        zipError.className = "error";
    }else {
        zip.setCustomValidity('error')
        zipError.textContent = "Error";
        zipError.className = "error active";
    }
});

const pass = document.getElementById("pass") as HTMLInputElement;
const passC = document.getElementById("passC") as HTMLInputElement;
const passError = document.querySelector("#pass-error") as HTMLSpanElement;
const passCError = document.querySelector("#passC-error") as HTMLSpanElement;
const passPattern = /^(?=.*\d)[a-zA-Z\d]{8,}$/;

pass.addEventListener("input", () => {
    if (passPattern.test(pass.value)) {
        pass.setCustomValidity('');
        passError.textContent = "";
        passError.className = "error";
    }else {
        pass.setCustomValidity('error')
        passError.textContent = "Minimum of 8 characters / Atleast 1 number";
        passError.className = "error active";
    }
})

passC.addEventListener("input", () => {
    if (pass.value == passC.value) {
        passC.setCustomValidity('');
        passCError.textContent = "";
        passCError.className = "error";
    }else {
        passC.setCustomValidity('error')
        passCError.textContent = "Must match password";
        passCError.className = "error active";
    }
})

const submit = document.getElementById("form") as HTMLFormElement;
const submitError = document.querySelector("#submit-error") as HTMLSpanElement;

submit.addEventListener("submit", (event) => {
    event.preventDefault();
    if (email.validity.valid && country.validity.valid && zip.validity.valid && pass.validity.valid && passC.validity.valid) {
        submitError.textContent = "Correct ✋";
        submitError.style.backgroundColor = "blue";
        submitError.className = "error";
    }else {
        submitError.textContent = "One or more fields incorrect";
        submitError.style.backgroundColor = "red";
        submitError.className = "error active";
    }
})
