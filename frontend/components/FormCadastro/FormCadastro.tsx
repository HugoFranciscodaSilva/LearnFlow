'use client'

import { UsuarioProps, UsuarioSchema } from "@/schemas/UserSchema"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useForm } from 'react-hook-form'
import axios from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { zodResolver } from "@hookform/resolvers/zod"
import 'dotenv/config'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function FormCadastro(){
    const {register,reset,formState:{errors},handleSubmit} = useForm<UsuarioSchema>({resolver:zodResolver(UsuarioProps)})

    async function CriarUsuario(data:UsuarioSchema){
        const res = await axios.post(`${API_URL}/users`,data)
        return res.data
    }

    const queryClient = useQueryClient()
    const {mutate,isPending} = useMutation({
        mutationFn:CriarUsuario,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['users']})
            reset()
            alert("Conta criada com sucesso!")
        },
        onError:(error)=>{
            console.log(error)
        }
    })
    function Submit(data:UsuarioSchema){
        mutate(data)
    }
    return(
        <form onSubmit={handleSubmit(Submit)}>
            <div>
                <Label htmlFor="nome">Nome:</Label>
                <Input {...register('name')} id="nome" type="text" placeholder="Seu nome"/>
                {errors?.name && <span>{errors.name.message}</span>}
            </div>
            <div>
                <Label htmlFor="email">Email:</Label>
                <Input {...register('email')} id="email" type="email" placeholder="exemplo@exemplo.com"/>
                {errors?.email && <span>{errors.email.message}</span>}
            </div>
            <div>
                <Label htmlFor="senha">Senha:</Label>
                <Input {...register('password')} id="senha" type="password" placeholder="......."/>
                {errors?.password && <span>{errors.password.message}</span>}
            </div>
            <Button type="submit" className="w-full">{isPending ? 'Criando...' : 'Criar Conta'}</Button>
        </form>
    )
}