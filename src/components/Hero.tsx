"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const TITLES = ["Codezz-ops", "Mathematician", "Developer", "Researcher"]
const TYPING_SPEED = 100
const DELETING_SPEED = 50
const PAUSE_TIME = 3000

export function Hero() {
    const [index, setIndex] = useState(0)
    const [text, setText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const fullText = index === 0 ? TITLES[index] : `a ${TITLES[index]}`
        let timeout: NodeJS.Timeout

        if (!isDeleting) {
            if (text.length < fullText.length) {
                timeout = setTimeout(() => setText(fullText.slice(0, text.length + 1)), TYPING_SPEED)
            } else {
                timeout = setTimeout(() => setIsDeleting(true), PAUSE_TIME)
            }
        } else {
            if (text.length > 0) {
                timeout = setTimeout(() => setText(text.slice(0, -1)), DELETING_SPEED)
            } else {
                setIsDeleting(false)
                setIndex((i) => (i + 1) % TITLES.length)
            }
        }

        return () => clearTimeout(timeout)
    }, [text, isDeleting, index])

    const renderText = () => {
        if (index === 0) return <span className="text-blue-500">{text}</span>
        const prefix = text.startsWith("a ") ? "a " : ""
        const suffix = text.slice(prefix.length)
        return (
            <>
                <span className="text-white">{prefix}</span>
                <span className="text-blue-500">{suffix}</span>
            </>
        )
    }

    return (
        <section
            id="hero"
            className="flex min-h-screen flex-col items-center justify-center text-center px-4"
        >
            <motion.h1
                className="text-6xl sm:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Hi, I&apos;m {renderText()}
                <span className="text-blue-500 blinking-cursor" aria-hidden="true">|</span>
            </motion.h1>

            <motion.p
                className="text-xl sm:text-2xl max-w-2xl mb-10 leading-relaxed text-gray-800 dark:text-gray-200"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                I research <span className="font-semibold text-blue-500">programming languages</span>,
                design <span className="font-semibold text-blue-500">type systems</span>,
                and build <span className="font-semibold text-blue-500">compilers</span>.
            </motion.p>

            <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                <a
                    href="#projects"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all font-semibold shadow-md"
                >
                    See My Work
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all font-semibold shadow-md"
                >
                    Contact Me
                </a>
            </motion.div>

            <style jsx>{`
                .blinking-cursor {
                    display: inline-block;
                    width: 1ch;
                    animation: blink 1s steps(2, start) infinite;
                }
                @keyframes blink {
                    to {
                        visibility: hidden;
                    }
                }
            `}</style>
        </section>
    )
}
