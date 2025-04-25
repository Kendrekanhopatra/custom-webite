import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  demoUrl: string
  githubUrl: string
}

export function ProjectCard({ title, description, technologies, imageUrl, demoUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={githubUrl} target="_blank" rel="noreferrer" className="gap-1">
            <Github className="h-4 w-4" /> Code
          </Link>
        </Button>
        <Button size="sm" asChild>
          <Link href={demoUrl} target="_blank" rel="noreferrer" className="gap-1">
            <ExternalLink className="h-4 w-4" /> Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
