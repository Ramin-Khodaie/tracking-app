import { Chart2, Notification } from 'iconsax-react'

const Header = () => {
	return (
		<div className='p-2 bg-white flex justify-between sticky top-0 w-full z-50 shadow-[0px_2px_24px_10px_#00000024]'>
			<p className='text-lg font-semibold'>Welcome Jon Doe</p>
			<div className='flex gap-1'>
				<Chart2 />
				<Notification />
			</div>
		</div>
	)
}

export { Header }
