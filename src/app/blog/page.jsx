'use client';
import React, { useState, useEffect, useRef } from 'react';
import Post from '../posts/post';
import { MainPost } from '../posts/post';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

function Blogs() {
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const bottomRef = useRef(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`http://192.168.0.180:5700/api/v1/blogs?page=${page}`
				);
				const newData = response.data;
				console.log(newData);
				setData((prevData) => [...prevData, ...newData]);
				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [page]);

	const handleLoadMore = () => {
		setPage((prevPage) => prevPage + 1);
	};

	return (
		<div className='flex flex-col w-full md:space-y-4 space-y-4 mt-24'>
			<div className='relative'>
				{data.length > 0 && (
					<MainPost
						title={data[0].title}
						url={data[0].url}
						summary={data[0].content.substring(0, 500)}
						id={data[0].id}
					/>
				)}
			</div>

			<InfiniteScroll
				dataLength={data.length}
				next={handleLoadMore}
				hasMore={true}
				loader={<div className='text-black'>Loading...</div>}
				scrollThreshold={0.9}
				endMessage={<div>No more data to load</div>}>
				<div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2'>
					{data.map((blogpost) => (
						<Post
							key={blogpost.id}
							summary={blogpost.content}
							url={blogpost.url}
							title={blogpost.title}
							id={blogpost.id}
							date={blogpost.date}
						/>
					))}
				</div>
			</InfiniteScroll>
		</div>
	);
}

export default Blogs;
