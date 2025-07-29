import { Request, Response } from "express";
import { PrismaClient, BookingStatus } from "@prisma/client";

const prisma = new PrismaClient({ errorFormat: "pretty" });


export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const { status } = req.query;

    let statusFilter: BookingStatus | undefined;

    if (
      status &&
      Object.values(BookingStatus).includes(status.toString().toUpperCase() as BookingStatus)
    ) {
      statusFilter = status.toString().toUpperCase() as BookingStatus;
    }

    const bookings = await prisma.booking.findMany({
      where: {
        status: statusFilter,
      },
      include: {
        user: true,
        schedule: {
          include: {
            doctor: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });

    return res.status(200).json({
      status: true,
      data: bookings,
      message: "All bookings retrieved successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `Failed to retrieve bookings. Error: ${error}`,
    });
  }
};


export const getBookingById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const booking = await prisma.booking.findUnique({
      where: { id: Number(id) },
      include: {
        user: true,
        schedule: {
          include: {
            doctor: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });

    if (!booking) {
      return res.status(404).json({
        status: false,
        message: "Booking not found",
      });
    }

    return res.status(200).json({
      status: true,
      data: booking,
      message: "Booking retrieved successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `Failed to retrieve booking. Error: ${error}`,
    });
  }
};


export const createBooking = async (req: Request, res: Response) => {
  try {
    const { userId, scheduleId, status } = req.body;

    if (!Object.values(BookingStatus).includes(status as BookingStatus)) {
      return res.status(400).json({
        status: false,
        message: `Invalid status. Must be one of: ${Object.values(BookingStatus).join(", ")}`,
      });
    }

    const newBooking = await prisma.booking.create({
      data: {
        userId: Number(userId),
        scheduleId: Number(scheduleId),
        status: status as BookingStatus,
      },
    });

    return res.status(201).json({
      status: true,
      data: newBooking,
      message: "Booking created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `Failed to create booking. Error: ${error}`,
    });
  }
};


export const updateBooking = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!Object.values(BookingStatus).includes(status as BookingStatus)) {
      return res.status(400).json({
        status: false,
        message: `Invalid status. Must be one of: ${Object.values(BookingStatus).join(", ")}`,
      });
    }

    const booking = await prisma.booking.findUnique({
      where: { id: Number(id) },
    });

    if (!booking) {
      return res.status(404).json({
        status: false,
        message: "Booking not found",
      });
    }

    const updated = await prisma.booking.update({
      where: { id: Number(id) },
      data: {
        status: status as BookingStatus,
      },
    });

    return res.status(200).json({
      status: true,
      data: updated,
      message: "Booking updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `Failed to update booking. Error: ${error}`,
    });
  }
};


export const deleteBooking = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const booking = await prisma.booking.findUnique({
      where: { id: Number(id) },
    });

    if (!booking) {
      return res.status(404).json({
        status: false,
        message: "Booking not found",
      });
    }

    await prisma.booking.delete({
      where: { id: Number(id) },
    });

    return res.status(200).json({
      status: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `Failed to delete booking. Error: ${error}`,
    });
  }
};
