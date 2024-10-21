import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const fetcher = (id: any) =>
	fetch(`${process.env.REACT_APP_API_URL}/api/meals/${id}`)
		.then(res => res.json())
		.then(strapiData => strapiData.data)

const MealReport = () => {
	const { id } = useParams()
	const { data } = useSWR(`/api/meals/${id}`, () => fetcher(id))

	const [chartData, setChartData] = useState<any>([])
	const [options, setOptions] = useState({})

	useEffect(() => {
		if (data) {
			Object.keys(data?.attributes?.info).map(item =>
				setChartData((prevState: any) => [
					...prevState,
					{ name: item, y: Number(data.attributes.info[item]) }
				])
			)
		}
	}, [data])

	useEffect(() => {
		if (chartData) {
			setOptions({
				title: {
					text: `${data?.attributes?.title} (${data?.attributes?.type})`
				},
				xAxis: {
					categories: ['name']
				},
				chart: {
					type: 'pie',
					backgroundColor: 'transparent'
				},
				series: [
					{
						name: 'Percentage',
						colorByPoint: true,
						data: chartData
					}
				]
			})
		}
	}, [chartData, data])

	return (
		<div className='px-4  mt-16'>
			<div className='bg-white rounded-xl p-4  w-full flex justify-center items-center'>
				<HighchartsReact highcharts={Highcharts} options={options} />
			</div>
		</div>
	)
}

export default MealReport
