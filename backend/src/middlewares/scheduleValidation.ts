import { body, validationResult } from "express-validator"
import { Request, Response, NextFunction } from "express"

export const scheduleValidationRules = [
  body("date")
    .notEmpty().withMessage("Tanggal wajib diisi")
    .isISO8601().withMessage("Format tanggal harus YYYY-MM-DD"),

  body("time")
    .notEmpty().withMessage("Waktu wajib diisi")
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/).withMessage("Format waktu harus HH:MM (24 jam)"),

  body("activity")
    .notEmpty().withMessage("Aktivitas tidak boleh kosong")
    .isLength({ min: 3 }).withMessage("Aktivitas minimal 3 karakter"),
]

export const validateSchedule = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next()
}
