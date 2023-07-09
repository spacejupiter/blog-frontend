import React from 'react';

function BlogSkeleton() {
	return (
		<div className='grid lg:grid-cols-4 grid-cols-2 gap-2'>
			<Skeletons />
		</div>
	);
}

const Skeletons = () => {
	return [1, 2, 3, 4].map((x) => {
		return (
			<div className='w-full lg:w-[23.4vw] h-64  rounded-lg shadow-xl   bg-gray-300 text-black hover:cursor-pointer p-2'>
				<div className='flex flex-col space-y-4 h-44 '>
					<div className='flex flex-col bg-gray-300 h-8  '></div>
					<div className='flex flex-row md:space-x-4  h-8 bg-gray-300'></div>
				</div>
			</div>
		);
	});
};
export default BlogSkeleton;
