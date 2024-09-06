import { ElementType } from "react";

export default function TechIcon({ component }: { component: ElementType }) {
    const Component = component;
    const textEmerald300Rgb = "rgb(110 231 183)";
    const textSky400Rgb = "rgb(56 189 248)";
    return (
        <>
            <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
            <svg className="size-0 absolute">
                <linearGradient id="tech-icon-gradient">
                    <stop offset="0%" stopColor={textEmerald300Rgb}></stop>
                    <stop offset="100%" stopColor={textSky400Rgb}></stop>
                </linearGradient>
            </svg>
        </>
    );
}
