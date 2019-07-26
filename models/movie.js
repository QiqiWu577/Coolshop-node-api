const { genreSchema } = require("../models/genre");
const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const Movie = mongoose.model(
  "Movies",
  new mongoose.Schema({
    title: {
      type: String,
      trim: true,
      minlength: 5,
      maxlength: 255,
      required: true
    },
    genre: {
      type: genreSchema,
      required: true
    },
    numberInStock: {
      type: Number,
      required: true,
      minlength: 0,
      maxlength: 255
    },
    dailyRentalRate: {
      type: Number,
      required: true,
      minlength: 0,
      maxlength: 255
    }
  })
);

function validateMovie(movie) {
  const schema = {
    title: Joi.string()
      .min(5)
      .max(255)
      .required(),
    genreId: Joi.objectId().required(),
    numberInStock: Joi.number()
      .min(0)
      .required(),
    dailyRentalRate: Joi.number()
      .min(0)
      .required()
  };

  return Joi.validate(movie, schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;
