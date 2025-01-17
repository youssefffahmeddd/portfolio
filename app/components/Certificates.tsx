import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const certificates = [
  { name: "Data Scientist in Python", issuer: "Dataquest.io", year: 2024, badge: "Professional", color: "bg-orange-500" },
  { name: "Data Analyst in Python", issuer: "Dataquest.io", year: 2024, badge: "Professional", color: "bg-blue-500" },
  { name: "Business Analyst with Tableau", issuer: "Dataquest.io", year: 2024, badge: "Expert", color: "bg-blue-600" },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <Card key={cert.name} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader className={`${cert.color} text-white`}>
                <CardTitle className="flex justify-between items-start">
                  {cert.name}
                  <Badge variant="secondary" className="bg-white text-gray-900">{cert.badge}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-4">
                <p className="text-gray-600">{cert.issuer}</p>
                <p className="mt-2 text-sm text-gray-500">Obtained: {cert.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

