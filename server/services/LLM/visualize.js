import { HfInference } from "@huggingface/inference";
import fs from "fs/promises";

const hf = new HfInference(process.env.HF_ACCESS_TOKEN);
const content = await fs.readFile("./prompt.txt", "utf-8");

const helperFn = (rawData) => {
  try {
    return JSON.parse(rawData.trim());
  } catch (initialError) {
    try {
      const regex = /{[\s\S]*}/;

      const filteredData = rawData.match(regex);

      if (filteredData) {
        return JSON.parse(filteredData[0]);
      }

      throw new Error("No valid json structure");
    } catch (regexError) {
      console.error("Regex Parsing Failure:", regexError);
      throw new Error("Returned malformed data");
    }
  }
};

export const visualizer = async (data) => {
  try {
    const res = await hf.chatCompletion({
      model: "meta-llama/Meta-Llama-3-8B-Instruct",
      messages: [
        {
          role: "system",
          content: content,
        },
        {
          role: "user",
          content: `Extract data from this:\n\n${data}`,
        },
      ],
      max_tokens: 1000,
      temperature: 0.1,
    });

    const newRes = res.choices[0].message.content;

    const structureData = helperFn(newRes);
    return structureData;
  } catch (error) {
    console.error("Visualizer Function Error:", error);
    throw error;
  }
};
