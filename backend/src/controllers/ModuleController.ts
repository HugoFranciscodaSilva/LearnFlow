import type { Request, Response} from 'express'
import prisma from '../lib/prisma.js'

export const getModule = async (req:Request,res:Response) =>{
    const { id } = req.params
    
    try {
        const module = await prisma.modulo.findFirst({where:{id:Number(id)}})
        res.status(200).json(module)
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem:"Erro ao listar modulo!"})
    }
}

export const getModules = async (req:Request,res:Response) =>{
    try {
        const modules = await prisma.modulo.findMany()
        res.status(200).json(modules)
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem:"Erro ao listar modulos!"})
    }
}

export const postModule = async (req:Request,res:Response) => {
    const { name,curse} = req.body
    
    if(!name || !curse) return res.status(400).json({mensagem:"Preencha todos os campos!"})

    try {
        await prisma.modulo.create({
            data:{
                nome:name,
                cursoId:curse
            }
        })
        res.status(201).json({mensagem:"Modulo Criado com sucesso!"})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem:"Erro ao criar modulo!"})
    }
}

export const patchModule = async (req:Request,res:Response) =>{
    const { id } = req.params

    const { name,curse } = req.body
    
    if(!name && !curse) return res.status(400).json({mensagem:"Preencha o campo que deseja atualizar!"})
        
    try {
        await prisma.modulo.update({
            where:{id:Number(id)},
            data:{
                nome:name,
                cursoId:curse
            }
        })
        res.status(200).json({mensagem:"Modulo atualizado com sucesso!"})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem:"Erro ao atualizar modulo!"})
    }
}

export const deleteModule = async (req:Request,res:Response) =>{
    const { id } = req.params

    try {
        await prisma.modulo.delete({where:{id:Number(id)}})
        res.end()
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem:"Erro ao deletar modulo!"})
    }
}
