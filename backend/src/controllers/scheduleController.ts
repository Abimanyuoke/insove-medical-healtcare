import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ✅ Ambil semua jadwal
export const getAllSchedules = async (req: Request, res: Response) => {
  try {
    const schedules = await prisma.schedule.findMany({
      include: {
        doctor: {
          include: {
            user: true
          }
        },
        bookings: true,
      },
    });
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil jadwal", error });
  }
};

// ✅ Ambil satu jadwal berdasarkan ID
export const getScheduleById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const schedule = await prisma.schedule.findUnique({
      where: { id: Number(id) },
      include: {
        doctor: {
          include: {
            user: true
          }
        },
        bookings: true,
      },
    });

    if (!schedule) {
      return res.status(404).json({ message: "Jadwal tidak ditemukan" });
    }

    res.status(200).json(schedule);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil detail jadwal", error });
  }
};

// ✅ Buat jadwal baru
export const createSchedule = async (req: Request, res: Response) => {
  const { doctorId, date, startTime, endTime } = req.body;

  try {
    const newSchedule = await prisma.schedule.create({
      data: {
        doctorId: Number(doctorId),
        date: new Date(date),
        startTime: new Date(startTime),
        endTime: new Date(endTime),
      },
    });

    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(500).json({ message: "Gagal membuat jadwal", error });
  }
};

// ✅ Update jadwal
export const updateSchedule = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { doctorId, date, startTime, endTime } = req.body;

  try {
    const updatedSchedule = await prisma.schedule.update({
      where: { id: Number(id) },
      data: {
        doctorId: Number(doctorId),
        date: new Date(date),
        startTime: new Date(startTime),
        endTime: new Date(endTime),
      },
    });

    res.status(200).json(updatedSchedule);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengupdate jadwal", error });
  }
};

// ✅ Hapus jadwal
export const deleteSchedule = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.schedule.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ message: "Jadwal berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Gagal menghapus jadwal", error });
  }
};
