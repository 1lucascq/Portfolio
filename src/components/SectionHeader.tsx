export default function SectionHeader({ eyebrow, title, description }: { eyebrow: string, title: string, description: string }) {
    return (
        <>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                    {eyebrow}
                </p>
            </div>
            <h2 className="font-serif text-3xl text-center mt-6  md:text-5xl">
				{title}
			</h2>
            <p className="text-center text-white-600 mt-4 max-w-md mx-auto md:text-lg lg:text-xl">
                {description}
            </p>
        </>
    );
}
