//const footer = document.querySelector('footer');

//window.addEventListener('scroll', () => {
  //const scrollPosition = window.scrollY + window.innerHeight;
  //const maxHeight = document.documentElement.scrollHeight;

  //if (scrollPosition >= maxHeight - 10) { // Adjust the offset (10) as needed
   // footer.style.display = 'block';
  //} else {
    //footer.style.display = 'none';
  //}
//});



/*Toggle read more*/
//function toggleText(event, id) {
    //event.preventDefault();
    //var hiddenText = document.getElementById(id);
    //if (hiddenText.style.display === 'none') {
       // hiddenText.style.display = 'inline';
       // event.target.textContent = 'Read Less';
   // } else {
        //hiddenText.style.display = 'none';
        //event.target.textContent = 'Read More';
    //}
//}
/*end Toggle read more*/



/*gallery*/
//function initGallery() {
    // Get all gallery images
    //const galleryImages = document.querySelectorAll('.gallery-image');

    // Add event listener to each image
    //galleryImages.forEach((image) => {
        //image.addEventListener('click', () => {
            // Get the enlarged image container
            //const enlargedImageContainer = document.querySelector('.enlarged-image-container');
            // Get the enlarged image
            //const enlargedImage = document.querySelector('.enlarged-image');
            // Set the source of the enlarged image to the clicked image
            //enlargedImage.src = image.src;
            // Display the enlarged image container
            //enlargedImageContainer.style.display = 'flex';
            // Create a separate overlay element
            //const overlay = document.createElement('div');
            //overlay.className = 'overlay';
            //document.body.appendChild(overlay);
            // Add event listener to the overlay and enlarged image container
            //overlay.addEventListener('click', closeEnlargedImage);
            //enlargedImageContainer.addEventListener('click', (e) => {
                //if (e.target !== enlargedImage) {
                    //closeEnlargedImage();
                //}
            //});
        //});
    //});

    // Add event listener to the close button
    //document.querySelector('.close-button').addEventListener('click', closeEnlargedImage);

    // Function to close the enlarged image
    //function closeEnlargedImage() {
        // Hide the enlarged image container
       // document.querySelector('.enlarged-image-container').style.display = 'none';
        // Remove the overlay
        //document.querySelector('.overlay').remove();
    //}
//}

// Call the function when the page loads
//document.addEventListener('DOMContentLoaded', initGallery);

/*end of all gallery*/




//function initContactForm() {
    //const contactForm = document.getElementById('contact-form');

    //contactForm.addEventListener('submit', (e) => {
        //e.preventDefault();

        //const name = document.getElementById('name').value.trim();
        //const email = document.getElementById('email').value.trim();
        //const phone = document.getElementById('phone').value.trim();
        //const message = document.getElementById('message').value.trim();

        // Name validation (only characters, no numbers)
        //if (name === '') {
            //alert('Please enter your name.');
            //document.getElementById('name').focus();
            //return;
        //}
        //if (!/^[a-zA-Z\s]+([a-zA-Z\s]+)$/.test(name)) {
            //alert('Name should only contain characters and spaces, no numbers or special characters.');
            //document.getElementById('name').focus();
            //return;
       // }

        // Email validation (correct format)
        //if (email === '') {
            //alert('Please enter your email address.');
            //document.getElementById('email').focus();
           // return;
        //}
        //const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        //if (!emailRegex.test(email)) {
            //alert('Please enter a valid email address.');
            //document.getElementById('email').focus();
            //return;
        //}

        // Phone validation (correct format)
        //if (phone === '') {
            //alert('Please enter your phone number.');
            //document.getElementById('phone').focus();
            //return;
        //}
        //const phoneRegex = /^[0-9]{8,12}$/;
        //if (!phoneRegex.test(phone)) {
            //alert('Please enter a valid phone number.');
            //document.getElementById('phone').focus();
            //return;
        //}

        // Message validation (mandatory)
        //if (message === '') {
            //alert('Please enter a message.');
            //document.getElementById('message').focus();
            //return;
        //}

        // If all fields are valid, submit the form
       // alert('Thank you for contacting ATTRAL ! Your message has been sent successfully.');
        // Add backend submission logic here
    //});
//}

// Call the function on page load
//document.addEventListener('DOMContentLoaded', initContactForm);




//function initSocialPanel() {
    //const socialPanel = document.getElementById('social-panel');
    //const lokkoBtn = document.getElementById('lokko-btn');
  
    // Slide in animation on page load
    //socialPanel.classList.add('slide-in');
  
   // lokkoBtn.addEventListener('click', () => {
      //socialPanel.classList.toggle('collapsed');
      //lokkoBtn.innerHTML = socialPanel.classList.contains('collapsed') ? '&lt;' : '&gt;';
    //});
  
    //let timeoutId = null;
  
    //window.addEventListener('scrollstop', () => {
      // Show social panel immediately after scrolling stops
    //  socialPanel.classList.remove('hidden');
    //});
  
    //if (!('scrollstop' in window)) {
      //window.addEventListener('scroll', () => {
        //clearTimeout(timeoutId);
        //timeoutId = setTimeout(() => {
          //window.dispatchEvent(new CustomEvent('scrollstop'));
        //}, 100); // Adjust sensitivity as needed (default: 100ms)
      //});
    //}
  //}
  
  // Call the function on page load
  //document.addEventListener('DOMContentLoaded', initSocialPanel);
  
  const navbarToggle = document.querySelector('.navbar-toggler');
  const carouselSection = document.querySelector('.carousel-section');
  
  navbarToggle.addEventListener('click', () => {
    if (navbarToggle.ariaExpanded === 'true') {
      carouselSection.classList.add('navbar-expanded');
    } else {
      carouselSection.classList.remove('navbar-expanded');
    }
  });



  document.addEventListener("DOMContentLoaded", function() {
    // Get all gallery images
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    // Get the enlarged image container
    const enlargedImageContainer = document.querySelector('.enlarged-image-container');
    
    // Get the enlarged image
    const enlargedImage = document.querySelector('.enlarged-image');
    
    // Get the close button
    const closeButton = document.querySelector('.close-button');
    
    // Get the rotate buttons
    const rotateLeftButton = document.createElement('button');
    rotateLeftButton.textContent = 'Rotate Left';
    rotateLeftButton.className = 'rotate-button';
    
    const rotateRightButton = document.createElement('button');
    rotateRightButton.textContent = 'Rotate Right';
    rotateRightButton.className = 'rotate-button';
    
    const flipButton = document.createElement('button');
    flipButton.textContent = 'Flip';
    flipButton.className = 'rotate-button';
    
    if (enlargedImageContainer) {
    enlargedImageContainer.appendChild(rotateLeftButton);
    enlargedImageContainer.appendChild(rotateRightButton);
    enlargedImageContainer.appendChild(flipButton);
    }
    
    // Initialize the transform property
    if (enlargedImage) {
    enlargedImage.style.transform = 'rotate(0deg)';
    }
    
    // Add event listener to each gallery image
    if (galleryImages) {
    galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
    // Set the enlarged image source
    if (enlargedImage) {
    enlargedImage.src = image.src;
    }
    
        // Show the enlarged image container
        if (enlargedImageContainer) {
          enlargedImageContainer.style.display = 'flex';
        }
      });
    });
    
    }
    
    // Add event listener to the close button
    if (closeButton) {
    closeButton.addEventListener('click', () => {
    // Hide the enlarged image container
    if (enlargedImageContainer) {
    enlargedImageContainer.style.display = 'none';
    }
    });
    }
    
    // Add event listener to the rotate left button
    if (rotateLeftButton) {
    rotateLeftButton.addEventListener('click', () => {
    // Rotate the image 90 degrees to the left
    if (enlargedImage) {
    enlargedImage.style.transform += ' rotate(-90deg)';
    }
    });
    }
    
    // Add event listener to the rotate right button
    if (rotateRightButton) {
    rotateRightButton.addEventListener('click', () => {
    // Rotate the image 90 degrees to the right
    if (enlargedImage) {
    enlargedImage.style.transform += ' rotate(90deg)';
    }
    });
    }
    
    // Add event listener to the flip button
    if (flipButton) {
    flipButton.addEventListener('click', () => {
    // Flip the image horizontally
    if (enlargedImage) {
    enlargedImage.style.transform += ' scaleX(-1)';
    }
    });
    }
    });



document.addEventListener('DOMContentLoaded', function() {
  const socialMediaIcons = document.getElementById('social-media-icons');
  const toggleButton = document.getElementById('toggle-button');
  const navIconLinks = socialMediaIcons.querySelector('ul');

  // Add the hidden class to the ul element initially
  navIconLinks.classList.add('hidden');

  toggleButton.addEventListener('click', () => {
    navIconLinks.classList.toggle('hidden');
  });

  function whatsappLinkHandler() {
    const whatsappLink = document.querySelector('.whatsapp-link');
    if (whatsappLink) {
      whatsappLink.addEventListener('click', (e) => {
        e.preventDefault();
        const url = 'https://wa.me/qr/+918095994004';
        const fallbackUrl = 'https://www.whatsapp.com/';
        if (navigator.userAgent.toLowerCase().includes('whatsapp')) {
          window.open(url, '_blank');
        } else {
          window.open(fallbackUrl, '_blank');
        }
      });
    }
  }

  whatsappLinkHandler();
});




document.addEventListener('DOMContentLoaded', function() {
  // ... (existing code)

  // Add event listener to the back-to-top button
  const backToTopButton = document.getElementById('back-to-top');

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});



const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

function changeButtonText() {
  viewDetailsBtns.forEach(btn => {
    if (window.innerWidth <= 768) {
      btn.textContent = 'Click To See Details';
    } else {
      btn.textContent = 'Hover For Details';
    }
  });
}

changeButtonText();

window.addEventListener('resize', changeButtonText);








document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      // You can add your form data sending logic here (e.g., AJAX, Fetch API)
      // For demonstration purposes, we'll just display a success message
      alert('Form submitted successfully!');
      // Clear the form fields
      form.reset();
    });
  }
});






