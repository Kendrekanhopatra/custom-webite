import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Kendre Kanhopatra</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#about"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex flex-col items-center gap-4 text-center">
            <Link href="#projects" className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
              View My Projects
            </Link>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Hi, I&apos;m Kendre Kanhopatra</h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              I&apos;m a full-stack developer with expertise in building modern web applications. I specialize in React,
              Next.js, and creating beautiful user interfaces.
            </p>
            <div className="space-x-4">
              <Button asChild>
                <Link href="#contact" className="gap-1">
                  Contact Me <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#about">About Me</Link>
              </Button>
            </div>
          </div>
        </section>
        <section id="about" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">About Me</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              I&apos;m a passionate developer with over 5 years of experience in web development. My journey in tech
              began when I built my first website in college, and I&apos;ve been hooked ever since.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">Education</h3>
                  <p className="text-sm text-muted-foreground">
                    Bachelor&apos;s in Computer Science
                    <br />
                    University of Technology, 2018
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">Skills</h3>
                  <p className="text-sm text-muted-foreground">
                    JavaScript, TypeScript, React, Next.js, Node.js, TailwindCSS, SQL, MongoDB
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    Senior Developer at TechCorp
                    <br />
                    Frontend Lead at WebSolutions
                    <br />
                    Freelance Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Projects</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Here are some of my recent projects. Each one represents a unique challenge and solution.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-featured online store with payment processing, inventory management, and analytics dashboard."
              technologies={["Next.js", "Stripe", "MongoDB"]}
              imageUrl="/placeholder.svg?height=300&width=400"
              demoUrl="https://example.com"
              githubUrl="https://github.com"
            />
            <ProjectCard
              title="Social Media Dashboard"
              description="An analytics dashboard for social media managers to track engagement and growth across platforms."
              technologies={["React", "D3.js", "Firebase"]}
              imageUrl="/placeholder.svg?height=300&width=400"
              demoUrl="https://example.com"
              githubUrl="https://github.com"
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task management tool with real-time updates, file sharing, and team communication."
              technologies={["TypeScript", "Socket.io", "PostgreSQL"]}
              imageUrl="/placeholder.svg?height=300&width=400"
              demoUrl="https://example.com"
              githubUrl="https://github.com"
            />
            <ProjectCard
              title="Weather Application"
              description="A weather forecasting app with location detection, historical data, and customizable alerts."
              technologies={["React Native", "OpenWeather API", "Redux"]}
              imageUrl="/placeholder.svg?height=300&width=400"
              demoUrl="https://example.com"
              githubUrl="https://github.com"
            />
            <ProjectCard
              title="Portfolio Generator"
              description="A tool for developers to create and deploy professional portfolios with minimal configuration."
              technologies={["Next.js", "Tailwind CSS", "Vercel"]}
              imageUrl="/placeholder.svg?height=300&width=400"
              demoUrl="https://example.com"
              githubUrl="https://github.com"
            />
            <ProjectCard
              title="Recipe Finder"
              description="A recipe search engine with filtering by ingredients, dietary restrictions, and cooking time."
              technologies={["Vue.js", "Node.js", "MongoDB"]}
              imageUrl="/placeholder.svg?height=300&width=400"
              demoUrl="https://example.com"
              githubUrl="https://github.com"
            />
          </div>
        </section>
        <section id="contact" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Contact Me</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem]">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-full flex-col justify-between rounded-md p-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-xl">Get in Touch</h3>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">kendre@example.com</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Twitter className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">@kendrekanhopatra</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">linkedin.com/in/kendrekanhopatra</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-full flex-col justify-between rounded-md p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Kendre Kanhopatra. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
