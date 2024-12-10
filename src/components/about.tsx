import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="flex-shrink-0 w-screen h-screen flex flex-col items-center justify-center snap-start bg-gradient-to-r from-black via-purple-900 to-indigo-900">
      <h2 className="mb-8 text-4xl font-bold">About Me</h2>
      <Card className="bg-black/50 backdrop-blur-md max-w-2xl">
        <CardHeader>
          <CardTitle>Career Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Seeking an opportunity from an organisation renowned for its
            structured approach in solving complicated real-time problems
            where I can immerse myself in learning, working and leveraging my
            technical prowess.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

