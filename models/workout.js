const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercise: [
    {
      type: { type: String, required: true },
      name: { type: String, required: true },
      reps: Number,
      sets: Number,
      weight: Number,
      distance: Number,
      duration: Number
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
