import { Request, Response } from "express";
import { PrismaClient, Specialization} from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient({ errorFormat: "pretty" });

export const getAllDoctors = async (req: Request, res: Response) => {
  try {
    const { specialization } = req.query;

    let whereCondition = {};

    if (specialization && Object.values(Specialization).includes(specialization as Specialization)) {
      whereCondition = {
        specialization: specialization as Specialization,
      };
    }

    const doctors = await prisma.doctor.findMany({
      where: whereCondition,
      include: {
        user: true,
        schedules: true,
      },
    });

    return res.status(200).json({
      status: true,
      message: "Doctors retrieved successfully",
      data: doctors,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `Error retrieving doctors: ${error}`,
    });
  }
};

export const getDoctorById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const doctor = await prisma.doctor.findUnique({
      where: { id: Number(id) },
      include: {
        user: true,
        schedules: true,
      },
    });

    if (!doctor) {
      return res.status(404).json({
        status: false,
        message: "Doctor not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Doctor retrieved successfully",
      data: doctor,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `Error retrieving doctor: ${error}`,
    });
  }
};

export const createDoctor = async (req: Request, res: Response) => {
  try {
    const { userId, specialization, bio, location } = req.body;

   
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    // Check if doctor already exists for that user
    const doctorExists = await prisma.doctor.findUnique({
      where: { userId: Number(userId) },
    });

    if (doctorExists) {
      return res.status(400).json({
        status: false,
        message: "Doctor profile already exists for this user",
      });
    }

    const newDoctor = await prisma.doctor.create({
      data: {
        userId: Number(userId),
        specialization,
        bio,
        location,
      },
    });

    return res.status(201).json({
      status: true,
      message: "Doctor profile created",
      data: newDoctor,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `Error creating doctor: ${error}`,
    });
  }
};

export const updateDoctor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { specialization, bio, location } = req.body;

    const doctor = await prisma.doctor.findUnique({
      where: { id: Number(id) },
    });

    if (!doctor) {
      return res.status(404).json({
        status: false,
        message: "Doctor not found",
      });
    }

    const updatedDoctor = await prisma.doctor.update({
      where: { id: Number(id) },
      data: {
        specialization: specialization || doctor.specialization,
        bio: bio ?? doctor.bio,
        location: location ?? doctor.location,
      },
    });

    return res.status(200).json({
      status: true,
      message: "Doctor updated successfully",
      data: updatedDoctor,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `Error updating doctor: ${error}`,
    });
  }
};

export const deleteDoctor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const doctor = await prisma.doctor.findUnique({
      where: { id: Number(id) },
    });

    if (!doctor) {
      return res.status(404).json({
        status: false,
        message: "Doctor not found",
      });
    }

    await prisma.doctor.delete({
      where: { id: Number(id) },
    });

    return res.status(200).json({
      status: true,
      message: "Doctor deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `Error deleting doctor: ${error}`,
    });
  }
};
