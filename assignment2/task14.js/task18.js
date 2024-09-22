const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const designation = document.getElementById("designation").value;
  const dob = document.getElementById("dob").value;
  const files = document.getElementById("files").files;

  // Validate the form
  if (!name || !age || !email || !contact || !designation || !dob || !files.length) {
    alert("Please fill in all the fields.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Invalid email address.");
    return;
  }

  if (!validateContact(contact)) {
    alert("Invalid contact number.");
    return;
  }

  if (!validateAge(age)) {
    alert("Invalid age.");
    return;
  }

  // Send the form data to the server
  const formData = new FormData();
  formData.append("name", name);
  formData.append("age", age);
  formData.append("email", email);
  formData.append("contact", contact);
  formData.append("designation", designation);
  formData.append("dob", dob);
  formData.append("files", files);

  fetch("/submit", {
    method: "POST",
    body: formData
  })
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});

// Helper functions to validate the form fields
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function validateContact(contact) {
  const contactRegex = /^[0-9]{10,13}$/;
  return contactRegex.test(contact);
}

function validateAge(age) {
  const ageRegex = /^\d+$/;
  return ageRegex.test(age);
}