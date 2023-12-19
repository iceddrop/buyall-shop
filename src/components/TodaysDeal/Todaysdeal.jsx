import './Todaysdeal.css'
import { useEffect, useState } from 'react'
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import "../BestDeals/BestDeals.css";
export default function Todaysdeal(){
    const [category, setCategory] = useState('');
    const [todaysDeal, setTodaysDeal] = useState([]);
    const [nameIsOpened, setNameIsOpened] = useState(false);
    const [specIsOpened, setSpecIsOpened] = useState(false);

    function fetchDeals(){
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=>setTodaysDeal(json))
    }
    useEffect(fetchDeals,[category])
    
console.log(todaysDeal)
    const todaysDealEl = todaysDeal.map(product => {
        return(
            <div key={product.id} className="deal-card">
            <div className="img-div">
              <img
                src={product.image}
                className="card-img"
                alt="homepod-mini"
              />
              <div className="heart-div">
                <AiOutlineHeart className="heart-icon" />
              </div>
            </div>
            <div className="deal-detail">
              <div className="detail-flex-div">
                <h3
                  onClick={() => setNameIsOpened(!nameIsOpened)}
                  className={
                    nameIsOpened ? "product-name-two" : "product-name-one"
                  }
                >
                  {product.title}
                </h3>
                <div className="price-div">
                  <h6 className="dollar pe-3">$</h6>
                  <p className="price">{product.price}</p>
                </div>
              </div>
              <p
                onClick={() => setSpecIsOpened(!specIsOpened)}
                className={
                  specIsOpened ? "specifications-two" : "specifications-one"
                }
              >
                {product.description}
              </p>
              <div className="ratings-div">
                <AiFillStar className="star-icon" />
                <AiFillStar className="star-icon" />
                <AiFillStar className="star-icon" />
                <AiFillStar className="star-icon" />
                <AiFillStar className="star-icon" />
                <h6 className="rating">(120)</h6>
              </div>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        )
    })
            
    return(
        <section className='today-section'>
            <h2 className='today-title'>Todays Best Deals For You!</h2>
            <div className="today-category-list">
                 <p onClick={() => setCategory('jewelery')} className='today-item'>Jewelery</p>
                 <p onClick={() => setCategory('electronics')} className='today-item'>Electronics</p>
                 <p onClick={() => setCategory("men's clothing")} className='today-item'>Men's</p>
                 <p onClick={() => setCategory("women's clothing")} className='today-item'>Women's</p>
            </div>
            <div className='today-deal-cards'>
              {todaysDealEl}
            </div>
        </section>
    )
}