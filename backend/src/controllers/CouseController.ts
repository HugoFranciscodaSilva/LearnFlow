import { response, type Request, type Response } from "express"
import prisma from "../lib/prisma.js"

export const getCourses = async (req:Request,res:Response) =>{
    try {
        const courses = await prisma.curso.findMany()
        res.status(200).json(courses)
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaegem:"Erro ao listar os cursos!"})
    }
}

export const getCourse = async (req:Request,res:Response) =>{
    const {id} = req.params

    try {
        const course = await prisma.curso.findFirst({where:{id:Number(id)}})
        res.status(200).json(course)
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem:"Erro ao listar curso!"})
    }
}

export const getCourseFromIntructor = async (req:Request,res:Response)=>{
    const {id} = req.params

    try {
        const courses = await prisma.curso.findMany({where:{criadorId:Number(id)}})
        res.status(200).json(courses)
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaegem:"Erro ao listar os cursos!"})
    }
}

//export const getCourseFromEstudant


export const postCourse = async (req:Request,res:Response) =>{
    const {title,description,cape,criadorId} = req.body

    if(!title || !description || !cape) return res.status(400).json({mensagem:"Preencha todos os campos!"})

    try {
        await prisma.curso.create({
            data:{
                titulo:title,
                descricao:description,
                capa:cape,
                criadorId
            }
        })
        res.status(201).json({mensagem:"Curso criado com sucesso!"})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem:"Erro ao criar curso!"})
    }
}

export const patchCourse = async (req:Request,res:Response)=>{
    const {id} = req.params
    const { title,description, cape} = req.body

    if(!title && !description && !cape) return res.status(400).json({mensagem:"Preencha um campo que pretende atualizar!"})

    try {
        await prisma.curso.update({
            where:{id:Number(id)},
            data:{
                titulo:title,
                descricao:description,
                capa:cape
            }
        })
        res.status(200).json({mensagem:"Curso atualizado com sucesso!"})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem:"Erro ao atualizar curso!"})
    }
}

export const deleteCourse = async (req:Request,res:Response) =>{
    const {id} = req.params

    try {
        await prisma.curso.delete({where:{id:Number(id)}})
        res.end()
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem:"Erro ao deletar curso!"})
    }
}
