import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import { Navigation } from '../components/navigation'
import { Container } from '../components/container'

const Layout = () => {
	return (
		<Container>
			<div className='h-screen bg-neutral-100 flex flex-col w-full'>
				<Header />
				<div className='flex flex-col flex-1'>
					<Outlet />
				</div>
				<Navigation />
			</div>
		</Container>
	)
}

export { Layout }
