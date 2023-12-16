import './Todaysdeal.css'
import { useState } from 'react'
export default function Todaysdeal(){
    const [category, setCategory] = useState('')

  

            
    return(
        <section className='today-section'>
            <h2 className='today-title'>Todays Best Deals For You!</h2>
            <div className="today-category-list">
                 <p onClick={() => setCategory('jewelery')} className='today-item'>Jewelery</p>
                 <p onClick={() => setCategory('clothes')} className='today-item'>Clothes</p>
                 <p onClick={() => setCategory('shoes')} className='today-item'>Shoes</p>
                 <p onClick={() => setCategory('bags')} className='today-item'>Bags</p>
            </div>
        </section>
    )
}