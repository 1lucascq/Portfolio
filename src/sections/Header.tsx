export default function Header() {
	return (
		<header className='flex justify-center items-center fixed top-3 w-full z-30'>
			<nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blue'>
				<a href='#' className='nav-item'>
					Home
				</a>
				<a href='#' className='nav-item'>
					Projects
				</a>
				<a href='#' className='nav-item'>
					About
				</a>
				<a href='#' className='nav-item bg-white text-gray-900 hover:bg-white/80 hover:text-gray-900'>
					Contact
				</a>
			</nav>
		</header>
	);
};
