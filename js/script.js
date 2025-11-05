// Navegación simple entre secciones
const goGallery = document.getElementById('goGallery');
const hero = document.getElementById('hero');
const gallery = document.getElementById('gallery');

goGallery.addEventListener('click', () => {
  hero.classList.add('hidden');
  gallery.classList.remove('hidden');
});

// Enlace solo para la primera imagen; el usuario proporcionará el link
const poster1 = document.getElementById('poster1');
// Reemplaza la URL abajo con la que tú me des. Por ahora es un placeholder.
poster1.addEventListener('click', (e) => {
  e.preventDefault();
  const url = 'https://www.facebook.com/share/v/1DBa7y5F2M/';
  window.open(url, '_blank');
});