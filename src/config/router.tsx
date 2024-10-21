import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layout'
import Home from '../pages/home'
import Reports from '../pages/reports'
import Profile from '../pages/profile'
import MealReport from '../pages/pie-chart'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/reports',
				element: <Reports />
			},
			{
				path: '/reports/:id',
				element: <MealReport />
			},
			{
				path: '/profile',
				element: <Profile />
			}
		]
	}
])

export default router
