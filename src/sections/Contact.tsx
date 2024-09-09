import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export default function ContactSection() {
    return (
        <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
            <div className="container">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left">
                    <div
                        className="absolute inset-0 opacity-5 -z-10"
                        style={{ backgroundImage: `url(${grainImage.src})` }}
                    />
                    <div className="flex flex-col gap-8 items-center lg:gap-16">
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl">
                                I am available for new projects!
                            </h2>
                            <p className="text-sm mt-2 md:text-base">
                            Looking to expand your team? Let’s work together to create exceptional software solutions!
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <a href="https://www.linkedin.com/in/lucascq/" className="contact">
                                <span className="font-semibold">LinkedIn</span>
                                <ArrowUpRightIcon className="size-4" />
                            </a>
                            <a href="https://github.com/1lucascq/" className="contact">
                                <span className="font-semibold">GitHub</span>
                                <ArrowUpRightIcon className="size-4" />
                            </a>
                            <a
                                href="https://wa.me/5538999334321?text=Hello%20there!%20Let%27s%20get%20in%20touch"
                                className="contact"
                            >
                                <span className="font-semibold">WhatsApp</span>
                                <ArrowUpRightIcon className="size-4" />
                            </a>
                            <a className="contact" href="mailto:1lucascq@gmail.com">
                                <span className="font-semibold">Email</span>
                                <ArrowUpRightIcon className="size-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
