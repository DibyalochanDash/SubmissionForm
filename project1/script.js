document.getElementById("interviewForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get field values
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const position = document.getElementById("position").value;
  const resume = document.getElementById("resume").value.trim();
  const coverLetter = document.getElementById("coverLetter").value.trim();

  // Skills
  const skills = [];
  document.querySelectorAll("input[type='checkbox']:checked").forEach(skill => {
    skills.push(skill.value);
  });

  // Validation
  if (!fullName || !email || !phone || !position || !resume || !coverLetter) {
    return showMessage("Please fill in all fields.", "danger");
  }

  // Email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return showMessage("Please enter a valid email address.", "danger");
  }

  // Phone format
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    return showMessage("Please enter a valid 10-digit phone number.", "danger");
  }

  // Resume URL
  try {
    new URL(resume);
  } catch (_) {
    return showMessage("Please enter a valid resume URL.", "danger");
  }

  // Success Message
  showMessage(`Thank you, ${fullName}. Your application for ${position} has been submitted! Skills: ${skills.join(", ") || "None"}`, "success");

  // Reset form
  document.getElementById("interviewForm").reset();
});

function showMessage(message, type) {
  const messageDiv = document.getElementById("message");
  messageDiv.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
}
