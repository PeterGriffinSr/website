"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { SiOcaml, SiC, SiHaskell, SiVscodium } from "react-icons/si"
import Link from "next/link"

const timeline = [
    {
        year: "2019",
        title: "Started Programming",
        description: "Began learning the fundamentals of coding and exploring different programming languages."
    },
    {
        year: "Late 2019 - 2023",
        title: "Cybersecurity Certifications",
        description: "Completed CCNA and INE Security JPT courses, gaining hands-on experience in networking and cybersecurity."
    },
    {
        year: "2024",
        title: "Built Calyxium",
        description: "Multi-paradigm, memory-safe, monomorphic, strongly typed language with ad-hoc polymorphism.",
        link: "https://github.com/calyxium-lang/calyxium/"
    },
    {
        year: "2025",
        title: "College: Applied Mathematics",
        description: "Pursuing a degree in applied mathematics with a focus on programming, software design, and research."
    },
    {
        year: "2025",
        title: "Started Thale",
        description: "Began building Thale, a small purely functional programming language with immutability and powerful pattern matching.",
        link: "https://github.com/PeterGriffinSr/Thale"
    }
]

const skills = ["Programming Languages", "Type Systems", "Compiler Design", "Functional Programming", "Mathematical Modeling"]

const languages = [
    { name: "C", icon: SiC },
    { name: "Haskell", icon: SiHaskell },
    { name: "OCaml", icon: SiOcaml },
    { name: "VSCodium", icon: SiVscodium }
]

const stats = [
    { label: "Years Coding", value: 5 },
    { label: "Languages Built", value: 2 },
    { label: "Certifications", value: 3 },
]

export function About() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-100px" })
    const [counts, setCounts] = useState(stats.map(() => 0))

    useEffect(() => {
        if (!inView) return
        stats.forEach((stat, idx) => {
            let start = 0
            const end = stat.value
            const duration = 1500
            const stepTime = Math.abs(Math.floor(duration / end))
            const interval = setInterval(() => {
                start += 1
                setCounts((prev) => prev.map((v, i) => (i === idx ? start : v)))
                if (start >= end) clearInterval(interval)
            }, stepTime)
        })
    }, [inView])

    return (
        <motion.section
            id="about"
            className="py-24 px-4 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h2 className="text-5xl font-bold mb-12 text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                About Me
            </motion.h2>

            <motion.p className="text-lg mb-16 leading-relaxed text-center text-gray-800 dark:text-gray-200 max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                Hi! I'm <span className="font-semibold text-blue-500">codezz-ops</span>, a mathematician, developer, and researcher.
                I explore <span className="font-semibold text-blue-500">programming languages</span>, <span className="font-semibold text-blue-500">type systems</span>,
                and build <span className="font-semibold text-blue-500">compilers</span>. Below is a snapshot of my journey.
            </motion.p>

            {/* Timeline */}
            <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-4 mb-16">
                {timeline.map((item, idx) => (
                    <motion.div key={idx} className="mb-10 ml-6 relative" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.2 }}>
                        <span className="absolute -left-6 top-0 w-3 h-3 bg-blue-500 rounded-full border border-white dark:border-gray-900" />
                        <time className="text-sm font-bold text-gray-600 dark:text-gray-400">{item.year}</time>
                        <h3 className="text-xl font-semibold mt-1">
                            {item.title}
                            {item.link && <Link href={item.link} target="_blank" className="ml-2 text-blue-500 hover:underline">↗</Link>}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">{item.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Stats */}
            <div ref={ref} className="flex justify-center gap-12 mb-12">
                {stats.map((stat, idx) => (
                    <motion.div key={stat.label} className="text-center">
                        <p className="text-3xl font-bold text-blue-500">{counts[idx]}+</p>
                        <p className="text-gray-700 dark:text-gray-300">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Skills */}
            <motion.div className="flex flex-wrap justify-center gap-3 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
                {skills.map((skill) => (
                    <motion.span key={skill} className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-4 py-2 rounded-full font-medium text-sm" whileHover={{ scale: 1.1, rotate: -2 }}>
                        {skill}
                    </motion.span>
                ))}
            </motion.div>

            {/* Languages */}
            <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6">Languages & Tools</h3>
                <motion.div className="flex flex-wrap justify-center gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
                    {languages.map((lang) => {
                        const Icon = lang.icon
                        return (
                            <motion.div key={lang.name} className="flex flex-col items-center gap-1" whileHover={{ scale: 1.1, y: -3 }}>
                                <Icon className="text-4xl text-blue-500" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">{lang.name}</span>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </motion.section>
    )
}
