import express from "express";
import { registeUSer,LoginUser,changePassword } from "../Controllers/AuthController.js";

const router = express.Router();


router.post('/register', registeUSer)
router.post('/login', LoginUser)
router.post('/changePassword', changePassword)
export default router;