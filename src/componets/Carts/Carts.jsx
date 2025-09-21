import React from 'react'
import "./Carts.css"
const Carts = ({ cart }) => {
    return (
        <div>
            <h1>You Carts:{cart.length} </h1>
            {
                cart.map(bottle => {
                    return (
                        <div key={bottle.id} >
                            <div className='carts-container'>
                                <img src={bottle.img}></img>
                                <span>{bottle.name}</span>
                                <button>x</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Carts