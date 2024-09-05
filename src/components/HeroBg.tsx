import { PropsWithChildren } from 'react';
import HeroOrbit from '@/components/HeroOrbit';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import grainImage from '@/assets/images/grain.jpg';

export default function HeroBg() {
	return (
		<div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_50%,transparent)]'>
			<div className='absolute inset-0 -z-10 opacity-5' style={{ backgroundImage: `url(${grainImage.src})` }}></div>
			<div className='size-[620px] hero-ring' />
			<div className='size-[820px] hero-ring' />
			<div className='size-[1020px] hero-ring' />
			<div className='size-[1220px] hero-ring' />
			{/* <HeroOrbit size={800} rotation={-70}>
				<StarIcon className='size-28 text-emerald-300' style={{ top: '10%', left: '10%' }} />
			</HeroOrbit> */}
			<HeroOrbit size={550} rotation={20}>
				<StarIcon className='size-12 text-emerald-300' style={{ top: '10%', left: '10%' }} />
			</HeroOrbit>
			<HeroOrbit size={590} rotation={98}>
				<StarIcon className='size-8 text-emerald-300' style={{ top: '10%', left: '10%' }} />
			</HeroOrbit>
			<HeroOrbit size={430} rotation={-14}>
				<SparkleIcon className='size-8 text-emerald-300/20' style={{ top: '10%', left: '10%' }} />
			</HeroOrbit>
			<HeroOrbit size={440} rotation={79}>
				<SparkleIcon className='size-5 text-emerald-300/20' style={{ top: '10%', left: '10%' }} />
			</HeroOrbit>
			<HeroOrbit size={530} rotation={178}>
				<SparkleIcon className='size-10 text-emerald-300/20' style={{ top: '10%', left: '10%' }} />
			</HeroOrbit>
			<HeroOrbit size={710} rotation={144}>
				<SparkleIcon className='size-14 text-emerald-300/20' style={{ top: '10%', left: '10%' }} />
			</HeroOrbit>
			<HeroOrbit size={720} rotation={85}>
				<div className='size-3 rounded-full bg-emerald-300/20' style={{ top: '10%', left: '10%' }} />
			</HeroOrbit>
			<HeroOrbit size={520} rotation={-41}>
				<div className='size-2 rounded-full bg-emerald-300/20' style={{ top: '10%', left: '10%' }} />
			</HeroOrbit>
			<HeroOrbit size={650} rotation={-5}>
				<div className='size-3 rounded-full bg-emerald-300/20' style={{ top: '10%', left: '10%' }} />
			</HeroOrbit>
		</div>
	);
};
