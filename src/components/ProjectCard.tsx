"use client"

import { motion } from "framer-motion"
import { CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"

interface Project {
    title: string
    description: string
    link: string
    tech?: string[]
    image?: string
    buildStatus?: string
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
        >
            <motion.div
                className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md transition-shadow duration-300 hover:shadow-[0_15px_40px_rgba(59,130,246,0.4)]"
                onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const x = e.clientX - rect.left
                    const y = e.clientY - rect.top
                    const rotateX = ((y / rect.height) - 0.5) * 10
                    const rotateY = ((x / rect.width) - 0.5) * 10
                    e.currentTarget.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)"
                }}
            >
                {project.image && (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-xl mb-4 w-full h-40 object-cover"
                    />
                )}

                <CardHeader className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                        {project.title}
                        {project.buildStatus && (
                            <motion.img
                                src={project.buildStatus}
                                alt={`${project.title} build status`}
                                className="h-6"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            />
                        )}
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <CardDescription className="text-gray-700 dark:text-gray-300 mb-4">
                        {project.description}
                    </CardDescription>

                    {project.tech && (
                        <motion.div
                            className="flex flex-wrap gap-2 mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {project.tech.map((tech) => (
                                <motion.span
                                    key={tech}
                                    className="text-sm font-medium bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-lg"
                                    whileHover={{ scale: 1.1, rotate: -2 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>
                    )}

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline hover:text-blue-700 dark:hover:text-blue-300"
                    >
                        View Project →
                    </a>
                </CardContent>
            </motion.div>
        </motion.div>
    )
}
