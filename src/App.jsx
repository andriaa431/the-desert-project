import './App.css'
import { AddToCart , RemoveItem } from './Icons'
import dessertproducts from './data.json'


const base_url = "https://res.cloudinary.com/dc2c49xov/desserts/"

function App() {
 


  return (
    
   <div className='the-body'>
    <h2>Desserts</h2>
   <div className="container"> 
   {dessertproducts.map((dessert) => {
      return <>
      <div className="dessert"><img  src={base_url + dessert.images.desktop} />
      <button id='add-button'><AddToCart /> Add To Cart</button>
      <p id='title'>{dessert.category}</p>
      <p id='name'>{dessert.name}</p>
      <p id='price'>{`$${dessert.price}`}</p>
      </div>
      <br></br>
    
      
    </>  
   })}</div>
   <RemoveItem />
  
   </div>
  )
}

export default App
