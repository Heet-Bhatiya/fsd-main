// Object to store vote counts
let votes = {
  JavaScript: 0,
  Python: 0,
  Java: 0
};

// Function to handle vote
function vote(language) {
  votes[language]++;           // Increase the vote count
  showVotes();                 // Update the vote display
}

// Function to show vote results
function showVotes() {
  let result = `
    JavaScript: ${votes.JavaScript} <br>
    Python: ${votes.Python} <br>
    Java: ${votes.Java}
  `;
  document.getElementById("results").innerHTML = result;
}
    