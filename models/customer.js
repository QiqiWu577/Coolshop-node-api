const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const customerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  isGold: Boolean
});

const Customer = mongoose.model("Customer", customerSchema);

function validateCustomer(customer) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required(),
    phone: Joi.string()
      .min(10)
      .required(),
    isGold: Joi.boolean().required()
  };

  return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validate = validateCustomer;
