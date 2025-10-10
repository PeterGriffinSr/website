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
            transition={{ duration: 0.6, delay: index * 0.15 }}
        >
            <motion.div
                className="relative bg-gradient-to-br from-white/90 to-blue-50/40 dark:from-gray-800/90 dark:to-gray-900/60 
                   backdrop-blur-xl border border-white/20 dark:border-gray-700 
                   rounded-2xl p-6 shadow-lg transition-all duration-500 
                   hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)] hover:-translate-y-2 
                   dark:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                onMouseMove={(e) => {
                    if (window.innerWidth < 768) return // disable 3D effect on mobile
                    const rect = e.currentTarget.getBoundingClientRect()
                    const x = e.clientX - rect.left
                    const y = e.clientY - rect.top
                    const rotateX = ((y / rect.height) - 0.5) * 8
                    const rotateY = ((x / rect.width) - 0.5) * 8
                    e.currentTarget.style.transform = `perspective(700px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)"
                }}
            >
                {project.image && (
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="rounded-xl mb-4 w-full h-40 object-cover shadow-sm"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                    />
                )}

                <CardHeader className="flex items-center justify-between mb-2">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
                            {project.title}
                            {project.buildStatus && (
                                <motion.img
                                    src={project.buildStatus}
                                    alt={`${project.title} build status`}
                                    className="h-6"
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                />
                            )}
                        </CardTitle>
                    </motion.div>
                </CardHeader>

                <CardContent>
                    <CardDescription className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                        {project.description}
                    </CardDescription>

                    {project.tech && (
                        <motion.div
                            className="flex flex-wrap gap-2 mb-5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {project.tech.map((tech) => (
                                <motion.span
                                    key={tech}
                                    className="text-sm font-medium px-3 py-1.5 rounded-full 
                             bg-gradient-to-r from-blue-600 to-indigo-600 
                             text-white shadow-sm hover:shadow-blue-500/30 
                             transition-all duration-300"
                                    whileHover={{ scale: 1.08, rotate: -1 }}
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
                        aria-label={`View ${project.title} project`}
                        className="inline-block mt-2 font-semibold text-blue-600 dark:text-blue-400 relative 
                       after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                       after:bg-blue-500 after:transition-all after:duration-300 
                       hover:after:w-full hover:text-blue-700 dark:hover:text-blue-300"
                    >
                        View Project →
                    </a>
                </CardContent>
            </motion.div>
        </motion.div>
    )
}
