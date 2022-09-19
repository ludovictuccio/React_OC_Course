import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'Monstera',
		category: 'classique',
		id: '1ed',
		light: 2,
		water: 3,
		cover: monstera,
		price: 10
	},
	{
		name: 'Ficus lyrata',
		category: 'classique',
		id: '2ab',
		isSpecialOffer: true,
		light: 3,
		water: 1,
		cover: lyrata,
		price: 12
	},
	{
		name: 'Pothos argenté',
		category: 'classique',
		id: '3sd',
		isSpecialOffer: true,
		light: 1,
		water: 2,
		cover: pothos,
		price: 18
	},
	{
		name: 'Calathea',
		category: 'classique',
		id: '4kk',
		light: 3,
		water: 1,
		cover: calathea,
		price: 20
	},
	{
		name: 'Olivier',
		category: 'extérieur',
		id: '5pl',
		isAvailable: false,
		light: 3,
		water: 1,
		cover: olivier,
		price: 35
	},
	{
		name: 'Menthe',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: mint,
		price: 4
	},
	{
		name: 'Basilic',
		category: 'extérieur',
		id: '7ie',
		light: 2,
		water: 3,
		cover: basil,
		price: 6
	},
	{
		name: 'Cactus',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: cactus,
		price: 15
	},
	{
		name: 'Succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
		price: 8
	}
]