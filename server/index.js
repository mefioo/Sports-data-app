const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const simulations = [
  {
    host: 1,
    guest: 2,
  },
  {
    host: 3,
    guest: 4,
  },
  {
    host: 5,
    guest: 6,
  },
];

const teams = [
  {
    name: "Germany",
    id: 1,
  },
  {
    name: "Poland",
    id: 2,
  },
  {
    name: "Brazil",
    id: 3,
  },
  {
    name: "Mexico",
    id: 4,
  },
  {
    name: "Argentina",
    id: 5,
  },
  {
    name: "Uruguay",
    id: 6,
  },
];

const PORT = process.env.PORT || 3001;

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/simulations", (req, res) => {
  res.json({ simulations, title: "Katar 2023" });
});

app.get("/teams", (req, res) => {
  res.json({ teams });
});

const server = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const io = require("./socket").init(server);

io.on("connection", (socket) => {
  console.log("connected");
});
