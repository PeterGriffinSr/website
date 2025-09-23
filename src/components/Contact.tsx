"use client"

import { motion } from "framer-motion"
import { FaGithub, FaDiscord, FaEnvelope } from "react-icons/fa"

export function Contact() {
    return (
        <motion.section
            id="contact"
            className="py-20 px-4 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-5xl font-bold mb-6 text-center">Contact Me</h2>
            <p className="text-lg mb-12 text-gray-800 dark:text-gray-200 text-center">
                I&apos;m always open to collaborating on projects, discussing research, or just chatting about programming and math.
            </p>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Contact Form */}
                <motion.form
                    action="https://formspree.io/f/movkqdzz"
                    method="POST"
                    className="flex-1 flex flex-col gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="px-4 py-3 border rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="px-4 py-3 border rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        required
                        className="px-4 py-3 border rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                    ></textarea>
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold mt-2"
                    >
                        Send Message
                    </motion.button>
                </motion.form>

                {/* Contact Info + Socials */}
                <motion.div
                    className="flex-1 flex flex-col justify-center gap-6 text-center lg:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-lg text-gray-800 dark:text-gray-200">
                        Prefer direct contact? Reach me at:
                    </p>
                    <a href="mailto:publicfacing.twirl843@passfwd.com" className="text-blue-500 hover:underline text-lg flex items-center justify-center lg:justify-start gap-2">
                        <FaEnvelope /> contact@codezz-ops.github.io
                    </a>
                    <p className="text-lg text-gray-800 dark:text-gray-200">Connect with me:</p>
                    <div className="flex justify-center lg:justify-start gap-4 text-2xl text-gray-700 dark:text-gray-300">
                        <a href="https://github.com/PeterGriffinSr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                            <FaGithub />
                        </a>
                        <a href="https://discord.gg/b5BwCuBfxM" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                            <FaDiscord />
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}
