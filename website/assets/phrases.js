const phrases = [
  "\"It's not a bug; it's an undocumented feature!\"\n— Anonymous",
  "\"2222\"\n— Anonymous",
  "\"44444444\"\n— Anonymous",
  // Add more phrases as needed
];

function getPhraseOfTheDay() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const phraseIndex = dayOfYear % phrases.length;
  return phrases[phraseIndex];
}

document.addEventListener('DOMContentLoaded', (event) => {
  const phraseElement = document.querySelector('.profile-quote');
  phraseElement.innerText = getPhraseOfTheDay();
});

