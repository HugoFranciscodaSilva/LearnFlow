import { Router } from "express";
import { deleteLesson, getLesson, getLessons, patchLesson, postLesson } from "../controllers/LessonController.js";


const router = Router()

router.get('/',getLessons)
router.get('/:id',getLesson)
router.post('/',postLesson)
router.patch('/:id',patchLesson)
router.delete('/:id',deleteLesson)

export default router