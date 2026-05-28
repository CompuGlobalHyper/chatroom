const express = require("express");
const session = require("express-session");
const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const client = require("./db/client.js");
const cors = require("cors");

//const routes = ''

const app = express()
app.use(passport.initialize())
app.use(express.json())
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cookieParser())
const clientUrl = process.env.CLIENT_URL

//app.use(routes)
const PORT = process.env.PORT || 3000
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log("app listening on port 3000!");
});

