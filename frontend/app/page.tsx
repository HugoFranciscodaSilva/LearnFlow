import FormLogin from "@/components/FormLogin/FormLogin";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <Card className="w-[30%] m-auto">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Acesse sua conta!</CardDescription>
      </CardHeader>
      <CardContent>
        <FormLogin/>
      </CardContent>
      <CardFooter className="flex gap-3 justify-center">
        <p>Não tem conta ainda?</p>
        <Link href={'/cadastro'} className="text-blue-700 underline">Clique Aqui!</Link>
      </CardFooter>
    </Card>
  )
}
