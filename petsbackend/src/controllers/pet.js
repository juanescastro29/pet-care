const petsCrtl = {};

const Pet = require("../models/pet");

petsCrtl.getPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.json({ message: "Not data found" });
  }
};

petsCrtl.createPet = async (req, res) => {
  try {
    const newPet = new Pet(req.body);
    await newPet.save();
    res.json({ message: "Pet created succesfully" });
  } catch (error) {
    res.json({ message: "Pet not created" });
  }
};

petsCrtl.getPet = async (req, res) => {
  try {
    const petFound = await Pet.findById(req.params.id);
    res.json(petFound);
  } catch (error) {
    res.json({ message: "Not pet found" });
  }
};

petsCrtl.updatePet = async (req, res) => {
  try {
    await Pet.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Pet updated succesfully" });
  } catch (error) {
    res.json({ message: "Pet not updated" });
  }
};

petsCrtl.detelePet = async (req, res) => {
  try {
    const del = await Pet.findByIdAndDelete(req.params.id);
    res.json({ message: "Pet deleted succesfully" });
  } catch (error) {
    res.json({ message: "Pet not found" });
  }
};

module.exports = petsCrtl;
