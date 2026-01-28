const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
  const name = nameInput.value.trim();
  const score = scoreInput.value.trim();

  if (!name || !score) return;

  // Fetch existing scores (or initialize empty array)
  let storedScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Add new score
  storedScores.push({ name, score });

  // Save back to localStorage
  localStorage.setItem("highScores", JSON.stringify(storedScores));

  // Clear inputs
  nameInput.value = "";
  scoreInput.value = "";

  showScores();
}

// Show scores in div
function showScores() {
  const storedScores = JSON.parse(localStorage.getItem("highScores")) || [];

  if (storedScores.length === 0) {
    scores.innerHTML = "No scores yet";
    return;
  }

  let tableHTML = `
    <table border="1" cellpadding="5">
      <tr>
        <th>Name</th>
        <th>Score</th>
      </tr>
  `;

  storedScores.forEach(entry => {
    tableHTML += `
      <tr>
        <td>${entry.name}</td>
        <td>${entry.score}</td>
      </tr>
    `;
  });

  tableHTML += "</table>";

  scores.innerHTML = tableHTML;
}
