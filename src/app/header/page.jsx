import React from 'react';
import Link from 'next/link';
function Header() {
	return (
		<div className='h-24 w-full z-50 fixed  bg-white top-0 flex flex-row  items-center flex text-black p-4 border-b-[1px] '>
			<nav>
				<ul className='flex flex-row md:space-x-8 space-x-4'>
					<Link
						href={'/'}
						className='font-bold md:text-3xl text-xl font-popinsL mt-2'>
						Anslem Blog
					</Link>
					<div className='h-auto border w-[50vw] md:w-[40vw] p-4 rounded-xl border border-black border-2'>
						<input placeholder='search for anything' className='outline-none' />
					</div>
					<div className=' flex-row space-x-8 mt-4 ml-auto hidden md:flex'>
						<li>Home</li>
						<li>About</li>
						<li>Articles</li>
					</div>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
