// ===============================
// 5. Countdown Timer
// ===============================
const countDownDate = new Date("Dec 12, 2025 18:00:00").getTime();
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );

  if (distance <= 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown").innerHTML =
      "<h2 class='highlighted-text'>Puncak HUT-60 Telah Dimulai</h2>";
  }
}, 1000);

// AUDIO
document.addEventListener("click", () => {
  const song = document.getElementById("song");
  song.muted = false;
  song.play();
});

if (countdownInterval > 0) {
  document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const song = document.getElementById("song");

    // Tampilkan popup
    popup.style.display = "flex";

    // Mulai audio
    song.muted = false;
    song.play().catch(() => {
      console.log("Audio autoplay diblokir, tunggu interaksi.");
    });

    // Tutup popup saat klik "Lanjutkan"
    document.getElementById("closePopup").addEventListener("click", () => {
      popup.style.display = "none";
      launchConfetti();
    });
  });
} else {
  // Mulai audio
  song.muted = false;
  song.play().catch(() => {
    console.log("Audio autoplay diblokir, tunggu interaksi.");
  });
}