import express from "express";
import userRouter from "./user/route.js";
import fileRouter from "./services/core/service.js";

const app = express();
const port = 3000;

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

app.get("/api/users", userRouter);
app.get("/api/files", fileRouter);

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
