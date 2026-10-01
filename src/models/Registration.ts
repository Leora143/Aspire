import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    course: {
      type: String,
      required: true,
    },

    mode: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

export const Registration = mongoose.model(
  "Registration",
  registrationSchema,
);