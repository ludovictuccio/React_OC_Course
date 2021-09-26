import CareScale from './CareScale'
import '../styles/PlantItem.css'
import '../styles/ShoppingList.css'

function PlantItem({ id, cover, name,isAvailable, isSpecialOffer, water, light }) {
	return (
		<li key={id} className='lmj-plant-item'>

			<div className = 'lmj-text'>   
          		<img className = 'lmj-plant-item-cover' src = {cover}  alt={`${name} cover`}  />       
         		 <div >
		 			 {isSpecialOffer ? <div className='lmj-sales'>Soldes</div> : null }
         		 </div>		  
     		</div>

			{isAvailable}

			{name}					
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem