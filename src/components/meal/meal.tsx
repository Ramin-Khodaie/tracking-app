import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import { Meal as MealType } from '../../types/meal.interface'

const fether = () =>
	fetch(`${process.env.REACT_APP_API_URL}/api/meals`)
		.then(res => res.json())
		.then(strapiData => strapiData.data)

const Meal = () => {
	const { data, isLoading } = useSWR<MealType[]>('/api/meals', fether)
	const navigate = useNavigate()
	return (
		<div className='flex flex-col bg-white rounded-lg py-3 px-2 gap-3 mt-8 '>
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
				{data?.map((meal, index:number) => (
					<div
						key={index}
						className='bg-neutral-100 px-3 py-2 rounded-lg flex flex-col gap-3'
						onClick={() => navigate(`/reports/${meal.id}`)}
					>
						<div className='flex justify-between'>
							<h6 className='font-bold'>{meal.attributes.title}</h6>
							<span className='text-primary'>{meal.attributes.type}</span>
						</div>
						<div className='text-[11px] text-neutral-500'>
							info: <span>{meal.attributes.info.kcal} kcal</span>,
							<span>{meal.attributes.info.protein}g Protein</span>,
							<span>{meal.attributes.info.carbons}g Carbs</span>,
							<span>{meal.attributes.info.fat}g Fat</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Meal
