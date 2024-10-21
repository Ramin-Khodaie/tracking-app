import { cn } from '../../lib/utils'

const HourlyReport = () => {
	const hours = [
		{
			label: 'Sun',
			duration: 5,
			isActive: true
		},
		{
			label: 'Mon',
			duration: 2,
			isActive: true
		},
		{
			label: 'Tue',
			duration: 3,
			isActive: true
		},
		{
			label: 'Wen',
			duration: 0,
			isActive: false
		},
		{
			label: 'Thu',
			duration: 5,
			isActive: true
		},
		{
			label: 'Fri',
			duration: 0,
			isActive: false
		},
		{
			label: 'Sat',
			duration: 0,
			isActive: false
		}
	]
	return (
		<div className='flex flex-col bg-white rounded-lg py-3 px-2 gap-3 '>
			<div className='flex items-center justify-between'>
				<p className='text-lg font-semibold'>hours</p>
				<span className='text-sm'>20 hours</span>
			</div>
			<div className='flex justify-between'>
				{hours.map((item, index) => (
					<div
						key={index}
						className={cn(
							'bg-neutral-100 text-black flex flex-col items-center py-1 px-2 rounded-xl min-w-10 min-h-10 self-end',
							item.isActive && 'bg-black text-white'
						)}
						style={{
							height: `${item.duration * 16}px`
						}}
					>
						<span className={'text-xs text-primary'}>
							{item.duration ? `${item.duration}h` : ''}
						</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default HourlyReport
