import { Input } from '../input'
import { useForm } from 'react-hook-form'

import useSWRMutation from 'swr/mutation'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '../select'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '../sheet'
import { Form, FormField } from '../Form'

type MealEnity = {
	title: string
	type: string
	info: {
		kcal: string
		protein: string
		fat: string
		carbon: string
	}
}
async function createMeal(url: string, { arg }: { arg: MealEnity }) {
	await fetch(url, {
		method: 'POST',
		body: JSON.stringify({ data: arg }),
		headers: {
			'Content-Type': 'application/json'
		}
	})
}
const AddMeal = () => {
	const form = useForm<MealEnity>()

	const { trigger } = useSWRMutation(
		`${process.env.REACT_APP_API_URL}/api/meals`,
		createMeal,
		{
			onSuccess: () => {
				console.log('added...')
			}
		}
	)

	const onSubmit = (meal: MealEnity) => {
		const day = new Date().getDate()
		const month = new Date().getMonth() + 1
		const year = new Date().getFullYear()

		const newMeal = {
			...meal,
			date: `${year}-${month}-${day}`
		}
		trigger(newMeal)
		form.reset()
	}
	return (
		<div className='fixed bottom-20 right-4 lg:right-36 xl:right-[360px]'>
			<Sheet>
				<SheetTrigger>
					<button
						className='text-xl py-3 px-4 text-center rounded-xl  bg-black text-primary'
						type='button'
					>
						<span className='text-center text-secondary text-2xl '>+</span>
					</button>
				</SheetTrigger>
				<SheetContent className='bg-neutral-900' side={'bottom'}>
					<SheetHeader>
						<SheetTitle className='text-primary mb-3'>Add new meal</SheetTitle>
					</SheetHeader>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<div className='flex flex-col gap-3'>
								<div className='grid grid-cols-4 items-center gap-4'>
									<label htmlFor='title' className='text-right text-white'>
										Title
									</label>
									<Input
										{...form.register('title')}
										id='meal'
										placeholder='Enter your meal'
										className='col-span-3'
									/>
								</div>
								<FormField
									control={form.control}
									name='type'
									render={({ field }) => (
										<Select onValueChange={field.onChange} defaultOpen={false}>
											<SelectTrigger className=' col-span-3 ml-auto text-white bg-neutral-700'>
												<SelectValue
													className='text-white '
													placeholder='Select a meal type'
												/>
											</SelectTrigger>
											<SelectContent className='bg-neutral-700'>
												<SelectGroup>
													<SelectLabel className='text-white'></SelectLabel>
													<SelectItem className='text-white' value='breakfast'>
														Breakfast
													</SelectItem>
													<SelectItem className='text-white' value='lunch'>
														Lunch
													</SelectItem>
													<SelectItem className='text-white' value='dinner'>
														Dinner
													</SelectItem>
													<SelectItem className='text-white' value='snacks'>
														Snacks
													</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									)}
								/>
								<div className='grid grid-cols-4  gap-2   items-center'>
									<label className='text-white' htmlFor='kcal'>
										kcal{' '}
									</label>
									<Input {...form.register('info.kcal')} />
									<label className='text-white' htmlFor='protein'>
										protein{' '}
									</label>
									<Input {...form.register('info.protein')} />
									<label className='text-white' htmlFor='cabon'>
										cabon{' '}
									</label>
									<Input {...form.register('info.carbon')} />
									<label className='text-white' htmlFor='fat'>
										fat{' '}
									</label>
									<Input {...form.register('info.fat')} />
								</div>
							</div>
							<SheetFooter>
								<SheetClose>
									<button className='text-secondary mt-3' type='submit'>
										Save changes
									</button>
								</SheetClose>
							</SheetFooter>
						</form>
					</Form>
				</SheetContent>
			</Sheet>
		</div>
	)
}

export { AddMeal }
