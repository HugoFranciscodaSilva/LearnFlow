import { Router } from "express";
import { createUser, deleteUser, getUsers, patchUser } from "../controllers/UserController.js";



const router = Router()

router.get('/',getUsers)
router.post('/',createUser)
router.patch('/:id', patchUser)
router.delete('/:id',deleteUser)

export default router