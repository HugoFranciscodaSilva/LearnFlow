import z from "zod";

export const UsuarioProps = z.object({
    name:z.string().min(3,"Insira ao menos 3 caracteres!"),
    email:z.email("Insira um email válido!"),
    password:z.string().min(3,"Insira ao menos 3 caracteres!")
})

export type UsuarioSchema = z.infer<typeof UsuarioProps>

export const LoginProps = z.object({
    email:z.email("Insira um email válido!"),
    password:z.string().min(3,"Insira ao menos 3 caracteres!")
})

export type LoginSchema = z.infer<typeof LoginProps>