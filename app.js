const express = require("express");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes");

const port = process.env.PORT || 3000;

const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use(
  express.urlencoded({
    limit: "50mb",
    extended: false,
    parameterLimit: 10000,
  })
);

//Enable cors
app.use(cors());
app.use(morgan("common"));
app.use(router);

app.get("/api", (req, res) => {
  const response = new Response(
    true,
    200,
    `Welcome to Sequelize Project ${port}`
  );
  res.status(response.code).json(response);
});

//Handling unhandle routes
app.all("*", (req, res, next) => {
  const response = new Response(
    false,
    404,
    `Page not found. Can't find ${req.originalUrl} on this server`
  );
  return res.status(response.code).json(response);
});

//listening to port
app.listen(port, () => {
  console.log(`Welcome to Sequelize Project running on port ${port}`);
});
