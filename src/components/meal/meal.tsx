import useSWR from 'swr'

const fether = () =>
	fetch(`${process.env.REACT_APP_API_URL}/api/meals`)
		.then(res => res.json())
		.then(strapiData => strapiData.data)

const Meal = () => {
	const { data, isLoading } = useSWR('/api/meals', fether)
	console.log('🚀 ~ file: meal.tsx:10 ~ Meal ~ data:', data)

	const mealItem = [
		{
			title: 'Oatmeal with Berries',
			type: 'Breakfast',
			info: {
				kcal: 350,
				protein: 35,
				carbs: 60,
				fat: 5
			}
		},
		{
			title: 'Grilled Chicken Salad',
			type: 'Lunch',
			info: {
				kcal: 350,
				protein: 35,
				carbs: 60,
				fat: 5
			}
		},
		{
			title: 'Baked Salmon with Quinoa',
			type: 'Dinner',
			info: {
				kcal: 350,
				protein: 35,
				carbs: 60,
				fat: 5
			}
		},
		{
			title: 'Greek Yogurt',
			type: 'Snacks',
			info: {
				kcal: 350,
				protein: 35,
				carbs: 60,
				fat: 5
			}
		}
	]
	return (
		<div className='flex flex-col bg-white rounded-lg py-3 px-2 gap-3 mb-16'>
			<div className='flex justify-between'>
				<p className='font-bold text-lg'>Today meal</p>
				<img src='/icons/organic-food.svg' alt='food' />
			</div>
			<div className='flex flex-col gap-2'>
				{isLoading && [
					...Array(4)
						.fill(null)
						.map((_, index) => (
							<div key={index} className='h-16 bg-neutral-100 rounded-lg' />
						))
				]}
				{data?.map((meal: any) => (
					<div className='bg-neutral-100 px-3 py-2 rounded-lg flex flex-col gap-3'>
						<div className='flex justify-between'>
							<h6 className='font-bold'>{meal.attributes.title}</h6>
							<span className='text-primary'>{meal.attributes.type}</span>
						</div>
						<div className='text-[11px] text-neutral-500'>
							info: <span>{meal.attributes.info.kcal} kcal</span>,
							<span>{meal.attributes.info.protein}g Protein</span>,
							<span>{meal.attributes.info.carbs}g Carbs</span>,
							<span>{meal.attributes.info.fat}g Fat</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Meal
