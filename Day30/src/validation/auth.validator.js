import { body, validationResult } from "express-validator";

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  res.status(400).json({
    errors: errors.array(),
  });
};

export const registerValidater = [
  body("username").isString().withMessage("Username is required"),
  body("email").isEmail().withMessage("Please enter a valid email"),
];
