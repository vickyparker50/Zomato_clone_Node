const express = require("express");
const mongoose = require("mongoose");
const route = require("./Route/index");
const cors = require("cors");
const dotevn = require("dotenv");
const passport = require('passport');
const cookieSession = require('cookie-session');

const paymentRoutes = require("./Controller/payment");
const authRoutes = require("./Controller/auth");
const passportSetup = require("./Controller/passport");
const formRoutes = require('./Route/index');
dotevn.config();

const app = express();
const Port = process.env.PORT || 5500;
const hostname = "localhost";
const atlasDburls = 'mongodb+srv://vickypaker:2522153322329@cluster0.ye7wciw.mongodb.net/zomato?retryWrites=true&w=majority';

const corsOption = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsuccessstate: 200
}

app.use(cors(corsOption)); // Enable CORS middleware
app.use(express.json());
app.use(cookieSession({ name: "session", keys: ["vicky"], maxAge: 24 * 60 * 60 * 1000 }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', route);
app.use("/api/payment/", paymentRoutes);
app.use("/auth", authRoutes);
app.use('/api', formRoutes);

mongoose.connect(atlasDburls, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(res => {
    app.listen(Port, hostname, () => {
      console.log(`Server is running at ${hostname}:${Port}`);
    });
  })
  .catch(err => console.log(err));
