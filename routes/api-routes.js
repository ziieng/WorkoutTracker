const router = require("express").Router();
const Workout = require("../models/workout.js");

//create new Workout instance
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//return most recent workouts to user
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//return workouts for the last 7 days
router.get("/api/workouts/range", (req, res) => {
  Workout.find({
    //date greater than today minus 7 days (7*60*60*24*1000)
    date: { $gte: new Date(new Date() - 604800000) }
  })
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//exercise page is searching for the id?
router.get("/exercise:id", (req, res) => {
  Workout.find({ _id: ObjectId(req.params.id) })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//add exercise to existing workout
router.put("/api/workouts/:id", (req, res) => {
  let testResult = validateExercise(req.body)
  if (testResult === "valid") {
    let target = req.params.id
  Workout.findByIdAndUpdate(
    { _id: target },
    { $push: { exercise: [req.body] } },
    function (err, result) {

      if (err) {
        res.status(400).json(err);
        console.log(err)
      }
      else {
        res.json(result);
        console.log(result)
      }
    })
  } else {
    console.log(testResult)
    res.status(400).json(testResult)
  }
});

function validateExercise(ex) {
  //validate inputs (front-end has no handling for errors here?)
  if (ex.type === "cardio") {
    if (ex.name === "") {
      return { message: "Exercise description required." };
    };
    if (ex.distance <= 0) {
      return { message: "Distance required for cardio exercises." };
    };
    if (ex.duration <= 0) {
      return { message: "Exercise duration required." };
    };
  } else if (ex.type === "resistance") {
    if (ex.name === "") {
      return { message: "Exercise description required." };
    };
    if (ex.weight <= 0) {
      return { message: "Weight required for Resistance exercises." };
    };
    if (ex.sets <= 0) {
      return { message: "Number of sets required for Resistance exercises." };
    };
    if (ex.reps <= 0) {
      return { message: "Number of reps required for Resistance exercises." };
    };
    if (ex.duration <= 0) {
      return { message: "Exercise duration required." };
    };
  }
  //if nothing failed
  return "valid"
}

module.exports = router;
