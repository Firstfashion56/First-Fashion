document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        const descriptionSlide = card.querySelector('.description-slide');
        descriptionSlide.classList.add('active');
    });
});

document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', () => {
        const descriptionSlide = button.closest('.description-slide');
        descriptionSlide.classList.remove('active');
    });
});
const sliders = document.querySelectorAll('.image-slider');

sliders.forEach(slider => {
    let currentIndex = 0;
    const images = slider.querySelectorAll('img');

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 3500); 
});
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.popup-overlay').classList.remove('hidden');
    });
});

document.querySelector('.close-popup').addEventListener('click', () => {
    document.querySelector('.popup-overlay').classList.add('hidden');
});
let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(i) {
    index = (i + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.prev').addEventListener('click', () => showSlide(index - 1));
document.querySelector('.next').addEventListener('click', () => showSlide(index + 1));

setInterval(() => showSlide(index + 1), 240000);
 // Open login popup when clicking on Login link
 document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('login-popup').style.display = 'block';
  });

  // Close login popup when clicking on Close button
  document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('login-popup').style.display = 'none';
  });

  // Handle form validation on login button click
  document.getElementById('login-btn').addEventListener('click', function () {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    // Reset error messages
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';

    let isValid = true;

    // Check for empty fields
    if (!username && !password) {
      usernameError.innerText = 'Username cannot be empty.';
      usernameError.style.display = 'block';

      passwordError.innerText = 'Password cannot be empty.';
      passwordError.style.display = 'block';

      isValid = false;
    } else {
      // Validate username
      if (username.length < 3) {
        usernameError.innerText = 'Please enter a valid username with at least 3 characters.';
        usernameError.style.display = 'block';
        isValid = false;
      }

      // Validate password
      if (password.length < 6) {
        passwordError.innerText = 'Please enter a valid password with at least 6 characters.';
        passwordError.style.display = 'block';
        isValid = false;
      }
    }

    // If validation passes, show thank you popup and reset the form
    if (isValid) {
      const popup = document.getElementById('thankyou-popup');
      popup.style.display = 'block';

      // Reset form fields
      document.getElementById('login-form').reset();
      document.getElementById('login-popup').style.display = 'none';
    }
  });

  // Close thank you popup
  document.getElementById('close-thankyou-popup').addEventListener('click', function () {
    document.getElementById('thankyou-popup').style.display = 'none';
  });
  categoriesToggle.addEventListener("click", function (event) {
    if (categoriesDropdown.contains(event.target)) {
        return; // Allow clicking links inside the dropdown
    }
    event.preventDefault();
    categoriesDropdown.classList.toggle("show");
});

