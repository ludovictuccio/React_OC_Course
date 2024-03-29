import CareScale from './CareScale'
import '../styles/PlantItem.css'
import '../styles/ShoppingList.css'

function PlantItem({ id, cover, name,isAvailable, isSpecialOffer, water, light, price }) {
	return (
		<li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>

			<span className='lmj-plant-item-price'>{price}€</span>
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

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

export default PlantItem