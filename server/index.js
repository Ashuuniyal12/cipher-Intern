import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoute from "./Routes/AuthRoute.js";
// Import Routes
const app = express();

// Middleware
app.use(bodyParser.json({ limit: '90mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '90mb', extended: true }));
app.use(cors());    

dotenv.config();

mongoose
    .connect(process.env.MONGO_DB,
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => app.listen(process.env.PORT || 5000, () => console.log(`Server is running on ${process.env.PORT || 5000}`))).
    catch((error) => console.log(error.message));

//usage of routes
app.use ('/auth',AuthRoute);
