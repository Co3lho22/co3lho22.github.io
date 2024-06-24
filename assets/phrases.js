const phrases = [
  "\"Insanity is doing the same thing over and over again and expecting different results.\"\n— Albert Einstein",
  "\"First, solve the problem. Then, write the code.\"\n— John Johnson",
  "\"The journey of a thousand miles begins with one step.\"\n— Lao Tzu",
  "\"A little bit of the poison that will kill you will also redeem you.\"\n— Jordan Peterson",
  "\"The harder I work, the luckier I get.\"\n— Samuel Goldwyn",
  "\"The expert in anything was once a beginner.\"\n— Helen Hayes",
  "\"Your life does not get better by chance, it gets better by change.\"\n— Jim Rohn",
  "\"Your time is limited, so don’t waste it living someone else’s life.\"\n— Steve Jobs",
  "\"You miss 100% of the shots you don't take.\"\n— Wayne Gretzky",
  "\"Exceptional results come with exceptional sacrifices.\"\n— Anonymous",
  "\"Loneliness is the kind of tax you need to pay to atone for a certain complexity of mind.\"\n— Alain de Botton",
  "\"Losers let it happen, winners make it happen.\"\n— Vince Lombardi",
  "\"Dreams without goals are just dreams, and ultimately, they fuel disappointment. On the road to achieving your dreams, you must apply discipline, but more importantly, consistency, because without commitment, you'll never start, but without consistency, you'll never finish.\"\n— Denzel Washington",
  "\"Make your move before you are ready.\"\n— Les Brown",
  "\"If you want to be in the top 1%, you have to be willing to do what the 99% won't.\"\n— Anonymous",
  "\"Whether you think you can, or you think you can't – you're right.\"\n— Henry Ford",
  "\"If you pay now, you get to play later. However, if you play now, you will pay later.\"\n— John C. Maxwell",
  "\"Be the person that everyone around you needs to play catch up.\"\n— Anonymous",
  "\"It's not the fastest person who wins the race, but the one who starts first. So start first.\"\n— Anonymous",
  "\"Patience is one of the most important skills we must master. Time will show everything.\"\n— Conor McGregor",
];

function getPhraseOfThePeriod() {
  const now = new Date();
  const onePeriod = 1000 * 60 * 30; // 30 minutes in milliseconds
  const periodIndex = Math.floor(now.getTime() / onePeriod) % phrases.length;
  return phrases[periodIndex];
}

document.addEventListener('DOMContentLoaded', (event) => {
  const phraseElement = document.querySelector('.profile-quote');
  phraseElement.innerText = getPhraseOfThePeriod();
});

