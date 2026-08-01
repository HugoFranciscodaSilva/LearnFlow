'use client'

import { BookOpenText, ChartNoAxesColumn, GraduationCap, LayoutDashboard, LogOut, Settings, UsersRound } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import Link from "next/link";
import { useState } from "react";


interface LayoutProps{
    children: React.ReactNode
}

export function LayoutNav({children}:LayoutProps){
    return(
        <SidebarProvider>
            <Navbar/>
            {children}
        </SidebarProvider>
    )
}

export function Navbar(){

    const [aberto,setAberto] = useState<boolean>(false)

    return(
        <Sidebar collapsible="icon">
            <SidebarHeader className="flex flex-row items-center justify-between">
                {aberto && <div className="flex gap-2 items-center">
                    <GraduationCap/>
                    <h2 className="text-3xl font-bold">LearnFlow</h2>
                </div>}
                <SidebarTrigger onClick={()=> setAberto(!aberto)}/>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <Link href={'/dashboard'} className="flex gap-2">
                                <LayoutDashboard/>
                                Dashboard
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <Link href={'/cursos'} className="flex gap-2">    
                                <BookOpenText/>
                                Courses
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <Link href={'/estudantes'} className="flex gap-2">    
                                <UsersRound/>
                                Students
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <Link href={'/?'} className="flex gap-2">
                                <ChartNoAxesColumn/>
                                Analytics
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <Link href={'/config'} className="flex gap-2">    
                                <Settings/>
                                Settings
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenuButton>
                    <LogOut/>
                    Fazer logout
                </SidebarMenuButton>
            </SidebarFooter>
        </Sidebar>
    )
}