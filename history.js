const histories = document.getElementById('histories');

function addHistory(questionText, timeTaken, errorCount, wordPerMinute) {
   const newRow = document.createElement('div');
   newRow.classList.add('card');

   newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  <p>Your Speed <span class="bold red">${wordPerMinute}</span> WPM</p>
  </div>
  `;

   histories.appendChild(newRow);

   let previousTests = JSON.parse(localStorage.getItem('testHistory')) || [];
   previousTests.push({ questionText, timeTaken, errorCount, wordPerMinute });
   localStorage.setItem('testHistory', JSON.stringify(previousTests));

   displayHistory();
}

function displayHistory() {
   histories.innerHTML = '';
   const previousTests = JSON.parse(localStorage.getItem('testHistory')) || [];

   previousTests.forEach((test) => {
      const newRow = document.createElement('div');
      newRow.classList.add('card');

      newRow.innerHTML = `
  <h3>${test.questionText}</h3>
  <p>You took: <span class="bold">${parseInt(test.timeTaken)}</span> seconds</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
    <p>Your speed <span class="bold green">${test.wordPerMinute}</span> WPM</p>
  `;

      histories.appendChild(newRow);
   });
}
