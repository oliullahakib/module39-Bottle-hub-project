import React, { use,useState,useEffect } from 'react'
import Bottle from '../Bottle/Bottle'
import "./Bottles.css"
import Carts from '../Carts/Carts'
const Bottles = ({bottlePromiss}) => {
 const bottles = use(bottlePromiss)
 const [cart, setCart] = useState([])
 useEffect(() => {
const cartIdArr = getFromLs();
const cartBottle =cartIdArr.map(id=>{
    return bottles.find(bottle => bottle.id ===id)
})
setCart(cartBottle)
 }, [bottles])
 
 const getFromLs=()=>{
    const cartIdString = localStorage.getItem("cartId");
    if(cartIdString){
        let cartId=JSON.parse(cartIdString)
        return cartId
    }
    return []
 }
 const addToLs =(id)=>{
    const cartIdArr = getFromLs();
    cartIdArr.push(id);
    const cartIdString = JSON.stringify(cartIdArr)
    localStorage.setItem("cartId",cartIdString)
 }
 const handleCart =(bottle)=>{
    addToLs(bottle.id)
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