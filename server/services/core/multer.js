import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },

  filename: (req, file, cb) => {
    const newFileName = `${Date.now()}_${file.originalname}`;
    cb(null, newFileName);
  },
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname);

  const allowedExt = [".txt", ".pdf", ".csv"];

  if (!allowedExt.includes(ext))
    return cb(new Error("Only .txt, .pdf or .csv files are allowed"), false);

  cb(null, true);
};

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
