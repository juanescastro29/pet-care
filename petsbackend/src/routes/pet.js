const { Router } = require("express")
const router = Router()

const petsCrtl = require("../controllers/pet")

router.get("/", petsCrtl.getPets)

router.post("/", petsCrtl.createPet)

router.get("/:id", petsCrtl.getPet)

router.put("/:id", petsCrtl.updatePet)

router.delete("/:id", petsCrtl.detelePet)

module.exports = router;