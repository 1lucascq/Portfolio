import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export default function HeroOrbit({
    children,
    size,
    rotation,
    orbitDuration,
    orbit = false,
    spin = false,
    spinDuration,
}: PropsWithChildren<{
    size: number;
    rotation: number;
    orbitDuration?: string;
    orbit?: boolean;
    spinDuration?: string;
    spin?: boolean;
}>) {
	// spin=false
	// orbit=false
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
            <div
                className={twMerge(orbit && "animate-spin")}
                style={{
                    animationDuration: orbitDuration,
                }}
            >
                <div
                    className="flex items-start justify-start"
                    style={{
                        transform: `rotate(${rotation}deg)`,
                        height: `${size}px`,
                        width: `${size}px`,
                    }}
                >
                    <div
                        className={twMerge(spin && "animate-spin")}
                        style={{ animationDuration: spinDuration }}
                    >
                        <div
                            className="inline-flex"
                            style={{
                                transform: `rotate(${rotation * -1}deg)`,
                            }}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
