import './App.css'
import { AddToCart , RemoveItem, CarbonNeutral, IncrementQuantity, DecrementQuantity, EmptyCart, OrderConfirmed } from './Icons'
import dessertproducts from './data.json'
import { useState } from 'react'


 
const base_url = "https://res.cloudinary.com/dc2c49xov/desserts/"

function App() {
const [numberoforders, setnumberoforders] = useState(0);
 
const Addorder = () => {
  setnumberoforders(numberoforders + 1);
}

  return (
    
   <div className='the-body'>
    <h2>Desserts</h2>
   <div className="container"> 
   {dessertproducts.map((dessert) => {
      return <>
      <div className="dessert"><img  src={base_url + dessert.images.desktop} />
      <button onClick={() => Addorder()} id='add-button'><AddToCart /> Add To Cart</button>
      <p id='title'>{dessert.category}</p>
      <p id='name'>{dessert.name}</p>
      <p id='price'>{`$${dessert.price}`}</p>
      </div>
    
      
    </>  
   })}</div>
   <div className="cart-list">
  
        <h3>Youre Cart ({numberoforders})</h3>
        <EmptyCart />  
        <p>Youre added items will appear here</p>
   </div>

  
   </div>
  )
}

export default App
