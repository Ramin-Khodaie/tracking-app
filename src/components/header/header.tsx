import { Chart2, Notification } from 'iconsax-react'

const Header = () => {
	return (
		<div className='p-2 bg-white flex justify-between fixed top-0 w-full'>
			<p className='text-lg font-semibold'>Welcome Jon Doe</p>
			<div className='flex gap-1'>
				<Chart2 />
				<Notification />
			</div>
		</div>
	)
}

export { Header }
