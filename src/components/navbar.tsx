"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
    name: string;
    path: string;
}

const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" }
];

const ActiveIndicator = () => (
  <span className="absolute -left-3 top-1 -translate-y-1/2 w-2 h-2 bg-teal-400 rounded-full" />
);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`sticky top-0 flex w-full items-center justify-between px-[20px] py-[15px] bg-background lg:mx-auto lg:px-20 z-50 transition-shadow duration-300 ${
            isScrolled ? "shadow-md dark:shadow-light" : ""
        }`}>
            <div>
                <Link href="/">
                    <span className="lg:block md:block hidden text-xl font-semibold cursor-pointer">
                        Elevare
                    </span>
                    <span className="lg:hidden md:hidden sm:block font-medium cursor-pointer">
                        Elevare
                    </span>
                </Link>
            </div>

            <div className="hidden lg:flex md:flex gap-x-[50px] items-center">
                {navLinks.map((item, index) => (
                    <Link href={item.path} key={index} legacyBehavior>
                        <a className={`font-normal relative ${pathname === item.path ? 'text-primary' : ''}`}>
                            {pathname === item.path && <ActiveIndicator />}
                            {item.name}
                        </a>
                    </Link>
                ))}

                <Link href="/contact-us">
                    <Button>Contact Us</Button>
                </Link>

                <ModeToggle />
            </div>

            <div className="lg:hidden md:hidden flex items-center gap-4">
                <ModeToggle />
                <button onClick={toggleMenu}>
                    {isMenuOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
                </button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 top-[60px] bg-background z-40 lg:hidden md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-8">
                            {navLinks.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <Link href={item.path} onClick={toggleMenu}>
                                        <span className={`text-2xl font-medium relative pl-5 ${pathname === item.path ? 'text-primary' : ''}`}>
                                            {pathname === item.path && <ActiveIndicator />}
                                            {item.name}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                            >
                                <Link href="/contact-us" onClick={toggleMenu}>
                                    <Button size="lg">Contact Us</Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;