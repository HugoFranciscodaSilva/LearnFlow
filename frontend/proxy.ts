import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req:NextRequest){
    const token = req.cookies.get('token')?.value

    const { pathname } = req.nextUrl

    if(pathname.startsWith('/dashboard')){
        if(!token){
            return NextResponse.redirect(new URL('/?error=unauthorized',req.url))
        }
    }

    if(pathname === '/' || pathname.startsWith('/cadastro')){
        if(token){
            return NextResponse.redirect(new URL('/dashboard',req.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher:['/','/cadastro','/dashboard']
}