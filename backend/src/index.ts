import express from 'express'
import 'dotenv/config.js'

const app = express()
const PORTA = process.env.PORTA
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Api rodando!")
})

app.listen(PORTA,()=>{
    console.log(`Servidor rodando em http://localhost:${PORTA}`)
})