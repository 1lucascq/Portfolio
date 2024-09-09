"use client";
import { useState, useEffect } from "react";

export default function Header() {
    const [activeSection, setActiveSection] = useState("");
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

	useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection: string = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 50) {
                    currentSection = section.getAttribute("id") ?? "";
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="flex justify-center items-center fixed top-3 w-full z-30">
            <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blue">
                <a href="#home" className={`nav-item ${activeSection === "home" ? "active" : ""}`}>
                    Home
                </a>
                <a
                    href="#projects"
                    className={`nav-item ${activeSection === "projects" ? "active" : ""}`}
                >
                    Projects
                </a>
                <a
                    href="#about"
                    className={`nav-item ${activeSection === "about" ? "active" : ""}`}
                >
                    About
                </a>
                <a
                    href="#contact"
                    className={`nav-item ${activeSection === "contact" ? "active" : ""}`}
                >
                    Contact
                </a>
            </nav>
        </header>
    );
}
