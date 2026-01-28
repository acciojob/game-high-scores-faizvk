const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

function saveScore() {
  const name = nameInput.value.trim();
  const score = scoreInput.value.trim();

  if (!name || !score) return;

  let storedScores = JSON.parse(localStorage.getItem("scores")) || [];

  // push normally
  storedScores.push({ name, score });

  localStorage.setItem("scores", JSON.stringify(storedScores));

  nameInput.value = "";
  scoreInput.value = "";

  showScores();
}

function showScores() {
  let storedScores = JSON.parse(localStorage.getItem("scores")) || [];

  if (storedScores.length === 0) {
    scores.textContent = "No scores yet";
    return;
  }

  // rotate: move first element to end
  if (storedScores.length > 1) {
    storedScores = storedScores.slice(1).concat(storedScores[0]);
  }

  let tableHTML = `
    <table border="1" cellpadding="5">
      <tr>
        <th>Name</th>
        <th>Score</th>
      </tr>
  `;

  storedScores.forEach(s => {
    tableHTML += `
      <tr>
        <td>${s.name}</td>
        <td>${s.score}</td>
      </tr>
    `;
  });

  tableHTML += `</table>`;

  scores.innerHTML = tableHTML;
}
