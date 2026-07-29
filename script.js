const envelope = document.getElementById('envelope');
const after = document.getElementById('after');
const hint = document.getElementById('hint');

const gallery = document.getElementById('gallery');

// ✅ EXACT filenames in assets/photos (case-sensitive)
const photos = [
  "1..PNG",
  "2..PNG",
  "3..jpg"
];

function loadPhotos() {
  gallery.innerHTML = "";

  for (const file of photos) {
    const img = document.createElement('img');
    img.src = `assets/photos/\${file}`;
    img.alt = file;
    img.loading = "lazy";
    img.onerror = () => {
      console.log("Image not found:", img.src);
    };
    gallery.appendChild(img);
  }
}

envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');
  if (hint) hint.style.display = "none";
  if (after) after.classList.add('show');
  loadPhotos();
});
