"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", vues: 180000, engagement: 12000 },
  { name: "Fév", vues: 220000, engagement: 15000 },
  { name: "Mar", vues: 280000, engagement: 18000 },
  { name: "Avr", vues: 320000, engagement: 22000 },
  { name: "Mai", vues: 380000, engagement: 28000 },
  { name: "Jun", vues: 420000, engagement: 32000 },
  { name: "Jul", vues: 480000, engagement: 38000 },
]

export function AnalyticsChart() {
  return (
    <Card className="border-0 shadow-md">
      <CardHeader>
        <CardTitle>Analytics des 7 derniers mois</CardTitle>
        <CardDescription>Évolution des vues et de l'engagement sur vos contenus</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="vues" stroke="hsl(var(--primary))" strokeWidth={3} name="Vues" />
            <Line
              type="monotone"
              dataKey="engagement"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth={2}
              name="Engagement"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
