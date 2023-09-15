const express = require("express");
const router = express.Router();
const User = require("../Models/User");
// GET ALL
router.get("/", async (req, res) => {
  try {
    const getUsers = await User.find();
    res.status(200).json(getUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

//POST

router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const postUser = await User.create({
      name: name,
      email: email,
      age: age,
    });

    res.status(201).json(postUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// GET USER WITH ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const getUser = await User.findById({ _id: id });
    res.status(200).json(getUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

//DELETE USER WITH ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const getUser = await User.findByIdAndDelete({ _id: id });
    res.status(200).json(getUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// UPDATE USER

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const getUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(getUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
