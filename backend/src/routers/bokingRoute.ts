import express from "express";
import {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
} from "../controllers/bokingController";
import { verifyToken, verifyRole } from "../middlewares/authorization";

const app = express()
app.use(express.json())

app.get(`/`, [verifyToken, verifyRole(["MANAGER", "USER"])], getAllBookings);
app.get(`/:id`, [verifyToken, verifyRole(["MANAGER", "USER"])], getBookingById);
app.post(`/`, [verifyToken, verifyRole(["USER", "USER"])], createBooking);
app.put(`/:id`, [verifyToken, verifyRole(["MANAGER"])], updateBooking);
app.delete(`/:id`, [verifyToken, verifyRole(["MANAGER"])], deleteBooking);

export default app