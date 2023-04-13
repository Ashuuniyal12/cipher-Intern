import express from "express";
import { updateUser } from "../Controllers/UserConotroller.js";

const router = express.Router();

router.post('/update', updateUser)

export default router;