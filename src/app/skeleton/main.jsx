import React from 'react';

function MainSkeleton() {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
			<div className='bg-gray-300 h-[55vh] rounded-lg '></div>
			<div className=' h-[55vh] flex flex-col space-y-4'>
				<div className='bg-gray-300 h-[50vh] rounded-lg'></div>
				<div className='bg-gray-300 h-16 '></div>
			</div>
		</div>
	);
}

export default MainSkeleton;
