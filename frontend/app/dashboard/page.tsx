'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { CircleCheckBig, ClipboardCheck, MessageCircleQuestion, MessagesSquare, Newspaper, TriangleAlert, Users } from 'lucide-react'
import { Metadata } from "next"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

// export const metadata: Metadata = {
//     title:"LearnFlow - Dashboard"
// }

export default function Dashboard(){


    const chartData = [
        { month: "January", desktop: 186 },
        { month: "February", desktop: 305 },
        { month: "March", desktop: 237 },
        { month: "April", desktop: 73 },
        { month: "May", desktop: 209 },
        { month: "June", desktop: 214 },
    ]
    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "cyan",
        },
    } satisfies ChartConfig

    
    return(
        <main className="p-5 space-y-3 flex-1">
            <section>
                <h1 className="text-3xl font-bold mb-2">Instructor Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, Professor Davis. Here's what's happening today.</p>
            </section>
            <section className="flex justify-between">
                <Card className="w-[30%]">
                    <CardHeader className="flex justify-between">
                        <h2 className="text-muted-foreground">Total Students</h2>
                        <Users className="text-sky-500"/>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-primary text-2xl">1,248</CardDescription>
                    </CardContent>
                </Card>
                <Card className="w-[30%]">
                    <CardHeader className="flex justify-between">
                        <h2 className="text-muted-foreground">Active Courses</h2>
                        <Newspaper className="text-yellow-500"/>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-primary text-2xl">8</CardDescription>
                    </CardContent>
                </Card>
                <Card className="w-[30%]">
                    <CardHeader className="flex justify-between">
                        <h2 className="text-muted-foreground">Avg. Completion</h2>
                        <CircleCheckBig className="text-emerald-500"/>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-primary text-2xl">76%</CardDescription>
                    </CardContent>
                </Card>
            </section>
            <section className="flex justify-between">
                <Card className="w-[65%]">
                    <CardHeader>
                        <CardTitle className="text-3xl">Student Engagement</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <BarChart data={chartData}>
                                <CartesianGrid vertical={false}/>
                                <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                                />
                                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card className="w-[30%]">
                    <CardHeader>
                        <CardTitle className="text-3xl">Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="border-b">
                            <div className="flex gap-3 items-center p-2">
                                <div className="p-2 bg-sky-700/50 rounded-md">
                                    <ClipboardCheck className="text-sky-500"/>
                                </div>
                                <div className="space-y-1">
                                    <p>Sarah Jenkins submitted <strong>Midterm Project</strong></p>
                                    <p className="text-muted-foreground">10 mins ago • CS101</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b">
                            <div className="flex gap-3 items-center p-2">
                                <div className="p-2 bg-emerald-700/50 rounded-md">
                                    <MessagesSquare className="text-emerald-500"/>
                                </div>
                                <div className="space-y-1">
                                    <p>New discussion post in <strong>Week 3 Ethics</strong></p>
                                    <p className="text-muted-foreground">45 mins ago • PHIL202</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b">
                            <div className="flex gap-3 items-center p-2">
                                <div className="p-2 bg-red-700/50 rounded-md">
                                    <TriangleAlert className="text-red-500"/>
                                </div>
                                <div className="space-y-1">
                                    <p>3 students flagged for low attendance</p>
                                    <p className="text-muted-foreground">2 hours ago • MATH105</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-3 items-center p-2">
                                <div className="p-2 bg-yellow-700/50 rounded-md">
                                    <MessageCircleQuestion className="text-yellow-500"/>
                                </div>
                                <div className="space-y-1">
                                    <p>Quiz 4 auto-grading completed</p>
                                    <p className="text-muted-foreground">5 hours ago • CS101</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </main>
    )
}