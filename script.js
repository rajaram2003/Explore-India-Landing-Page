const displayImage = e => {

  let imageId = e.id;
  let img = document.getElementById('img');
  let doorIllusion = document.getElementsByClassName('door-illusion')[0];

  img.setAttribute('src', `../img/${imageId}.png`);

  var t1 = new TimelineLite();

  t1.fromTo(doorIllusion, 1, 
      {boxShadow: 'inset 0em 0em 0em rgba(0, 0, 0, 0)'}, 
      {boxShadow: 'inset 0em 3em 2em rgba(0, 0, 0, 0.7)', ease: Power4.easeOut})
    .fromTo(img, 1, 
      {top: '-250px'}, 
      {top: '80px', ease: Power4.easeOut})
    .fromTo(doorIllusion, 0.03, 
      {boxShadow: 'inset 0em 3em 2em rgba(0, 0, 0, 0.7)'}, 
      {boxShadow: 'inset 0em 0em 0em rgba(0, 0, 0, 0)', ease: Power4.easeOut})
    .fromTo(img, 1, 
      {scale: 1}, 
      {scale: 1.4, ease: Back.easeOut.config(4)});

  t1.eventCallback('onStart', disableLinks);
  t1.eventCallback('onComplete', enableLinks);

  let links = document.getElementsByClassName('country');

  function disableLinks() {
    for (let i = 0; i < links.length; i++) {
      if (links[i].getAttribute('id') === imageId) {
        links[i].style.pointerEvents = 'auto';
      } else {
        links[i].style.pointerEvents = 'none';
      }
    }
  }

  function enableLinks() {
    for (let i = 0; i < links.length; i++) {
      links[i].style.pointerEvents = 'auto';
    }
  }
}

const phrases = [
  "Discover the diverse beauty and rich culture of India",
  "Discover new places with just a click",
  "Experience the beauty and culture of India",
  "Adventure awaits in every corner"
];

let currentPhrase = 0;
const textElement = document.getElementById("changing-text");

// GSAP Timeline for smooth transitions
const tl = gsap.timeline({ repeat: -1, repeatDelay: 2.5, delay: 2.5 });

// Function to animate text change
function animateTextChange() {
  tl.to(textElement, {
    opacity: 0,
    y: -20,
    duration: 1,
    ease: "power1.inOut",
    onComplete: changeText 
  })
  .to(textElement, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power1.inOut"
  });
}

// Function to update text content
function changeText() {
  currentPhrase = (currentPhrase + 1) % phrases.length;
  textElement.textContent = phrases[currentPhrase];
}

// Start the animation loop
animateTextChange();

gsap.fromTo('.logo img', 
  {
    scale: 1,
  },
  {
    scale: 1.1,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  }
);

gsap.from('.hero-section', {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: 'power2.out'
});

window.onload = function() {
  ['agra.png', 'varanasi.png', 'manali.png', 'goa.png'].forEach(imgName => {
    let img = new Image();
    img.src = `../img/${imgName}`;
  });
}


