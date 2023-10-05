const { check, validationResult } = require("express-validator");
const validateResult = require("../../middlewares/validator.middleware");

// createConversationMessage
const createConversationMessageValidator = [
  check("content", "Error con el campo content")
    .exists()
    .withMessage("No se incluye la propiedad content")
    .notEmpty()
    .withMessage("La propiedad content no debe estar vacia")
    .isString()
    .withMessage("El valor de content debe ser string")
    .isLength({ min: 1 })
    .withMessage("La longitud de content debe tener minimo 1 caracter"),
  check("senderId", "Errror con el campo senderId")
    .exists()
    .withMessage("No se incluye la propiedad senderId")
    .notEmpty()
    .withMessage("La propiedad senderId no debe estar vacia")
    .isInt()
    .withMessage("El valor de participantId debe ser un numero entero"),
  validateResult,
];

module.exports = {
  createConversationMessageValidator,
};
