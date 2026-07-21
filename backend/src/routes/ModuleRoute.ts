import { Router } from "express";
import { deleteModule, getModule, getModules, patchModule, postModule } from "../controllers/ModuleController.js";

const router = Router()

router.get('/',getModules)
router.get('/:id',getModule)
router.post('/',postModule)
router.patch('/:id',patchModule)
router.delete('/:id',deleteModule)

export default router