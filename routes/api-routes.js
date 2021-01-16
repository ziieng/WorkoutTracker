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
  // Workout.find({})
  //   .sort({ date: -1 })
  //   .then(dbTransaction => {
  //     res.json(dbTransaction);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
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
  let target = req.params.id
  console.log(req.body)
  console.log(target)
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
});

module.exports = router;
