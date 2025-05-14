// DecisionManager.js
import { form, userEntries } from "./global.js";
import { renderEntries } from "./render.js";

export default class DecisionManager {
  constructor() {
    this.loadFromLocalStorage();
    this.bindForm();
    renderEntries(this.saveToLocalStorage.bind(this));
  }

  bindForm() {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.handleSubmit();
    });
  }

  handleSubmit() {
    this.clearErrors();

    const firstName = document.getElementById("firstName").value.trim();
    const householdSize = document.getElementById("householdSize").value.trim();
    const isEcoFriendly = document.getElementById("isEcoFriendly").checked;

    let isValid = true;

    if (!firstName) {
      document.getElementById("firstNameError").textContent = "First name is required.";
      isValid = false;
    } else if (!/^[A-Za-z\s'-]+$/.test(firstName)) {
      document.getElementById("firstNameError").textContent = "Only letters, spaces, and apostrophes are allowed.";
      isValid = false;
    }

    const sizeNum = parseInt(householdSize, 10);
    if (!householdSize) {
      document.getElementById("householdSizeError").textContent = "Household size is required.";
      isValid = false;
    } else if (isNaN(sizeNum) || sizeNum < 1) {
      document.getElementById("householdSizeError").textContent = "Enter a valid number (1 or greater).";
      isValid = false;
    }

    if (!isValid) return;

    const newEntry = { firstName, householdSize: sizeNum, isEcoFriendly };
    userEntries.push(newEntry);
    this.saveToLocalStorage();
    renderEntries(this.saveToLocalStorage.bind(this));
    form.reset();
  }

  clearErrors() {
    document.getElementById("errorMessages").textContent = "";
    document.getElementById("firstNameError").textContent = "";
    document.getElementById("householdSizeError").textContent = "";
  }

  saveToLocalStorage() {
    localStorage.setItem("userEntries", JSON.stringify(userEntries));
  }

  loadFromLocalStorage() {
    const saved = localStorage.getItem("userEntries");
    if (saved) {
      const parsed = JSON.parse(saved);
      userEntries.splice(0, userEntries.length, ...parsed); // mutate to preserve reference
    }
  }
}
