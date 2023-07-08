'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/app/header/page';
function Page() {
	const params = useParams();

	const [blogData, setBlogData] = useState(null);
	useEffect(() => {
		const id = params.postid;
		console.log(id);
		const strinUrl = 'http://localhost:5700/api/v1/blog/' + id;
		console.log(strinUrl);
		axios.get(strinUrl).then((res) => {
			setBlogData(res.data);
		});
	}, []);
	if (blogData) {
		const { url, title, content, date } = blogData;
		return (
			<div className='w-full bg-white h-auto rounded-lg text-black  p-4 space-y-4 pt-24'>
				<Header />
				<div className='flex flex-col  lg:space-y-4'>
					<Image
						className='object-cover lg:object-fit rounded-lg md:rounded-l-lg h-[60vh] lg:h-[70vh] w-full '
						src={url}
						height={300}
						width={300}
						alt={''}
					/>
					<div className='flex flex-col w-full space-y-2'>
						<h4 className='title md:text-3xl text-xl font-bold font-popinsL text-black'>
							{title}
						</h4>
						<p className='text-sm text-gray-600 md:text-2xl'>{content}</p>
						<div className='flex flex-row space-x-24'>
							<p className='text-gray-400 '> {`Date Posted : ${date} `}</p>
							<p className='text-purple-400 '>25 min read</p>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		<></>;
	}
}

export default Page;
