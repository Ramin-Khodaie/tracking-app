import { AddMeal } from '../components/add-meal'
import Meal from '../components/meal/meal'

const Home = () => {
	return (
		<div className='flex flex-col gap-4 p-2'>
			<Meal />
			<AddMeal />
		</div>
	)
}

export default Home
