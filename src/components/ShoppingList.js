const plantList = [
    'Monstera',
    'Ficus lyrata',
    'Pothos argenté',
    'Yucca',
    'Palmier'
]

function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant, index) => (
                <li key={`${plant}-${index}`}>{ plant }</li>
            ))}
        </ul>
    )
}

export default ShoppingList