import express from "express";
import { config } from "dotenv";
import cookies from "cookie-parser";
export const app = express();

import userRouter from "./routes/userRoute.js";
import taskRouter from "./routes/taskRoute.js";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

// set config custom path
config({
  path: "./data/config.env",
});

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Use Middlewares
app.use(cookies());
app.use(express.json()); // parse json (body) data
app.use(express.urlencoded({ extended: true })); // parse form data

app.get("/", (req, res) => {
  res.send("Hello There");
});
app.use("/api/v1/user", userRouter); // use/connect userRoutes
app.use("/api/v1/task", taskRouter); // use/connect userRoutes

app.use(errorMiddleware);
