const requestServiceForm = document.getElementById("requestServiceForm");
const automaticAddressBtn = document.getElementById("automatic-address");
const manualAddressBtn = document.getElementById("manual-address");
const locationInput = document.getElementById("location");
const errorMsg = document.querySelector("error-msg");
const msgBox = document.querySelector(".msg-box-container");

// when the use enter address manually location button is clicked
manualAddressBtn.addEventListener("click", showAddressInput);

// when the use current location button is clicked
automaticAddressBtn.addEventListener("click", () => {
  getCurrentLocation();
  showAddressInput();
});

// displays the location input
function showAddressInput() {
  locationInput.classList.add("active");
}

// get current location
function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // OpenStreetMap Nominatim Geocoding API URL
      const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

      fetch(nominatimUrl)
        .then((response) => response.json())
        .then((data) => {
          const address = data.display_name;
          locationInput.value = address;
        })
        .catch((error) => {
          console.log("Error getting address:", error);
          showDialog("error", "Error getting address: " + error.message);
        });
    });
  } else {
    showDialog("error", "Geolocation is not supported by this browser.");
  }
}

// when request service form is submitted
requestServiceForm.addEventListener("submit", (event) => {
  showAddressInput();
  if (locationInput.value == "") {
    showDialog("error", "Please enter a location to submit");
    event.preventDefault();
  } else {
    showDialog("success", "Submitted successfully!");
  }
});

// show dialog box and message
function showDialog(msgType, msg) {
  const element = msgBox.querySelector(".msg");
  msgBox.classList.add(`active`);
  msgBox.classList.add(`${msgType}`);
  element.textContent = msg;
}

// close dialog box and message
msgBox
  .querySelector(".fa-xmark")
  .addEventListener("click", () => msgBox.classList.remove("active"));
