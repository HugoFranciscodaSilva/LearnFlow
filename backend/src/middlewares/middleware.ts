import type { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'

interface RequestExtends extends Request{
    user?:any
}

const SECRET_JWT = process.env.SECRET_JWT || ""


export const login = async (req:RequestExtends,res:Response,next:NextFunction) =>{
    const authHeader = req.headers.authorization

    if(!authHeader) return res.status(401).json({mensagem:"Token não fornecido!"})


    const [ token,schema ] = authHeader.split(' ')

    if(!token || schema !== "Bearer") return res.status(401).json({mensagem:"Token mal formatado!"})
    
    try {
        const decode = jwt.verify(token,SECRET_JWT)
        req.user = decode
        return next()
    } catch (error) {
        res.status(401).json({mensagem:"Token invalido ou expirado!"})
    }
}

export const verifyInstructor = async (req:RequestExtends,res:Response,next:NextFunction) =>{
    if(req.user.role !== "Instrutor") return res.status(400).json({mensagem:"Apenas intrutor pode fazer essa ação!"})

    return next()
}