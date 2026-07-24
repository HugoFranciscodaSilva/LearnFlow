import type { Request, Response, NextFunction } from "express"

interface RequestExtends extends Request{
    user?:any
}

export const login = async (req:RequestExtends,res:Response,next:NextFunction) =>{
    const authHeader = req.headers.authorization

    if(!authHeader) return res.status(400).json({mensagem:"Precisa estar logado para fazer está ação!"})


    const [ token,bearer ] = authHeader.split(' ')

    if(!token || !bearer) return res.status(400).json({mensagem:"Token mal formatado!"})

    req.user = token
    return next
}

export const verifyInstructor = async (req:RequestExtends,res:Response,next:NextFunction) =>{
    if(req.user.role !== "Instrutor") return res.status(400).json({mensagem:"Apenas intrutor pode fazer essa ação!"})

    return next
}