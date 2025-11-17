window.onload = function () {
  let existingBtn = document.getElementById("existing");
  let savedUsername = localStorage.getItem("username");

  // Show "Login as existing user" only if credentials exist
  if (savedUsername) {
    existingBtn.style.display = "block";
  }

  // When clicking "Login as existing user"
  existingBtn.addEventListener("click", function () {
    alert("Logged in as " + savedUsername);
  });

  // Handle form submission
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let remember = document.getElementById("checkbox").checked;

    // Show login alert
    alert("Logged in as " + username);

    if (remember) {
      // Save to localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      // Remove previous credentials
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    // Update existing user button visibility
    if (localStorage.getItem("username")) {
      existingBtn.style.display = "block";
    } else {
      existingBtn.style.display = "none";
    }
  });
};
