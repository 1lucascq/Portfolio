// import memojiImage from '@/assets/images/memoji-computer.png';
import memojiImage from "@/assets/images/personInComputer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import HeroBg from "@/components/HeroBg";

export default function HeroSection() {
    return (
        <section id="home" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
            <HeroBg />
            <div className="container">
                <div className="flex flex-col items-center">
                    <Image
                        src={memojiImage}
                        className="size-[100px]"
                        alt="Person behind a laptop"
                    />
                    <div className="bg-gray-950 border border-gray-100 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
                        <div className="bg-green-500 size-2.5 rounded-full relative">
                            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large" />
                        </div>
                        <div>
                            <span className="text-sm font-medium">Available for new projects</span>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg mx-auto lg:max-w-xl">
                    <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
                        Crafting Scalable and User-Centric Solutions
                    </h1>
                    <p className="mt-4 text-color text-white/60 md:text-lg text-justify">
                        As a full-stack developer, I specialize in building dynamic, responsive
                        applications with a strong foundation in modern technologies like React,
                        Node.js, and Vue.js. With a passion for creating seamless user experiences,
                        I’ve redesigned complex systems, integrated APIs, and optimized site
                        performance to drive higher engagement and business growth.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
                    <a href="#projects" className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
                        <span className="font-semibold">Explore My Work</span>
                        <ArrowDown className="size-4" />
                    </a>
                    <a href="#contact" className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-999">
                        <span>✌️</span>
                        <span className="font-semibold">Let&apos;s Connect</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
