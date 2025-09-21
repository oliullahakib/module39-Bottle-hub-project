import React, { use,useState } from 'react'
import Bottle from '../Bottle/Bottle'
import "./Bottles.css"
import Carts from '../Carts/Carts'
const Bottles = ({bottlePromiss}) => {
 const bottles = use(bottlePromiss)
 const [cart, setCart] = useState([])
 const handleCart =(bottle)=>{
    let newCart = [...cart,bottle]
   setCart(newCart)
 }
    return (
    <div > 
        <Carts cart={cart} />
        <h1>All Bottle:{bottles.length}</h1>
      <div className='bottles-container'>
          {
            bottles.map(bottle =><Bottle key={bottle.id} bottle={bottle} handleCart={handleCart} />)
        }
      </div>
    </div>
  )
}
export default Bottles