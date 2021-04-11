const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// .env
require("dotenv").config();

// express instance
const app = express();
app.use(express.json());
app.use(cors());

// server
const PORT = 5000;
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// set up mongoose
mongoose.connect(
    process.env.MONGODB,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
    (err) => {
      if (err) throw err;
      console.log("MongoDB connection established");
    },
);

// set up routes
app.use("/set_up_data", require("./routes/sud_router"));
app.use("/user", require("./routes/user_router"));
app.use("/questionnaire", require("./routes/qa_router"));
