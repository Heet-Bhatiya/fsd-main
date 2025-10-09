const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Render the main tax form page
app.get("/", (req, res) => {
  res.render("index", { error: null });
});

// Handle form submission
app.post("/calculate", (req, res) => {
  const { income1, income2 } = req.body;

  // Validate inputs
  const num1 = parseFloat(income1);
  const num2 = parseFloat(income2);

  if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
    return res.render("index", {
      error: "Please enter valid positive numbers for both income fields.",
    });
  }

  const total = num1 + num2;

  // Render result page
  res.render("result", { income1: num1, income2: num2, total });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
