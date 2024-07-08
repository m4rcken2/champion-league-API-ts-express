import Router from "express"
import * as playerController from "./controllers/players-controller"
import { getClubs } from "./controllers/clubs-controller"

const router = Router()

router.get("/players", playerController.getPlayers)
router.get('/players/:id', playerController.getPlayerById)
router.post('/players', playerController.postPlayer)
router.patch('/players/:id', playerController.updatePlayer)
router.delete('/players/:id', playerController.deletePlayerById)

router.get("/clubs", getClubs)

export default router
