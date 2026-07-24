import { Router } from "express";
import { Login } from "../controllers/AuthController.js";


const router = Router()

router.post('/',Login)

export default router