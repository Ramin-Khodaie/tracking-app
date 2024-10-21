import useSWR from 'swr'

const fether = () =>
	fetch(`${process.env.REACT_APP_API_URL}/api/meals`)
		.then(res => res.json())
		.then(strapiData => strapiData.data)
const Reports = () => {
	const { data } = useSWR('/api/meals', fether)

	return <div className='mt-8 '></div>
}

export default Reports
