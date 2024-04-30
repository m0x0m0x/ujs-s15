/// Sound on hover of logo
const logoHover = document.querySelector(".logo");
const logoHoverSound = document.getElementById("logoHoverSound");
logoHover.addEventListener("mouseover", () => {
  logoHoverSound.currentTime = 0; // Reset the audio to the beginning
  logoHoverSound.play(); // Play the click sound
});
//////////////////
