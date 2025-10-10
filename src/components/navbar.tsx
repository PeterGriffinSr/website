"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-800/30 shadow-sm"
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8 relative">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <Link
                        href="/"
                        className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white select-none"
                    >
                        Codezz-Ops
                    </Link>
                </motion.div>

                {/* Center Navigation */}
                <NavigationMenu className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <NavigationMenuList className="flex space-x-8">
                        {["Home", "Projects", "About", "Contact"].map((item) => (
                            <NavigationMenuItem key={item}>
                                <NavigationMenuLink asChild>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link
                                            href={`#${item.toLowerCase()}`}
                                            className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
                                        >
                                            {item}
                                        </Link>
                                    </motion.div>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Theme Toggle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <ThemeToggle />
                </motion.div>
            </div>
        </motion.nav>
    )
}
