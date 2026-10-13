const intro = document.getElementById('intro');
const openButton = document.getElementById('openInvite');
openButton.addEventListener('click', () => {
  intro.classList.add('open');
  window.setTimeout(() => intro.classList.add('opened'), 1250);
});
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('show');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('show');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
const shareText = 'With the blessings of the Almighty, we joyfully invite you to celebrate the wedding of Sree Ganga S D & Prithviraj N! Reception: November 21, 2026, 7 PM onwards. Muhurtham: November 22, 2026, 6:30–8 AM, followed by lunch at 12:30 PM onwards. Venue: Jayamahal Palace Hotel, Bengaluru.';
document.getElementById('whatsappShare').href = 'https://wa.me/?text=' + encodeURIComponent(shareText);
document.getElementById('shareButton').addEventListener('click', async () => {
  const data = { title: 'Sree Ganga & Prithviraj — Wedding Invitation', text: shareText, url: window.location.href };
  if (navigator.share) {
    try { await navigator.share(data); } catch (err) { /* sharing dismissed by user */ }
  } else if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(shareText + ' ' + window.location.href);
      document.getElementById('shareButton').textContent = '✓ Invitation text copied';
    } catch (err) {
      window.prompt('Copy and share this invitation:', shareText + ' ' + window.location.href);
    }
  } else {
    window.prompt('Copy and share this invitation:', shareText + ' ' + window.location.href);
  }
});


// Background music is optional and only starts after the visitor taps the control.
const weddingMusic = document.getElementById('weddingMusic');
const musicToggle = document.getElementById('musicToggle');
const musicLabel = document.getElementById('musicLabel');
musicToggle.addEventListener('click', async () => {
  if (weddingMusic.paused) {
    try {
      await weddingMusic.play();
      musicToggle.setAttribute('aria-pressed', 'true');
      musicToggle.setAttribute('aria-label', 'Turn background music off');
      musicLabel.textContent = 'Music on';
    } catch (error) {
      musicLabel.textContent = 'Add music file';
      alert('To enable music, add your chosen MP3 file as assets/wedding-music.mp3, then reload the website.');
    }
  } else {
    weddingMusic.pause();
    musicToggle.setAttribute('aria-pressed', 'false');
    musicToggle.setAttribute('aria-label', 'Turn background music on');
    musicLabel.textContent = 'Music off';
  }
});
