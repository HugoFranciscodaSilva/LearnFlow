import { Router } from "express";
import { deleteLesson, getLesson, getLessons, patchLesson, postLesson } from "../controllers/LessonController.js";
import { login, verifyInstructor } from "../middlewares/middleware.js";


const router = Router()

router.get('/',getLessons)
router.get('/:id',getLesson)
router.post('/',login,verifyInstructor,postLesson)
router.patch('/:id',login,verifyInstructor,patchLesson)
router.delete('/:id',login,verifyInstructor,deleteLesson)

export default router