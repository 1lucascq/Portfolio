import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import HeroBg from '@/components/HeroBg';

export default function HeroSection() {
	return (
		<section className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
			<HeroBg />
			<div className='container'>
				<div className='flex flex-col items-center'>
					<Image src={memojiImage} className='size-[100px]' alt='Person behind a laptop' />
					<div className='bg-gray-950 border border-gray-100 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
						<div className='bg-green-500 size-2.5 rounded-full relative'>
							<div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large' />
						</div>
						<div>
							<span className='text-sm font-medium'>Available for new projects</span>
						</div>
					</div>
				</div>
				<div className='max-w-lg mx-auto'>
					<h1 className='font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl'>Building Expectional User Experiences</h1>
					<p className='mt-4 text-color text-white/60 md:text-lg'>
						Descrição Breve - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, commodi! Facere hic laboriosam molestiae
						a atque voluptatibus aut debitis animi eligendi accusamus, maiores excepturi non, culpa natus sapiente eum velit.
					</p>
				</div>
				<div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
					<button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
						<span className='font-semibold'>Explore My Work</span>
						<ArrowDown className='size-4' />
					</button>
					<button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
						<span>✌️</span>
						<span className='font-semibold'>Let&apos;s Connect</span>
					</button>
				</div>
			</div>
		</section>
	);
};
