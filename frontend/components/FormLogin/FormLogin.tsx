'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";
import { LoginProps, LoginSchema } from "@/schemas/UserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Cookies from 'js-cookie'
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function FormLogin(){

    const SearchParams = useSearchParams()
    const errorTypes = SearchParams.get('error')

    useEffect(()=>{
        if(errorTypes === "unauthorized"){
            alert("Você precisa logar!")
            window.history.replaceState({},'','/')
        }
    },[errorTypes])
    

    const router = useRouter()
    const queryClient = useQueryClient()

    const {register,reset,formState:{errors},handleSubmit} = useForm<LoginSchema>({resolver:zodResolver(LoginProps)})

    async function Logar(data:LoginSchema){
        const res = await axios.post(`${API_URL}/auth/login`,data)
        return res.data
    }

    const {mutate,isPending} = useMutation({
        mutationFn:Logar,
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:['users']})
            reset()
            alert("Login efetuado com sucesso!")
            const umaHora = new Date(new Date().getTime() + 60 * 60 * 1000)
            Cookies.set('token',data.token,{expires: umaHora})
            router.push('/dashboard')
        },
        onError:(error)=>{
            console.log(error)
        }
    })

    function Submit(data:LoginSchema){
        mutate(data)
    }

    return(
        <form onSubmit={handleSubmit(Submit)}>
            <div>
                <Label htmlFor="email">Email:</Label>
                <Input {...register('email')} type="email" id="email" placeholder="exemplo@exemplo.com"/>
                {errors?.email && <span>{errors.email.message}</span>}
            </div>
            <div>
                <Label htmlFor="senha">Senha:</Label>
                <Input {...register('password')} type="password" id="senha" placeholder="..........."/>
                {errors?.password && <span>{errors.password.message}</span>}
            </div>
            <Button type="submit" className="w-full">{isPending ? 'Entrando...' : 'Entrar'}</Button>
        </form>
    )
}