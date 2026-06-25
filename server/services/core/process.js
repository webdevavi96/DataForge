import fs from "fs/promises";
import { visualizer } from "../LLM/visualize";

export const processFn = async function (filePath) {
  if (!filePath) return;

  const filePath = filePath;

  try {
    const rawData = await fs.readFile(filePath, "utf8");

    const data = await visualizer(rawData);

    if (!data) return;

    try {
      await fs.unlink(filePath);
      await fs.writeFile(filePath, data);
      return filePath
    } catch (err) {
      console.error(err);
      throw Error(err);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
