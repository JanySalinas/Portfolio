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

// the contact me with the email stuff 
document.getElementById('submitEmail').addEventListener('click', function() {
    // Grab the value from the input field
    const userEmail = document.getElementById('userEmail').value.trim();
    
    // Base mailto link with your email and subject
    let mailtoLink = 'mailto:miss_jany48@hotmail.com?subject=Portfolio%20Contact';
    
    // If the user entered something, add it to the email body
    if (userEmail) {
        mailtoLink += '&body=User%20Email:%20' + encodeURIComponent(userEmail);
    }
    
    // Open default mail client with built mailto link
    window.location.href = mailtoLink;
});

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