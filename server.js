const express = require("express");
const { removeAllListeners } = require("nodemon");

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "Welcom to the ContactKeeper API..." })
);

// Defind our Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);
// at that poin the server is running
