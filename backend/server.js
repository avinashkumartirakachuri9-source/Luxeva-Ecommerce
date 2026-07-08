import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import dns from "node:dns";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

// App config

const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(cors());
connectDB()
connectCloudinary()

// api end points
app.use('/api/user',userRouter)

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log("Server started on Port:" + port));
