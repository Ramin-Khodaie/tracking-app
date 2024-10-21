import { TickCircle } from 'iconsax-react'
import { cn } from '../../lib/utils'

const WeeklyReport = () => {
	const weekItems = [
		{
			label: 'Sun',
			isActive: true
		},
		{
			label: 'Mon',
			isActive: true
		},
		{
			label: 'Tue',
			isActive: true
		},
		{
			label: 'Wen',
			isActive: false
		},
		{
			label: 'Thu',
			isActive: true
		},
		{
			label: 'Fri',
			isActive: false
		},
		{
			label: 'Sat',
			isActive: false
		}
	]
	return (
		<div className='flex flex-col bg-white rounded-lg py-3 px-2 gap-3'>
			<div className='flex items-center justify-between'>
				<p className='text-lg font-semibold'>This Week</p>
				<span className='text-sm'>4/7 Days</span>
			</div>
			<div className='flex justify-between'>
				{weekItems.map((item, index) => (
                    <div
                        key={index}
						className={cn(
							'bg-neutral-100 text-black flex flex-col items-center py-3 px-2 rounded-full min-h-16 min-w-10',
							item.isActive && 'bg-black text-white'
						)}
					>
						<span className={'text-xs flex-1'}>{item.label}</span>
						{item.isActive ? (
							<TickCircle
								size={14}
								variant='Bold'
								color='rgba(25, 114, 62, 1)'
							/>
						) : (
							<TickCircle size={14} />
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default WeeklyReport
