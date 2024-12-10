import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  const experienceData = [
    {
      title: "Full Stack Developer",
      company: "Blackbuck Engineers Pvt. Ltd.",
      duration: "Jun 2024 – Jul 2024",
      location: "Remote Internship",
      responsibilities: [
        "Built a URL shortener with Django for efficient URL management.",
        "Deployed on Vercel, for server setup, monitoring, and scaling.",
        "Added JWT for secure user access and managed data with MySQL.",
      ],
    },
    {
      title: "Java Developer",
      company: "Henotic Technologies",
      duration: "Jul 2023 – Sep 2023",
      location: "Remote Internship",
      responsibilities: [
        "Developed a bank management system in Java with secure server-side logic, using basic getters and setters for core functionality.",
        "Ensured system reliability through thorough testing and debugging.",
        "Utilized Eclipse and IntelliJ, following Agile practices for organized project management and development.",
      ],
    },
  ]
  
  export default function Experience() {
    return (
      <section id="experience" className="flex-shrink-0 w-screen h-screen flex flex-col items-center justify-center snap-start bg-gradient-to-r from-indigo-900 via-purple-900 to-black">
        <h2 className="mb-8 text-4xl font-bold">Experience</h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl">
          {experienceData.map((exp, index) => (
            <Card key={index} className="bg-black/50 backdrop-blur-md">
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>{exp.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{exp.duration}</p>
                <p>{exp.location}</p>
                <ul className="mt-2 list-inside list-disc">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    )
  }
  
  