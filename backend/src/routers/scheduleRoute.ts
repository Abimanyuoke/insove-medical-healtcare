import express from "express"
import {
  getAllSchedules,
  getScheduleById,
  createSchedule,
  updateSchedule,
  deleteSchedule
} from "../controllers/scheduleController"
import { verifyToken, verifyRole } from "../middlewares/authorization"
import { scheduleValidationRules, validateSchedule } from "../middlewares/scheduleValidation"

const app = express()
app.use(express.json())

app.get(`/`, [verifyToken, verifyRole(["MANAGER", "CASHIER"])], getAllSchedules)
app.get(`/:id`, [verifyToken, verifyRole(["MANAGER", "CASHIER"])], getScheduleById)
app.post(`/`, [verifyToken, verifyRole(["MANAGER"]), ...scheduleValidationRules, validateSchedule], createSchedule)
app.put(`/:id`, [verifyToken, verifyRole(["MANAGER"]), ...scheduleValidationRules, validateSchedule], updateSchedule)
app.delete(`/:id`, [verifyToken, verifyRole(["MANAGER"])], deleteSchedule)

export default app
