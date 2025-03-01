import dotenv from "dotenv";
import morgan from "morgan";
dotenv.config(); // Load environment variables at the very top

import express from "express";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
app.use(morgan('dev'))
const router = express.Router();

// Debug: Check if environment variables are loaded
console.log("DEBUG: Loaded environment variables:", {
  PORT: process.env.PORT,
  FRONTEND_URL: process.env.FRONTEND_URL,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_SERVICE: process.env.SMTP_SERVICE,
  SMTP_MAIL: process.env.SMTP_MAIL,
});

// CORS configuration
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email sending route
router.post("/send/mail", async (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }
  
  try {
    // Send email to the email from the env variable
    await sendEmail({
      email: process.env.SMTP_MAIL, // Recipient email from env
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    console.error("DEBUG: Error sending message:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message, // Include error message in response for debugging
    });
  }
});

app.use(router);

const port = process.env.PORT || 3000; // Fallback to 3000 if PORT is undefined
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
