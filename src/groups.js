const router = require("express").Router();
let Group = require("../modals/group.modal");

router.route("/addGroup").post(async (req, res) => {
  const location = req.body.location;
  const topic = req.body.topic;
  const info = req.body.info;

  const newGroup = new Group({ location, topic, info });

  await newGroup
    .save()
    .then(() => res.json("Group added!"))
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error: " + err);
    });
});

router.route("/getGroups").get(async (req, res) => {
  Group.find()
    .then((groups) => {
      console.log(groups);
      res.json(groups);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
///Users/noa/mongodb/bin/mongod.exe --dbpath=/Users/noa/mongodb-data
