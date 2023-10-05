const { Router } = require("express");
const {
  registerUser,
  loginUser,
  validateUserEmail,
  getAllUsers,
  uploadAvatar,
} = require("./user.controllers");
const authenticate = require("../../middlewares/auth.middleware");
const { registerUserValidator, loginValidation } = require("./user.validators");
const upload = require("../../middlewares/imageUpload.middleware");
const router = Router();

router
  .route("/")
  .get(authenticate, getAllUsers)
  .post(registerUserValidator, registerUser);

router.put("/:id", authenticate, upload.single("avatar"), uploadAvatar);

router.post("/login", loginValidation, loginUser);

router.post("/validate", validateUserEmail);

module.exports = router;
