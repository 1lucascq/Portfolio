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
                    <div className="flex flex-col gap-8 items-center md:flex-row lg:gap-16">
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl">
                                Let&apos;s create something amazing together
                            </h2>
                            <p className="text-sm mt-2 md:text-base">
                                Ready to bring your next project to life? Contact me and we can make
                                it happen
                            </p>
                        </div>
                        <div>
                            <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                                <span className="font-semibold">Contact Me</span>
                                <ArrowUpRightIcon className="size-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
