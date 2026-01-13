const express = require("express");
const userRouter = require("./routes/user-routes");
const blogRouter = require("./routes/blog-routes");
const helmet = require("helmet");
require("./config/db");
const cors = require("cors");

const app = express();

app.use(cors());

//setting helmet middleware
app.use(helmet(
  {
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  }
));

app.set("view engine", "ejs");
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);

app.use("/api", (req, res, next) => {
  res.send("hello");
});

//define port

app.listen(5001, '0.0.0.0', () => {
  console.log('Backend running on port 5001');
});

