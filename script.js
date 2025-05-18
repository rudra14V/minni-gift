document.addEventListener("DOMContentLoaded", () => {
  // Sparkle effect on button clicks
  const buttons = document.querySelectorAll(".btn, .next-button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.position = "absolute";
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.width = "10px";
      sparkle.style.height = "10px";
      sparkle.style.background = "radial-gradient(circle, #ffd700, transparent)";
      sparkle.style.borderRadius = "50%";
      sparkle.style.animation = "sparkleFade 0.5s ease-out forwards";
      button.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 500);
    });
  });

  // Synchronize fairy narration with typing lines
  const typingLines = document.querySelectorAll(".typing-line");
  const fairy = document.querySelector(".fairy");

  typingLines.forEach((line, index) => {
    const delay = parseFloat(line.style.animationDelay || "0s") * 1000;
    setTimeout(() => {
      fairy.classList.add("narrate");
      fairy.style.top = `${12 + index * 3.5}%`;
      setTimeout(() => {
        fairy.classList.remove("narrate");
      }, 3000);
    }, delay);
  });

  // Photo convergence effect for page4
  const photos = document.querySelectorAll(".page4 .photo");
  photos.forEach(photo => {
    setTimeout(() => {
      photo.classList.add("converge");
    }, 6500); // Start convergence 6.5s after page load
  });

  // Trigger merged-photo animation after convergence
  const mergedPhoto = document.querySelector(".page4 .merged-photo");
  if (mergedPhoto) {
    setTimeout(() => {
      mergedPhoto.style.animationPlayState = "running";
    }, 8000); // Start merged photo reveal 8s after page load
  }
});

const style = document.createElement("style");
style.textContent = `
  @keyframes sparkleFade {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(2); opacity: 0; }
  }
`;
document.head.appendChild(style);