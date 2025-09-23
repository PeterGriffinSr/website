"use client"

import { Hero } from "@/components/Hero"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ProjectCard"
import { About } from "@/components/About"
import { Contact } from "@/components/Contact"

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Hero />
      <About />
      <section id="projects" className="py-20 px-4 container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </section>
      <Contact />
      <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-center py-6 mt-auto">
        © {new Date().getFullYear()} Codezz-ops. All rights reserved.
      </footer>
    </main>
  )
}
