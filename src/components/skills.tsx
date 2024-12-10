import { Badge } from "@/components/ui/badge"

const skills = [
  "Java", "Python", "JavaScript", "Next.js", "Django", "React", "Node.js", "MySQL",
  "Git", "Eclipse", "IntelliJ IDEA", "Vercel", "Problem-solving", "Team collaboration", "Agile methodology",
]

export default function Skills() {
  return (
    <section id="skills" className="flex-shrink-0 w-screen h-screen flex flex-col items-center justify-center snap-start bg-gradient-to-r from-indigo-900 via-purple-900 to-black">
      <h2 className="mb-8 text-4xl font-bold">Technical Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="text-lg font-semibold hover:bg-primary hover:text-primary-foreground"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}

