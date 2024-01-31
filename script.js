document.addEventListener('DOMContentLoaded', function () {
  const emojiContainer = document.getElementById('emojiContainer');
  const flowerContainer = document.getElementById('flowerContainer');
  const yesButton = document.getElementById('yesButton');
  const ouiButton = document.getElementById('ouiButton');
  const responseMessage = document.getElementById('responseMessage');
  const messageBox = document.getElementById('messageBox');
  const question = document.querySelector('#messageBox h1'); // Get the question element

  function createEmoji() {
      const emoji = document.createElement('div');
      emoji.className = 'emoji';
      emoji.textContent = '🩷'; // Setting ribbon emoji as content
      emoji.style.left = Math.random() * window.innerWidth + 'px';
      emoji.style.top = Math.random() * window.innerHeight + 'px';
      emoji.style.fontSize = Math.random() * 40 + 40 + 'px'; // Increased font size for variation
      emoji.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duration between 3 and 5 seconds
      emojiContainer.appendChild(emoji);
      
      // Remove emoji after it animates out
      emoji.addEventListener('animationend', function() {
          emoji.remove();
      });
  }

  function createRose() {
      const rose = document.createElement('div');
      rose.className = 'flower';
      rose.textContent = '🌹'; // Setting rose emoji as content
      rose.style.left = Math.random() * window.innerWidth + 'px';
      rose.style.fontSize = '50px'; // Increased fixed font size for roses
      rose.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duration between 3 and 5 seconds
      flowerContainer.appendChild(rose);
      
      // Remove rose after it animates out
      rose.addEventListener('animationend', function() {
          rose.remove();
      });
  }

  // Create a large initial batch of emojis to fill the screen
  for (let i = 0; i < 100; i++) {
      createEmoji();
  }

  // Create emojis at intervals
  setInterval(createEmoji, 300);

  // Event listeners for buttons
  function handleResponse() {
      // Hide the question and buttons
      question.style.display = 'none';
      yesButton.style.display = 'none';
      ouiButton.style.display = 'none';
      // Show the "I love you!" message
      responseMessage.textContent = 'I love you!';
      responseMessage.style.display = 'block'; // Ensure it's visible
      // Create falling roses
      for (let i = 0; i < 30; i++) {
          createRose();
      }
  }

  yesButton.addEventListener('click', handleResponse);
  ouiButton.addEventListener('click', handleResponse);
});
