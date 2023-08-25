const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// const UserRoutes = require("./routes/user");

dotenv.config();

// const options = {
//   origin: "http://localhost:3000",
//   useSuccessStatus: 200,
// };

const app = express();
app.use(cors());
app.use(express.json());
//app.use("/api", UserRoutes);

//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

//database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error: ", err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// console.log((+new Date() * Math.random()).toString().substring(0, 1));
