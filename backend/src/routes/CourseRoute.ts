import { Router } from "express";
import { deleteCourse, getCourse, getCourseFromIntructor, getCourses, patchCourse, postCourse } from "../controllers/CouseController.js";


const router = Router()

router.get('/',getCourses)
router.get('/:id',getCourse)
router.get('/instrutor/:id',getCourseFromIntructor)
router.post('/',postCourse)
router.patch('/:id',patchCourse)
router.delete('/:id',deleteCourse)

export default router