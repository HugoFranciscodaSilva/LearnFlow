import { Router } from "express";
import { createUser, deleteUser, getUsers, patchUser } from "../controllers/UserController.js";
import { login, verifyInstructor } from "../middlewares/middleware.js";



const router = Router()

router.get('/',login,verifyInstructor,getUsers)
router.post('/',createUser)
router.patch('/:id',login,patchUser)
router.delete('/:id',login,verifyInstructor,deleteUser)

export default router