import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  const projectsData = [
    {
      title: "ShopEasy: E-Commerce Platform",
      technologies: "Next.js, Node.js, Express, MongoDB",
      description:
        "Designed a responsive e-commerce website with features like product browsing, cart management, and secure payment integration. Integrated a user dashboard to track orders and manage profiles seamlessly.",
    },
    {
      title: "ChatZone: Real-Time Messaging Application",
      technologies: "React, Node.js, WebSocket, MongoDB",
      description:
        "Built a real-time chat application supporting private and group chats with robust authentication. Enabled message persistence for enhanced user experience, and ensured scalability through efficient WebSocket management.",
    },
  ]
  
  export default function Projects() {
    return (
      <section id="projects" className="flex-shrink-0 w-screen h-screen flex flex-col items-center justify-center snap-start bg-gradient-to-r from-black via-purple-900 to-indigo-900">
        <h2 className="mb-8 text-4xl font-bold">Personal Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl">
          {projectsData.map((project, index) => (
            <Card key={index} className="bg-black/50 backdrop-blur-md">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.technologies}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    )
  }
  
  