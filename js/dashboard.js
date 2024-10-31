const requestServiceForm = document.getElementById("requestServiceForm");
const manualAddressBtn = document.getElementById("manual-address");
const locationInput = document.getElementById("location");
const errorMsg = document.querySelector("error-msg");

// displays the location input
function showAddressInput() {
  locationInput.classList.add("active");
}

manualAddressBtn.addEventListener("click", showAddressInput);
