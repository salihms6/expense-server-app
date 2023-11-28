const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv");
const userRoute = require("./routes/users/usersRoutes");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

const app = express();


//env
dotenv.config();


//dbconnect
dbConnect();
//middlewares
app.use(express.json());

//routes
app.use("/api/users", userRoute);


//error
app.use(notFound);
app.use(errorHandler);






module.exports = app;
