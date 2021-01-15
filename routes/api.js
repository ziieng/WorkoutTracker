const router = require("express").Router();
const Workout = require("../models/workout.js");

//create new Workout instance
router.post("/api/workouts", ({ body }, res) => {
  // Workout.create(body)
  //   .then(dbTransaction => {
  //     res.json(dbTransaction);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

//return most recent workouts to user
router.get("/api/workouts", (req, res) => {
  // Workout.find({})
  //   .sort({ date: -1 })
  //   .then(dbTransaction => {
  //     res.json(dbTransaction);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

//return workouts for the last 7 days
router.get("/api/workouts/range", (req, res) => {
  // Workout.find({})
  //   .sort({ date: -1 })
  //   .then(dbTransaction => {
  //     res.json(dbTransaction);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

module.exports = router;
