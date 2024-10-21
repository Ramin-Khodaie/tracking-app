import { Link, useLocation } from 'react-router-dom'

import { Chart, Home, Profile } from 'iconsax-react'
import { cn } from '../../lib/utils'

const navItems = [
	{ name: 'Home', path: '/', icon: <Home />, isExact: true },
	{ name: 'Reports', path: '/reports', icon: <Chart />, isExact: false },
	{ name: 'Profile', path: '/profile', icon: <Profile />, isExact: true }
]

const Navigation = () => {
	const location = useLocation()

	return (
		<div className='flex items-center justify-around pt-4 pb-2 bg-white shadow-[0px_-1px_48px_0px_#00000024] fixed bottom-0 w-full'>
			{navItems.map((item, index) => {
				const activeLink = item.isExact
					? location.pathname === item.path
					: location.pathname.startsWith(item.path)
				return (
					<Link
						key={index}
						to={item.path}
						className={cn(
							'relative text-center flex flex-col items-center',
							activeLink &&
								'text-primary before:absolute before:w-1 before:h-1 before:bg-primary before:-top-2 before:rounded-full '
						)}
					>
						{item.icon}
						<span className={cn('text-xs', activeLink && 'font-medium')}>
							{item.name}
						</span>
					</Link>
				)
			})}
		</div>
	)
}

export { Navigation }
