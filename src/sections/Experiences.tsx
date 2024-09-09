"use client";
import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import mobifacil from "@/assets/images/mobifacil.avif";
import bold from "@/assets/images/bold.avif";
import CheckCircle from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

interface GithubRepository {
    name: string;
    homepage?: string;
    created_at: string;
    description: string;
}

interface Experience {
    company: string;
    year: string;
    title: string;
    results: string[];
    link?: string;
    image?: StaticImageData;
    imageURL?: string;
}

const API_URL = "https://api.github.com/users/1lucascq/repos";
const experiences: Experience[] = [
    // {
    //     company: "Freelancer",
    //     year: "2022",
    //     title: "Frontend Developer",
    //     results: [
    //         { title: "Enhanced user experience by 40%" },
    //         { title: "Improved site speed by 50%" },
    //         { title: "Increased mobile traffic by 35%" },
    //     ],
    //     link: "https://youtu.be/4k7IdSLxh6w",
    //     image: darkSaasLandingPage,
    // },
    {
        company: "Backlgrs",
        year: "2022",
        title: "JR Frontend Developer",
        results: [
            "Create websites projects from scratch",
            "Developed responsive UI features for clients",
            "Optimizing overall performance and SEO scores",
        ],
        image: bold,
    },
    {
        company: "Backlgrs",
        year: "2022-2024",
        title: "Fullstack Software Engineer",
        results: [
            "Maintenance and Development of new features",
            "Core API REST integration",
            "Performance optimization improvements",
        ],
        image: mobifacil,
    },
];

export default function Experiences() {
    const [experiencesAndProjects, setExperiencesAndProjects] = useState<Experience[]>(experiences);

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((repos) => {
                const deployedRepositoriesArray: Experience[] = [];
                repos.forEach((repo: GithubRepository) => {
                    if (repo.homepage) {
                        const company: string = "Project Showcase";
                        const title: string = repo.name.replaceAll("_", " ");
                        const link: string = repo.homepage;
                        const year: string = repo.created_at.slice(0, 4);
                        const results: string[] = repo.description.split(";");
                        const imageURL: string = `https://raw.githubusercontent.com/1lucascq/${repo.name}/master/screenshot.avif`;
                        deployedRepositoriesArray.push({
                            company,
                            title,
                            link,
                            year,
                            results,
                            imageURL,
                        });
                    }
                });
                deployedRepositoriesArray.sort((a, b) => parseInt(a.year) - parseInt(b.year));
                setExperiencesAndProjects([
                    ...experiencesAndProjects,
                    ...deployedRepositoriesArray,
                ]);
            })
            .catch((error) => console.error("Error fetching repositories:", error));
    }, []);

    return (
        <section id="projects" className="pb-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    eyebrow="Real-World Results"
                    title="Featured Projects"
                    description="From concept to completion — see my featured software projects."
                />
                <div className="mt-10 flex flex-col gap-20 md:mt-20">
                    {experiencesAndProjects.map((project, index) => (
                        <Card
                            key={project.title}
                            className="px-8 pt-8 pb-0 mx-8 md:pt-12 md:px-10 lg:pt-10 lg:mx-20 sticky"
                            style={{ top: `calc(64px + ${index * 60}px)` }}
                        >
                            <div className="lg:grid lg:grid-cols-2">
                                <div className="lg:pb-12">
                                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                                        <span>{project.company}</span>
                                        <span>&bull;</span>
                                        <span>{project.year}</span>
                                    </div>
                                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl lg:text-2xl">
                                        {project.title}
                                    </h3>
                                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                                        {project.results.map((result) => (
                                            <li
                                                className="flex gap-2 text-sm text-white/50 md:text-base"
                                                key={result}
                                            >
                                                <CheckCircle className="size-5 md:size-6" />
                                                <span>{result}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {project.link && (
                                        <a href={project.link} target="_blank">
                                            <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 px-6 md:w-auto">
                                                <span>Visit Live Site</span>
                                                <ArrowUpRightIcon className="size-4" />
                                            </button>
                                        </a>
                                    )}
                                </div>
                                {project.image && (
                                    <div>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            className="mt-8 -mb-4 md:-mb-0 "
                                        />
                                    </div>
                                )}
                                {project.imageURL && (
                                    <div>
                                        <Image
                                            src={project.imageURL}
                                            alt={project.title}
                                            className="mt-8 -mb-4 md:-mb-0 object-cover"
                                            width={202}
                                            height={360}
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                    </div>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
