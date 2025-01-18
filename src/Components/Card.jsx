import React, { useState } from 'react'

const Card = ({id, image,info,price, name,removeTour}) => {
  const[readmore, setReadmore]= useState(false);
  const description= readmore ? info :`${info.substr(0,200)}....`;
  function readmoreHandler(){
    setReadmore(!readmore);
  }
  return (
    <div className='card '>
        <img src={image} className='image'></img>
        <div className='tour_info'>
            <div className='tour_details'>
              <h4 className='tour_price'>₹ {price}</h4>
              <h4 className='tour_name'>{name}</h4>
            </div>
            <div className='description'>{description}<span className='read_more' onClick={readmoreHandler}>
              {readmore ? 'Show Less' : 'Read More'}
            </span>
            </div>
        </div>
        
        <button className='btn_red' 
        onClick={()=>{
          removeTour(id)
        }}>Not Interested </button>
    </div>
  )
}

export default Card