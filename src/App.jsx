import './App.css'
import { AddToCart , RemoveItem } from './Icons'
import dessertproducts from './data.json'


const base_url = "https://res.cloudinary.com/dc2c49xov/desserts/"

function App() {
 


  return (
   <><h1>Desserts

   </h1>
   {dessertproducts.map((dessert) => {
      return <p>{dessert.name}<img src={base_url + dessert.images.thumbnail} /></p>
   })}
   <RemoveItem />
  
   </>
  )
}

export default App
