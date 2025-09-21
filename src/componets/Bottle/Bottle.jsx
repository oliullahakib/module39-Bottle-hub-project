import React from 'react'
import "./Bottle.css"
const Bottle = ({bottle}) => {
    const countRating =(ratings)=>{
        const stars =[]
        for(let i =1; i<=ratings; i++){
            if(ratings>1)
            stars.push(<span key={i} >⭐️</span>)
        } 
        return stars
    }
    const {name,price,img,stock,ratings}=bottle
  return (
    <div className='bottle-container'>
        <img src={img} alt="" />
        <div>
            <h3>Name: {name}</h3>
            <h3>Price: ${price}</h3>
            <p>Remaining: {stock} {stock<=3?"Finish Soon" :""}</p>
            <p>Rating: {countRating(ratings)}</p>
        </div>
    </div>
  )
}

export default Bottle