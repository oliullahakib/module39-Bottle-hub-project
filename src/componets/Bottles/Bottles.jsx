import React, { use } from 'react'
import Bottle from '../Bottle/Bottle'
import "./Bottles.css"
const Bottles = ({bottlePromiss}) => {
 const bottles = use(bottlePromiss)
 
    return (
    <div > 
        <h1>All Bottle:{bottles.length}</h1>
      <div className='bottles-container'>
          {
            bottles.map(bottle =><Bottle key={bottle.id} bottle={bottle} />)
        }
      </div>
    </div>
  )
}
export default Bottles