import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    name: "Exploring Financial Data Using Nasdaq",
    description: "Analyze the financial trend of ‘accrued expenses turnover’ over a period for various companies, particularly banks.",
    technologies: ["Python", "Pandas", "Matplotlib"],
    github: "https://github.com/youssefffahmeddd/Projects/blob/main/Exploring%20Financial%20Data%20using%20Nasdaq%20Data%20Link%20API/Exploring%20Financial%20Data.ipynb",
    live: "https://ecommerce-platform-demo.vercel.app",
    color: "bg-green-500",
  },
  {
    name: "Star Wars Survey Analysis",
    description: "While waiting for Star Wars: The Force Awakens to come out, the team at FiveThirtyEight became interested in answering some questions about Star Wars fans. In particular, they wondered: does the rest of America realize that The Empire Strikes Back is clearly the best in the series?",
    technologies: ["Python", "Pandas", "Numpy", "Matplotlib", "Data Visualization"],
    github: "https://github.com/youssefffahmeddd/Projects/blob/main/Star%20Wars%20Survey/Star%20Wars%20Survey.ipynb",
    live: "https://climate-dashboard-demo.vercel.app",
    color: "bg-blue-500",
  },
  {
    name: "Investigating Fandango Movie Ratings",
    description: "In October 2015, a data journalist named Walt Hickey analyzed movie ratings data and found strong evidence to suggest that Fandango's rating system was biased and dishonest, he found out that the actual rating was almost always rounded up to the nearest star (4.1 is rounded up to 4.5), fandango officials replied that this rounding up was caused by a bug.",
    technologies: ["Python", "Pandas", "Matplotlib", "Data Visualiztion"],
    github: "https://github.com/youssefffahmeddd/Projects/blob/main/Investigating%20Fandango%20Movie%20Ratings/Investigating%20Fandango%20Movie%20Ratings.ipynb",
    live: "https://defi-app-demo.vercel.app",
    color: "bg-purple-500",
  },
  {
    name: "Predicting Heart Disease",
    description: "Predict Heart Disease using ML and evaluate the performance of the model.",
    technologies: ["Python", "Pandas", "Matplotlib", "Scikit Learn", "SVC"],
    github: "https://github.com/youssefffahmeddd/Projects/blob/main/Predicting%20Heart%20Disease/Predicting%20Heart%20Disease.ipynb",
    live: "https://defi-app-demo.vercel.app",
    color: "bg-purple-500",
  },
  {
    name: "Covid-19 Death Toll",
    description: "Using Story Telling Data Visualization Find the Average Number of Daily Deaths Per Month in The Top Country.",
    technologies: ["Python", "Pandas", "Matplotlib", "Numpy"],
    github: "https://github.com/youssefffahmeddd/Projects/blob/main/Covid-19%20Death%20Toll/Covid-19%20Death%20Toll.ipynb",
    live: "https://defi-app-demo.vercel.app",
    color: "bg-green-500",
  },
  {
    name: "Predicting Insurance Cost",
    description: "Build a ML Model to Predict the Insurance Cost for Customers.",
    technologies: ["Python", "Pandas", "Seaborn", "Scikit Learn", "Gradient Boosting", "Linear Regression"],
    github: "https://github.com/youssefffahmeddd/Projects/blob/main/Predicting%20Insurance%20Cost/Predicting%20Insurance%20Cost.ipynb",
    live: "https://defi-app-demo.vercel.app",
    color: "bg-blue-500",
  },
  {
    name: "Predicting Customer Churn",
    description: "Build a ML model to predict customer churn, and create a dashboard using Power BI.",
    technologies: ["Python", "Pandas", "Power BI", "Scikit Learn", "Random Forest Classifier", "Data Visualization"],
    github: "https://github.com/youssefffahmeddd/Projects/tree/main/Customer%20Churn",
    live: "https://defi-app-demo.vercel.app",
    color: "bg-blue-500",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.name} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className={`${project.color} text-white`}>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-4">
                <CardDescription className="text-gray-600 mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between bg-gray-50">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

