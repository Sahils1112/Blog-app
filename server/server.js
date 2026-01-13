import express from "express";
import helmet from "helmet";
import cors from "cors";

// Local imports MUST include .js
import userRouter from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";

// DB connection (just importing runs it)
import "./config/db.js";

const app = express();

app.use(cors());

// setting helmet middleware
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

app.set("view engine", "ejs");
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);

app.use("/api", (req, res) => {
  res.send("hello");
});

// define port (Docker-safe)
const PORT = process.env.PORT || 5001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});
