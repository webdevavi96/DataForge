import path from "path";
import fs from "fs/promises";

import { processFn } from "./process.js";

function helperFn(filePath) {
  const allowedExt = [".txt", ".pdf", ".csv"];
  const ext = path.extname(filePath);

  if (!allowedExt.includes(ext)) return;

  return ext;
}

const processMidleware = async (req, res) => {
  const { fileId } = req.params.fileId;

  if (!fileId)
    return res.status(404).json({ message: "Invalid file or file not foun!" });

  const filePath = path.join("./public/uploads", fileId);

  if (!filePath) return res.status(404).json({ message: "File not found!" });

  const extname = helperFn(filePath);

  if (!extname) return;

  const data = await processFn(filePath);
  return res.status(200).json({ message: "success", data: data });
};

const readFile = async (req, res) => {
  const { filepath } = req.params.filepath;
  if (!filepath)
    return res
      .status(400)
      .json({ message: "Invalid file name or file not exist" });

  try {
    const file = await fs.readFile(`./public/uploads${filepath}`);
    if (!file) return res.status(404).json({ message: "File not found" });
    return res.status(200).json({ message: "success", data: JSON.parse(data) });
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};

const downloadFile = async (req, res) => {
  const { filepath } = req.params.filepath;
  if (!filepath)
    return res
      .status(400)
      .json({ message: "Invalid file name or file dosen't exist" });

  try {
    if (!(await fs.readFile(`./public/uploads/${filepath}`)))
      return res.status(404).json({ message: "File dosen't exist!" });

    return res
      .status(200)
      .json({ message: "success" })
      .attachment(`./public/uploads/${filepath}`);
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};

export { processMidleware, readFile, downloadFile };
