import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import image1 from '../assets/images/img-9.jpg'

function Cards () {
  return (
    <div className='cards'>
      <h1>Chech out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={image1}
              text='Explore the hidden watterfall deep inside the Amazon jungle'
              label='Adventure'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
