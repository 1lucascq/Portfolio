import Image from "next/image";
import CardHeader from "@/components/CardHeader";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import TechStackItems from "@/components/TechStackItems";

import bookImage from "@/assets/images/book-cover.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";

const techStackItemsArray = [
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
        title: "Chrome",
        iconType: ChromeIcon,
    },
    {
        title: "GitHub",
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
        top: "45",
    },
];

export default function AboutSection() {
    return (
        <section className="py-20">
            <div className="container">
                <SectionHeader
                    eyebrow="About Me"
                    title="A little bit about me"
                    description="Find out more about me and my journey to becoming a developer."
                />
                <div className="mt-20 flex flex-col gap-8">
                    <Card className="h-[320px]">
                        <CardHeader
                            title="My Reads"
                            description="Check it out the books that I've read"
                        />
                        <div className="w-40 mx-auto mt-8">
                            <Image src={bookImage} alt="book cover" className="" />
                        </div>
                    </Card>
                    <Card className="h-[320px] p-0">
                        <CardHeader
                            title="Tech Stack"
                            description="Check the technologies that I'm used to work with"
                            className="px-6 pt-6"
                        />
                        <TechStackItems items={techStackItemsArray} className="mt-6" />
                        <TechStackItems
                            items={techStackItemsArray}
                            className="mt-6"
                            itemsWrapperClassName="-translate-x-1/2"
                        />
                    </Card>
                    <Card className="h-[320px] p-0 flex flex-col">
                        <CardHeader
                            title="Beyond the Code"
                            description="Check it out some of my hobbies."
                            className="px-6 py-6"
                        />
                        <div className="relative flex-1">
                            {hobbies.map((hobby) => (
                                <div
                                    key={hobby.title}
                                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
									style={{
										left: hobby.left,
										top: hobby.top
									}}
                                >
                                    <span className="font-medium text-gray-950">{hobby.emoji}</span>
                                    <span className="">{hobby.title}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
