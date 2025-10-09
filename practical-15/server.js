const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// Session configuration
app.use(session({
  secret: "libraryPortalSecret", // change this to a secure random string
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 30 * 60 * 1000 } // session expires in 30 mins
}));

// Login page
app.get("/", (req, res) => {
  res.render("login", { error: null });
});

// Handle login
app.post("/login", (req, res) => {
  const { username } = req.body;

  if (!username || username.trim() === "") {
    return res.render("login", { error: "Please enter your name." });
  }

  // Save session
  req.session.user = {
    name: username.trim(),
    loginTime: new Date().toLocaleString()
  };

  res.redirect("/profile");
});

// Profile page
app.get("/profile", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/");
  }
  res.render("profile", { user: req.session.user });
});

// Logout
app.get("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send("Error logging out");
    }
    res.redirect("/");
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
