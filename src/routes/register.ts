import { Router } from "express";
import { Registration } from "../models/Registration.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { fullName, email, phone, course, mode, message } = req.body;

    if (!fullName || !email || !phone || !course || !mode) {
      return res.status(400).json({
        message: "Please fill in all required fields.",
      });
    }

    const registration = await Registration.create({
      fullName,
      email,
      phone,
      course,
      mode,
      message,
    });

    return res.status(201).json({
      message: "Registration submitted successfully.",
      registrationId: registration._id,
    });
  } catch (error) {
    console.error("Registration failed:", error);

    return res.status(500).json({
      message: "Something went wrong.",
    });
  }
});

export default router;