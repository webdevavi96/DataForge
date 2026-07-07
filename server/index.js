import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRouter from "./user/route.js";
import fileRouter from "./services/core/service.js";

dotenv.config()

const app = express();
const port = process.env.PORT;



app.use(cors({
  origin: process.env.ORIGIN_URL,
  credentials: true
}));

app.use(express.json());

app.use((err, req, res, next) => {
  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({
      message: "File size cannot exceed 5 MB",
    });
  }

  res.status(500).json({
    message: err.message,
  });
});

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/users", userRouter);
app.use("/api/files", fileRouter);


app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
