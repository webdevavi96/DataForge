import { Router } from "express";
import { upload } from "./multer.js";
import { processMidleware, readFile, downloadFile } from "./processMidleware.js";

const router = Router();

router.post("/upload", upload.single("file"), (req, res) => {
  return res.status(200).json({
    message: "File uploaded successfully!",
    fileId: req?.file?.filename,
  });
});

router.get("/process/:fileId", processMidleware);
router.get("/file/:filepath", readFile);
router.get("/download/:filepath", downloadFile);

export default router;
