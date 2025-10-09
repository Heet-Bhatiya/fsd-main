const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

// Setup storage location and file filtering
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  // Accept PDF files only
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed!"), false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
  fileFilter: fileFilter
}).single("resume");

// Routes
app.get("/", (req, res) => {
  res.render("index", { message: null });
});

app.post("/upload", (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      // Multer error
      return res.render("index", { message: err.message });
    }
    if (!req.file) {
      return res.render("index", { message: "No file selected." });
    }
    res.render("result", { filename: req.file.filename });
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
