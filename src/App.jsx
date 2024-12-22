import './App.css'
import { AddToCart , RemoveItem } from './Icons'
import dessertproducts from './data.json'


const base_url = "https://res.cloudinary.com/dc2c49xov/desserts/"

function App() {
 


  return (
   <div className='container'><h1>Desserts

   </h1>
   {dessertproducts.map((dessert) => {
      return <>
      <div className="dessert">
          <img src={base_url + dessert.images.thumbnail} />
      <button><AddToCart /> Add To Cart</button>
      <p>{dessert.name}</p>
      </div>
    
      
    </>  
   })}
   <RemoveItem />
  
   </div>
  )
}

export default App
