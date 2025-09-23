"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const titles = ["Codezz-ops", "Mathematician", "Developer", "Researcher"]
const typingSpeed = 100
const deletingSpeed = 50
const pauseTime = 3500

export function Hero() {
    const [currentTitle, setCurrentTitle] = useState(0)
    const [displayText, setDisplayText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        let timer: NodeJS.Timeout
        const currentFullTitle = currentTitle === 0 ? titles[currentTitle] : `a ${titles[currentTitle]}`

        if (!isDeleting) {
            if (displayText.length < currentFullTitle.length) {
                timer = setTimeout(() => {
                    setDisplayText(currentFullTitle.slice(0, displayText.length + 1))
                }, typingSpeed)
            } else {
                timer = setTimeout(() => setIsDeleting(true), pauseTime)
            }
        } else {
            if (displayText.length > 0) {
                timer = setTimeout(() => {
                    setDisplayText(displayText.slice(0, displayText.length - 1))
                }, deletingSpeed)
            } else {
                setIsDeleting(false)
                setCurrentTitle((prev) => (prev + 1) % titles.length)
            }
        }

        return () => clearTimeout(timer)
    }, [displayText, isDeleting, currentTitle])

    const renderText = () => {
        if (currentTitle === 0) return <span className="text-blue-500">{displayText}</span>
        const aPart = displayText.startsWith("a ") ? "a " : ""
        const rest = displayText.slice(aPart.length)
        return (
            <>
                <span className="text-white">{aPart}</span>
                <span className="text-blue-500">{rest}</span>
            </>
        )
    }

    return (
        <section className="flex min-h-screen flex-col items-center justify-center text-center px-4">
            <motion.h1
                className="text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Hi, I&apos;m {renderText()}
                <span className="text-blue-500 blinking-cursor">|</span>
            </motion.h1>

            <motion.p
                className="text-xl max-w-xl mb-8 leading-relaxed text-gray-800 dark:text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                I research <span className="font-semibold text-blue-500">programming languages</span>, design{" "}
                <span className="font-semibold text-blue-500">type systems</span>, and build{" "}
                <span className="font-semibold text-blue-500">compilers</span>.
            </motion.p>

            <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                <a
                    href="#projects"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    See My Work
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
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
