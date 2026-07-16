import type { Request, Response } from "express";
import bcrypt from 'bcrypt'
import prisma from "../lib/prisma.js";

export const getUsers = async (req:Request,res:Response) => {

    try {
        const users = await prisma.usuario.findMany()
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem:"Erro listar usuarios!"})
    }
}


export const createUser = async (req:Request,res:Response) => {

    const { name,email,password ,role} = req.body

    if(!name || !email || !password){
        return res.status(400).json({mensagem:"Todos os campos são obrigatórios!"})
    }

    try {
        const passwordHashed = await bcrypt.hash(String(password),10)
        await prisma.usuario.create(
            {
                data:{nome:name,email,senhaHash:passwordHashed,cargo:role}
            }
        )
        res.status(201).json({mensagem:"Usuario criado com sucesso!"})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem:"Erro ao criar usuario!"})
    }

}
export const patchUser = async (req:Request,res:Response) => {
    const { id } = req.params
    const { name, email, password, role } = req.body
    let passwordHashed

    if(!name && !email && !password && !role) return res.status(400).json({mensagem:"Preencha o campo que pretende atualizar!"})

    try {
        if(password) { passwordHashed = await bcrypt.hash(String(password),10)}
        await prisma.usuario.update({
            where:{ id:Number(id)},
            data:{
                nome:name,
                email,
                senhaHash:passwordHashed,
                cargo:role
            }
        })
        res.status(200).json({mensagem:"Usuario atualizado com sucesso!"})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem:"Erro ao atualizar usuario!"})
    }

}
export const deleteUser = async (req:Request,res:Response) =>{
    const {id} = req.params

    try {
        await prisma.usuario.delete({where:{id:Number(id)}})
        res.end()
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem:"Erro ao deletar usuario!"})
    }
}