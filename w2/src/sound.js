/// Sound on hover of logo
const logoHover = document.querySelector(".logo");
const logoHoverSound = document.getElementById("logoHoverSound");

logoHover.addEventListener("mouseover", () => {
  // Set the start time of the audio
  logoHoverSound.currentTime = 0; // or any other start time in seconds

  // Play the audio
  logoHoverSound.play();

  // Stop the audio after a certain amount of time has elapsed
  setTimeout(() => {
    logoHoverSound.pause();
    logoHoverSound.currentTime = 0;
  }, 400); // or any other duration in milliseconds
});
