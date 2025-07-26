const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
const path = require("path");

// Load .env file from backend directory (when deployed, Render injects it directly)
require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Basic HTML sanitizer
const sanitize = (str) =>
  String(str)
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

// API route
app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate inputs
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const cleanName = sanitize(name.trim());
  const cleanEmail = sanitize(email.trim());
  const cleanMessage = sanitize(message.trim()).replace(/\n/g, "<br/>");

  try {
    const data = await resend.emails.send({
      from: "Portfolio Website <onboarding@resend.dev>",
      to: ["shubhamgupta15m@gmail.com"],
      subject: `New message from ${cleanName}`,
      html: `
        <div style="font-family: 'Helvetica Neue', sans-serif; background-color: #ffffff; padding: 24px; color: #1a1a1a; font-size: 16px; line-height: 1.6;">
          <h2 style="font-size: 22px; margin-bottom: 16px; color: #18181b;">📩 New Message from Portfolio</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="font-weight: 600; padding: 8px 0; width: 100px;">Name:</td>
              <td style="padding: 8px 0;">${cleanName}</td>
            </tr>
            <tr>
              <td style="font-weight: 600; padding: 8px 0;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${cleanEmail}" style="color: #000;">${cleanEmail}</a></td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <div style="font-weight: 600; margin-bottom: 8px;">Message:</div>
            <div style="background-color: #f4f4f5; padding: 16px; border-radius: 8px; color: #27272a;">
              ${cleanMessage}
            </div>
          </div>

          <p style="margin-top: 40px; font-size: 13px; color: #52525b;">This message was submitted through the contact form on your portfolio website.</p>
        </div>
      `,
    });

    console.log("✅ Email sent:", data);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Error sending email:", error.message || error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Default route for checking API is alive
app.get("/", (req, res) => {
  res.send("Backend API is live ✅");
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

module.exports = app;
