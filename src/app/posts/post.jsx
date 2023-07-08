import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
function Post({ id, url, title, summary, date }) {
	return (
		<div className='w-full lg:w-[23.4vw]  rounded-lg shadow-xl h-auto  bg-white text-black hover:cursor-pointer p-2'>
			<Link href={`/post/` + id} className='flex flex-col space-y-4'>
				<Image
					key={id}
					className='w-full object-cover  rounded-lg lg:w-[23.4vw]  h-[20vh] lg:h-[32vh]'
					width={300}
					height={300}
					src={url}
					alt=''
				/>
				<div className='flex flex-col'>
					<h4 className='title md:text-2xl text-md font-bold'>{title}</h4>
					<p className='text-sm text-gray-600'>
						{summary.substring(0, 50) + ' click to read more...'}
					</p>
				</div>
				<div className='flex flex-row md:space-x-4  '>
					<p className='text-gray-400 text-xs md:text-sm '>
						{' '}
						{`Date Posted : ${date} `}
					</p>
					<p className='text-purple-400 text-xs md:text-sm '>25 min read</p>
				</div>
			</Link>
		</div>
	);
}

export const MainPost = ({ url, title, summary, writeUp, date }) => {
	return (
		<div className='w-full bg-white h-auto rounded-lg text-black  p-4 space-y-4'>
			<div className='flex flex-col lg:flex-row lg:space-x-4'>
				<Image
					className='object-cover rounded-lg md:rounded-l-lg h-[60vh] w-full lg:w-[60vw]'
					src={url}
					height={300}
					width={300}
					alt={''}
				/>
				<div className='flex flex-col lg:w-[40vw] space-y-2'>
					<h4 className='title md:text-3xl text-xl font-bold font-popinsL text-black'>
						{title}
					</h4>
					<p className='text-sm text-gray-600 md:text-2xl'>
						{summary.substring(0, summary.length) + ' click to read more...'}
					</p>
					<div className='flex flex-row space-x-24'>
						<p className='text-gray-400 '> {`Date Posted : ${date} `}</p>
						<p className='text-purple-400 '>25 min read</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
