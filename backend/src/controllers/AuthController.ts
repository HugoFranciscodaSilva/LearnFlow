import type { Request, Response } from "express"
import prisma from "../lib/prisma.js"
import bcrypt from 'bcrypt'

export const Login = async (req:Request,res:Response) =>{
    const { email, password } = req.body

    if(!email || !password) return res.status(400).json({mensagem:"Preencha todos os campos!"})

    try {
        const user = await prisma.usuario.findUnique({where:{email}})
        if(!user) return res.status(400).json({mensagem:"Email ou senha incorretos!"})
        const passwordHashed = await bcrypt.compare(String(password),user.senhaHash)
        if(!passwordHashed) return res.status(400).json({mensagem:"Email ou senha incorretos!"})
        res.status(200).json({mensagem:"Login efetuado com sucesso!",token:""})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem:"Erro ao fazer login!"})
    }
}