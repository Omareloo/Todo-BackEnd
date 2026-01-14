import { dbConnection } from "./Config/dbConnections.js";
import express from "express";
import taskRouter from "./Routes/task-Route.js";
import userRouter from "./Routes/user-Route.js";
import cors from "cors";



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());





// Connect to DB
dbConnection();


// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Todo System API is running",
  });
});


// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);


export default app;
