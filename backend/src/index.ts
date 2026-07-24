import express from 'express'
import 'dotenv/config.js'
import UserRoutes from './routes/UserRoute.js'
import CourseRoutes from './routes/CourseRoute.js'
import LessonRoutes from './routes/LessonRoute.js'
import ModuleRoutes from './routes/ModuleRoute.js'
import Auth from './routes/AuthRoute.js'
import cors from 'cors'

const app = express()
const PORTA = process.env.PORTA
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Api rodando!")
})


app.use('/users',UserRoutes)
app.use('/courses',CourseRoutes)
app.use('/modules',ModuleRoutes)
app.use('/lessons',LessonRoutes)
app.use('/auth/login',Auth)

app.listen(PORTA,()=>{
    console.log(`Servidor rodando em http://localhost:${PORTA}`)
})