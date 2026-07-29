import FormCadastro from "@/components/FormCadastro/FormCadastro";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "LearnFlow - Cadastro"
}


export default function Cadastro(){
    return(
        <Card className="w-[30%] m-auto">
            <CardHeader>
                <CardTitle>Cadastro</CardTitle>
                <CardDescription>Crie sua conta!</CardDescription>
            </CardHeader>
            <CardContent>
                <FormCadastro/>
            </CardContent>
            <CardFooter className="flex justify-center gap-3">
                <p>Já tem uma conta!</p>
                <Link href={'/'} className="text-blue-700 underline">Clique aqui</Link>
            </CardFooter>
        </Card>
    )
}