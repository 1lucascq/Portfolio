"use client";
import Image from "next/image";
import CardHeader from "@/components/CardHeader";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import TechStackItems from "@/components/TechStackItems";
import { motion } from "framer-motion";

import bookImage from "@/assets/images/book-cover.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { useRef } from "react";

const frontStackItemsArray = [
    {
        title: "JavaScript",
        iconType: JavascriptIcon,
    },
    {
        title: "React",
        iconType: ReactIcon,
    },
    {
        title: "HTML5",
        iconType: HTMLIcon,
    },
    {
        title: "CSS3",
        iconType: CSSIcon,
    },
    {
        title: "Vue",
        iconType: ChromeIcon,
    },
    {
        title: "ESLint",
        iconType: GithubIcon,
    },
    {
        title: "TypeScript",
        iconType: GithubIcon,
    },
];

const backStackItemsArray = [
    {
        title: "Node.js",
        iconType: JavascriptIcon,
    },
    {
        title: "Express",
        iconType: ReactIcon,
    },
    {
        title: "Next.js",
        iconType: HTMLIcon,
    },
    {
        title: "Git",
        iconType: CSSIcon,
    },
    {
        title: "Docker",
        iconType: ChromeIcon,
    },
    {
        title: "MongoDB",
        iconType: GithubIcon,
    },
    {
        title: "MySQL",
        iconType: GithubIcon,
    },
];

const hobbies = [
    {
        title: "Reading",
        emoji: "📚",
        left: "5%",
        top: "5%",
    },
    {
        title: "Running",
        emoji: "🏃",
        left: "50%",
        top: "5%",
    },
    {
        title: "Cooking",
        emoji: "🍳",
        left: "10%",
        top: "35%",
    },
    {
        title: "Gaming",
        emoji: "🎮",
        left: "35%",
        top: "40%",
    },
    {
        title: "Music",
        emoji: "🎵",
        left: "5%",
        top: "65%",
    },
    {
        title: "Cycling",
        emoji: "🚴",
        left: "45%",
        top: "70%",
    },
    {
        title: "Movies",
        emoji: "🎥",
        left: "70%",
        top: "35%",
    },
];

export default function AboutSection() {
    const constraintRef = useRef(null);

    return (
        <section id="about" className="py-20 lg:py-28">
            <div className="container">
                <SectionHeader
                    eyebrow="About Me"
                    title="A little bit about me"
                    description="Find out more about me and my journey to becoming a developer."
                />
                <div className="mt-20 flex flex-col gap-8">
                    <Card className="h-[320px] md:col-span-3">
                        <CardHeader
                            title="Tech Stack"
                            description="Check the technologies that I'm used to work with"
                            className=""
                        />
                        <TechStackItems items={frontStackItemsArray} className="" itemsWrapperClassName="animate-move-left [animation-duration:50s]" />
                        <TechStackItems
                            items={backStackItemsArray}
                            className="mt-6"
                            itemsWrapperClassName="animate-move-right [animation-duration:50s]"
                        />
                    </Card>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
                        <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                            <CardHeader
                                title="My Reads"
                                description="Check it out the books that I've read"
                            />
                            <div className="w-40 mx-auto mt-2 md:mt-0">
                                <Image src={bookImage} alt="book cover" className="" />
                            </div>
                        </Card>

                        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                            <CardHeader
                                title="Beyond the Code"
                                description="Check it out some of my hobbies."
                                className="px-6 py-6"
                            />
                            <div className="relative flex-1" ref={constraintRef}>
                                {hobbies.map((hobby) => (
                                    <motion.div
                                        key={hobby.title}
                                        className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-pointer"
                                        style={{
                                            left: hobby.left,
                                            top: hobby.top,
                                        }}
                                        drag
                                        dragConstraints={constraintRef}
                                    >
                                        <span>{hobby.emoji}</span>
                                        <span className="font-medium text-gray-950">
                                            {hobby.title}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
