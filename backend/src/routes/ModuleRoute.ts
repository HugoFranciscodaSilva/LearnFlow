import { Router } from "express";
import { deleteModule, getModule, getModules, patchModule, postModule } from "../controllers/ModuleController.js";
import { login, verifyInstructor } from "../middlewares/middleware.js";

const router = Router()

router.get('/',getModules)
router.get('/:id',getModule)
router.post('/',login,verifyInstructor,postModule)
router.patch('/:id',login,verifyInstructor,patchModule)
router.delete('/:id',login,verifyInstructor,deleteModule)

export default router