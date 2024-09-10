import { ElementType } from "react";

export default function TechIcon({ component }: { component: ElementType }) {
    const Component = component;
    const textPrimary = "#7ad8ef";
    const textSecondary = "#e0f2fe";
    return (
        <>
            <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
            <svg className="size-0 absolute">
                <linearGradient id="tech-icon-gradient">
                    <stop offset="0%" stopColor={textPrimary}></stop>
                    <stop offset="100%" stopColor={textSecondary}></stop>
                </linearGradient>
            </svg>
        </>
    );
}
