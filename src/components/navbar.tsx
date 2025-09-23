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
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 relative">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                    Codezz-Ops
                </Link>

                {/* Navigation - centered */}
                <NavigationMenu className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <NavigationMenuList className="flex space-x-6">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="#home">Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="#projects">Projects</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="#about">About</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="#contact">Contact</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Theme toggle */}
                <ThemeToggle />
            </div>
        </motion.nav>
    )
}
