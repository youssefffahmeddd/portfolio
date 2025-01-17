import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  { name: "Python", level: 90, color: "bg-blue-500" },
  { name: "SQL", level: 95, color: "bg-black" },
  { name: "JavaScript", level: 80, color: "bg-blue-600" },
  { name: "CSS", level: 85, color: "bg-green-600" },
  { name: "HTML", level: 85, color: "bg-yellow-500" },
  { name: "Machine Learning", level: 85, color: "bg-orange-500" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle>{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div className={`h-2.5 rounded-full ${skill.color}`} style={{ width: `${skill.level}%` }}></div>
                </div>
                <p className="text-sm text-gray-600">{skill.level}% Proficiency</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

