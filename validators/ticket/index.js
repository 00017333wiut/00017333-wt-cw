const { body, param } = require('express-validator');
const ticket_service = require('../../services/ticket')

const addTicketValidation = () => {
  return [
    body('productName')
      .notEmpty().withMessage('Product name must not be empty')
      .isLength({ min: 3, max: 255 }).withMessage('Product name must be between 3 and 255 characters long'),
    body('productDateTime')
      .notEmpty().withMessage('Product date time must not be empty')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
        .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),
    body('farm')
      .notEmpty().withMessage('Product farm must not be empty'),
    body('price')
      .notEmpty().withMessage('Price must not be empty')
      .isNumeric().withMessage('Price must be a number')      
   ];
};

const deleteTicketValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await ticket_service.getById(id);
      if (!exists) {
        throw new Error('Ticket not found');
      }
    })
  ];
};

const updateTicketValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await ticket_service.getById(id);
      if (!exists) {
        throw new Error('Ticket not found');
      }
    }),
    body('productName')
      .notEmpty().withMessage('Product name must not be empty')
      .isLength({ min: 8, max: 255 }).withMessage('Product name must be between 8 and 255 characters long'),
    body('productDateTime')
      .notEmpty().withMessage('Product date time must not be empty')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
        .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),
    body('farm')
      .notEmpty().withMessage('Product farm must not be empty'),
    body('price')
      .notEmpty().withMessage('Price must not be empty'),      
  ];
};

module.exports = {
    addTicketValidation,
    updateTicketValidation,
    deleteTicketValidation
};
