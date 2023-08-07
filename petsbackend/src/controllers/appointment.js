const Appointment = require("../models/appointment");
const Pet = require("../models/pet");
const appointmentCrtl = {};

appointmentCrtl.getAppointments = async (req, res) => {
  try {
    const data = await Appointment.find();
    res.json(data);
  } catch (error) {
    res.json({ message: "No data found" });
  }
};

appointmentCrtl.createAppointment = async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    newAppointment.pet = req.params.id;
    const pet = await Pet.findById(req.params.id);
    pet.appointments.push(newAppointment);
    await pet.save();
    await newAppointment.save();
    res.json({ message: "New appointment created" });
  } catch (error) {
    res.json({ message: "Error created appointment" });
  }
};

appointmentCrtl.getAppointment = async (req, res) => {
  try {
    const appointmentFound = await Appointment.findById(req.params.id);
    res.json(appointmentFound);
  } catch (error) {
    res.json({ message: "Not appointment found" });
  }
};

appointmentCrtl.updateAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Appointment update succesfully" });
  } catch (error) {
    res.json({ message: "Appointment not updated" });
  }
};

appointmentCrtl.deleteAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "Appointment deleted succesfully" });
  } catch (error) {
    res.json({ message: "Apointment not found" });
  }
};

module.exports = appointmentCrtl;
