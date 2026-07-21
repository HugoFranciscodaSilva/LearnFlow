import type { Request,Response } from "express";
import prisma from "../lib/prisma.js";

export const getLessons = async (req:Request,res:Response) =>{
    try {
        const lessons = await prisma.aula.findMany()
        res.status(200).json(lessons)
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem:"Erro ao listar as aulas!"})
    }
}

export const getLesson = async (req:Request,res:Response) =>{
    const { id } = req.params

    try {
        const lesson = await prisma.aula.findFirst({where:{id:Number(id)}})
        res.status(200).json(lesson)
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem:"Erro ao listar aula!"})
    }
}

export const postLesson = async (req:Request,res:Response) => {
    const { title, url, order, module} = req.body

    if(!title || !url || !order) return res.status(400).json({mensagem:"Preencha todos os campos!"})

    try {
        await prisma.aula.create({
            data:{
                titulo:title,
                url,
                ordem:order,
                moduloId:module
            }
        })
        res.status(201).json({mensagem:"Aula criada com sucesso!"})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem:"Erro ao criar aula!"})
    }
}
export const patchLesson = async (req:Request,res:Response) =>{
    const { id } = req.params
    const { title, url, order, module} = req.body

    if(!title && !url && !order) return res.status(400).json({mensagem:"Preencha o campo que pretende atualizar!"})

    try {
        await prisma.aula.update({
            where:{id:Number(id)},
            data:{
                titulo:title,
                url,
                ordem:order,
                moduloId:module
            }
        })
        res.status(200).json({mensagem:"Aula atualizada com sucesso!"})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem:"Erro ao atualizar aula!"})
    }
}

export const deleteLesson = async (req:Request,res:Response) =>{
    const { id } = req.params

    try {
        await prisma.aula.delete({where:{id:Number(id)}})
        res.end()
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem:"Erro ao deletar aula!"})
    }
}
