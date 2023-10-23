document.addEventListener("DOMContentLoaded", function () {
  const selectElement = document.getElementById("country");
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Deps", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Rep", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo {Democratic Rep}", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland {Republic}", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea North", "Korea South", "Kosovo", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar, {Burma}", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar", "Romania", "Russian Federation", "Rwanda", "St Kitts & Nevis", "St Lucia", "Saint Vincent & the Grenadines", "Samoa", "San Marino", "Sao Tome & Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.text = country;
    selectElement.appendChild(option);
  });

  const form = document.getElementById('form');
  const popup = document.getElementById("popup");

  // form submission event listener
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const dob = document.getElementById("dob").value;
      const country = document.getElementById("country").value;

      // Getting selected gender values as a comma-separated string
      const genderCheckboxes = document.querySelectorAll("input[type='checkbox'][name='gender']:checked");
      const genderValues = getSelectedCheckboxValues(genderCheckboxes);

      const profession = document.getElementById("profession").value;
      const email = document.getElementById("email").value;
      const phoneNumber = document.getElementById("phone-number").value;

      // Create a string with the form data
      const formValues = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Date of Birth: ${dob}
        Country: ${country}
        Gender: ${genderValues}
        Profession: ${profession}
        Email: ${email}
        Mobile Number: ${phoneNumber}
      `;

      // Open a new window with the form data
      const newWindow = window.open("", "Form Data", "width=300,height=300");
      newWindow.document.write(`<pre>${formValues}</pre>`);
    
      // Add an event listener to detect when the popup window is closed
      newWindow.addEventListener("beforeunload", function () {
        // Reset the form when the popup is closed
        form.reset();
      });
    }
  });


  // Reset button event listener
  const resetBtn = document.querySelector(".btn[type='reset']");
  resetBtn.addEventListener("click", function () {
    form.reset();
    popup.style.display = "none";
  });

  // Close popup button event listener
  document.getElementById("closePopup").addEventListener("click", function () {
    popup.style.display = "none";
  });

  // Function to validate the form
  function validateForm() {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const dob = document.getElementById("dob");
    const country = document.getElementById("country");
    const genderCheckboxes = document.querySelectorAll("input[type='checkbox'][name='gender']:checked");
    const profession = document.getElementById("profession");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("phone-number");

    if (firstName.value.trim() === "") {
      alert("First Name is required.");
      return false;
    }

    if (lastName.value.trim() === "") {
      alert("Last Name is required.");
      return false;
    }

    if (dob.value.trim() === "") {
      alert("Date of Birth is required.");
      return false;
    }

    if (country.value === "") {
      alert("Please select a Country.");
      return false;
    }

    if (genderCheckboxes.length === 0) {
      alert("Select at least one Gender option.");
      return false;
    }

    if (email.value.trim() === "") {
      alert("Email is required.");
      return false;
    }

    if (!isValidEmail(email.value)) {
      alert("Invalid email address.");
      return false;
    }

    if (phoneNumber.value.trim() === "" || !/^\d{10}$/.test(phoneNumber.value)) {
      alert("Phone Number is required and should be a 10-digit number.");
      return false;
    }

    return true;
  }

  // Function to get selected checkbox values as a comma-separated string
  function getSelectedCheckboxValues(checkboxes) {
    const values = Array.from(checkboxes).map(checkbox => checkbox.value);
    return values.join(", ");
  }

  // Function to validate email using a regular expression
  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
});

