const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

// Close nav menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// // the contact me with the email stuff 
// document.getElementById('submit').addEventListener('click', function() {
//     // Grab the value from the input field
//     const userEmail = document.getElementById('userEmail').value.trim();
    
//     // Base mailto link with your email and subject
//     let mailtoLink = 'mailto:miss_jany48@hotmail.com?subject=Portfolio%20Contact';
    
//     // If the user entered something, add it to the email body
//     if (userEmail) {
//         mailtoLink += '&body=User%20Email:%20' + encodeURIComponent(userEmail);
//     }
    
//     // Open default mail client with built mailto link
//     window.location.href = mailtoLink;
// });

const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
  const icon = document.querySelector("#dark-mode-btn i");
  if (document.documentElement.classList.contains("dark")) {
      // If dark mode is active, show the sun icon
      icon.className = "fa-solid fa-sun";
  } else {
      // Otherwise, show the moon icon
      icon.className = "fa-regular fa-moon";
  }
};
document.getElementById("dark-mode-btn").addEventListener("click", toggleDarkMode);

//Email form 
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const messageContainer = document.getElementById("form-message");

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      messageContainer.textContent = "Messages sent successfully📨";
      messageContainer.className = "form-message success";
      form.reset();
      // Clear message after 5 seconds
      setTimeout(() => {
        messageContainer.textContent = "";
        messageContainer.className = "form-message";
      }, 5000);
    } else {
      messageContainer.textContent = "Oops! Something went wrong. Please try again.";
      messageContainer.className = "form-message error";
      // Clear message after 5 seconds
      setTimeout(() => {
        messageContainer.textContent = "";
        messageContainer.className = "form-message";
      }, 5000);
    }
  });
});

// Example in your main script fil
  ScrollReveal().reveal('section', {
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    scale: 0.95,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    duration: 800,
    delay: 100,
    interval: 150,
    reset: true,    // Allows the animation to replay when scrolling back
    afterReveal: function (el) {
        el.classList.add("scroll-revealed");
    }
});

ScrollReveal().reveal('.recommendation-title', {
  distance: '30px',
  origin: 'bottom',
  opacity: 0,
  duration: 800,
  delay: 100,
  reset: true
});

ScrollReveal().reveal('#contact', {
  distance: '30px',
  origin: 'bottom',
  opacity: 0,
  duration: 800,
  delay: 150,
  reset: true
});