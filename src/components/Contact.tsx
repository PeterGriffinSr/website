"use client"

import { motion } from "framer-motion"
import { FaGithub, FaDiscord, FaEnvelope } from "react-icons/fa"

export function Contact() {
    return (
        <motion.section
            id="contact"
            className="py-24 px-6 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.h2
                className="text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Contact Me
            </motion.h2>

            <motion.p
                className="text-lg mb-16 text-gray-700 dark:text-gray-300 text-center max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                I’m always open to collaborating on projects, discussing research,
                or just chatting about programming and math.
            </motion.p>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Contact Form */}
                <motion.form
                    action="https://formspree.io/f/movkqdzz"
                    method="POST"
                    className="flex-1 flex flex-col gap-4 bg-gradient-to-br from-white/90 to-blue-50/40 dark:from-gray-800/90 dark:to-gray-900/60 
                               backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl p-8 shadow-lg 
                               transition-all duration-500 hover:shadow-[0_15px_40px_rgba(59,130,246,0.25)]"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 
                                   text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        whileFocus={{ scale: 1.01 }}
                    />
                    <motion.input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 
                                   text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        whileFocus={{ scale: 1.01 }}
                    />
                    <motion.textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        required
                        className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 
                                   text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        whileFocus={{ scale: 1.01 }}
                    />

                    <motion.button
                        type="submit"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 0px 20px rgba(59,130,246,0.5)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg 
                                   font-semibold shadow-md transition-all duration-300 hover:from-blue-700 hover:to-indigo-700"
                    >
                        Send Message 🚀
                    </motion.button>
                </motion.form>

                {/* Contact Info + Socials */}
                <motion.div
                    className="flex-1 flex flex-col justify-center gap-6 text-center lg:text-left 
                               bg-gradient-to-br from-blue-50/30 to-white/10 dark:from-gray-800/50 dark:to-gray-900/40 
                               border border-white/10 dark:border-gray-700 rounded-2xl p-8 shadow-md backdrop-blur-xl"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-lg text-gray-700 dark:text-gray-200">
                        Prefer direct contact? Reach me at:
                    </p>

                    <a
                        href="mailto:publicfacing.twirl843@passfwd.com"
                        className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 
                                   text-lg flex items-center justify-center lg:justify-start gap-2 transition-colors"
                    >
                        <FaEnvelope /> contact@codezz-ops.github.io
                    </a>

                    <p className="text-lg text-gray-700 dark:text-gray-200 mt-4">
                        Connect with me:
                    </p>

                    <div className="flex justify-center lg:justify-start gap-6 text-3xl text-gray-700 dark:text-gray-300">
                        <motion.a
                            href="https://github.com/PeterGriffinSr"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, color: "#3b82f6" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <FaGithub />
                        </motion.a>

                        <motion.a
                            href="https://discord.gg/b5BwCuBfxM"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, color: "#5865F2" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <FaDiscord />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}
