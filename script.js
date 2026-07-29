const envelope = document.getElementById('envelope');
const after = document.getElementById('after');
const hint = document.getElementById('hint');

const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const vol = document.getElementById('vol');

vol.addEventListener('input', () => audio.volume = Number(vol.value));
audio.volume = Number(vol.value);

// ✅ You said 3 photos
const photoCount = 3;

const gallery = document.getElementById('gallery');

function loadPhotos() {
  gallery.innerHTML = "";
  for (let i = 1; i <= photoCount; i++) {
    const img = document.createElement('img');
    img.src = `assets/photos/\${i}.jpg`;
    img.alt = `Photo \${i}`;
    img.loading = "lazy";
    img.onerror = () => img.remove(); // if missing, skip
    gallery.appendChild(img);
  }
}

async function tryPlay() {
  try {
    await audio.play();
    playBtn.textContent = "Playing";
  } catch (e) {
    // autoplay often blocked until user taps
    playBtn.textContent = "Tap to Play";
  }
}

envelope.addEventListener('click', async () => {
  envelope.classList.toggle('open');
  hint.style.display = "none";
  after.classList.add('show');
  loadPhotos();
  await tryPlay();
});

playBtn.addEventListener('click', tryPlay);

pauseBtn.addEventListener('click', () => {
  audio.pause();
  playBtn.textContent = "Play";
});
