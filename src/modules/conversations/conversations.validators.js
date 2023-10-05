const { check, validationResult } = require("express-validator");
const validateResult = require("../../middlewares/validator.middleware");

const createConversationValidator = [
  check("userId", "Error con el campo userId")
    .exists()
    .withMessage("No se incluye la propiedad userId")
    .notEmpty()
    .withMessage("La propiedad userId no debe estar vacia")
    .isInt()
    .withMessage("El valor de userId debe ser un numero entero"),
  check("participantId", "Error con el participantId")
    .exists()
    .withMessage("No se incluye la propiedad participantId")
    .notEmpty()
    .withMessage("La propiedad participantId no debe estar vacia")
    .isInt()
    .withMessage("El valor de participantId debe ser un numero entero"),
  validateResult,
];

const createGroupConversationValidator = [
  check("userId", "Error con el campo userId")
    .exists()
    .withMessage("No se incluye la propiedad userId")
    .notEmpty()
    .withMessage("La propiedad userId no debe estar vacia")
    .isInt()
    .withMessage("El valor de userId debe ser un numero entero"),
  check("participantsIds", "Error con el campo participantsIds")
    .exists()
    .withMessage("No se incluye la propiedad participantsIds")
    .notEmpty()
    .withMessage("La propiedad participantsIds no debe estar vacia")
    .isInt()
    .withMessage("El valor de participantsIds deben ser numeros enteros")
    .isArray({ min: 3 })
    .withMessage("La propiedad participantsIds debe ser un array")
    .withMessage(
      "La propiedad participantsIds debe contener minimo 3 elementos"
    ),
  check("title", "Error con el campo title")
    .exists()
    .withMessage("No se incluye la propiedad title")
    .notEmpty()
    .withMessage("La propiedad title no debe estar vacia")
    .isString()
    .withMessage("El valor de title debe ser string")
    .isLength({ min: 2, max: 30 })
    .withMessage(
      "La longitud del campo title debe ser entre 2 y 30 caracteres"
    ),
  validateResult,
];

module.exports = {
  createConversationValidator,
  createGroupConversationValidator,
};
