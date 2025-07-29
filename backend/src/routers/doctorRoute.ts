import express from "express";
import {
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctorController";
import { verifyToken, verifyRole } from "../middlewares/authorization";

const app = express()
app.use(express.json())

app.get(`/`, [verifyToken, verifyRole(["USER", "MANAGER"])], getAllDoctors);
app.get(`/:id`, [verifyToken, verifyRole(["USER", "MANAGER"])], getDoctorById);
app.post(`/`, [verifyToken, verifyRole(["USER", "MANAGER"])], createDoctor);
app.put(`/:id`, [verifyToken, verifyRole(["MANAGER"])], updateDoctor);
app.delete(`/:id`, [verifyToken, verifyRole(["MANAGER"])], deleteDoctor);

export default app