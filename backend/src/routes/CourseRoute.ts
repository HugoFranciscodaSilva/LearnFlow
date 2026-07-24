import { Router } from "express";
import { deleteCourse, getCourse, getCourseFromIntructor, getCourses, patchCourse, postCourse } from "../controllers/CouseController.js";
import { login, verifyInstructor } from "../middlewares/middleware.js";


const router = Router()

router.get('/',getCourses)
router.get('/:id',getCourse)
router.get('/instrutor/:id',login,verifyInstructor,getCourseFromIntructor)
router.post('/',login,verifyInstructor,postCourse)
router.patch('/:id',login,verifyInstructor,patchCourse)
router.delete('/:id',login,verifyInstructor,deleteCourse)

export default router