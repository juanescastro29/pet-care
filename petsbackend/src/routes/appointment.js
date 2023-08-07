const { Router } = require("express")
const router = Router()

const appointmentCrtl = require("../controllers/appointment")

router.get("/", appointmentCrtl.getAppointments)

router.post("/:id", appointmentCrtl.createAppointment)

router.get("/:id", appointmentCrtl.getAppointment)

router.put("/:id", appointmentCrtl.updateAppointment)

router.delete("/:id", appointmentCrtl.deleteAppointment)


module.exports = router;