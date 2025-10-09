app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.render("result", { message: null, error: "All fields are required." });
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.render("result", { message: null, error: "Invalid email address." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "YOUR_EMAIL@gmail.com",
        pass: "YOUR_EMAIL_PASSWORD"
      }
    });

    const mailOptions = {
      from: email,
      to: "YOUR_EMAIL@gmail.com",
      subject: `Contact Form Message from ${name}`,
      text: message
    };

    await transporter.sendMail(mailOptions);

    res.render("result", { message: "Message sent successfully!", error: null });
  } catch (err) {
    console.error(err);
    res.render("result", { message: null, error: "Failed to send message. Try again later." });
  }
});
