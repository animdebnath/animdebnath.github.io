// Select profile photo and all gallery images
const faders = document.querySelectorAll('.profile-photo, .gallery img');

// Intersection Observer to trigger fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.3
});

// Observe each selected element
faders.forEach(fader => {
  observer.observe(fader);
});
