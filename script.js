function triggerJumpscare() {
  const jumpscare = document.getElementById("jumpscare-video");
  const sound = document.getElementById("sound");

  // Tampilkan jumpscare
  jumpscare.style.display = "flex";

  // Mainkan suara
  sound.play().catch(() => {
    alert("Klik dulu halaman ini supaya suara bisa diputar!");
  });

  // Sembunyikan setelah 3 detik
  setTimeout(() => {
    jumpscare.style.display = "none";
  }, 3000);
}
