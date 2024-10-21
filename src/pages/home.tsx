import { AddMeal } from '../components/add-meal'
import HourlyReport from '../components/hourly-report/hourly-report'
import Meal from '../components/meal/meal'
import WeeklyReport from '../components/weekly-report/weekly-report'

const Home = () => {
	return (
		<div className='flex flex-col gap-4 p-2'>
			<WeeklyReport />
			<HourlyReport />
			<Meal />
			<AddMeal/>
		</div>
	)
}

export default Home
