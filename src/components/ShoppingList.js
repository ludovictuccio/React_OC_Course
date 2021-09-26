import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.filter(plant => plant.isAvailable !== false).map(({ id, cover, name, isSpecialOffer, water, light }) => (
					<PlantItem
						id={id} className='lmj-plant-item'
						cover={cover} 
						name={name}
						isSpecialOffer={isSpecialOffer}
						water={water}
						light={light}
					/>
				))}
			</ul>
		
		</div>
	)
}

export default ShoppingList