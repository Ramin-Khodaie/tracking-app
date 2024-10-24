export interface Meal {
	id: string
	attributes: {
		title: string
		type: string
		info: {
			kcal: number
			protein: number
			carbons: string
			fat: string
		}
	}
}
