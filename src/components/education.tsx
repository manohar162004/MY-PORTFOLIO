import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  const educationData = [
    {
      degree: "Computer Science Engineering",
      institution: "SRKR Engineering College",
      duration: "Nov 2021 – Mar 2025",
      grade: "CGPA: 8.54*",
      location: "Bhimavaram, Andhra Pradesh",
    },
    {
      degree: "Intermediate",
      institution: "Tirumala Junior College",
      duration: "Jul 2019 – Aug 2021",
      grade: "Percentage: 97.4",
      location: "Rajahmundry, Andhra Pradesh",
    },
    {
      degree: "10th",
      institution: "Bhashyam Public School",
      duration: "2019",
      grade: "CGPA: 10",
      location: "Vizianagaram, Andhra Pradesh",
    },
  ]
  
  export default function Education() {
    return (
      <section id="education" className="flex-shrink-0 w-screen h-screen flex flex-col items-center justify-center snap-start bg-gradient-to-r from-black via-purple-900 to-indigo-900">
        <h2 className="mb-8 text-4xl font-bold">Education</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
          {educationData.map((edu, index) => (
            <Card key={index} className="bg-black/50 backdrop-blur-md">
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
                <CardDescription>{edu.institution}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{edu.duration}</p>
                <p>{edu.grade}</p>
                <p>{edu.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    )
  }
  
  