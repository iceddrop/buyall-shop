import './Home.css'
import stage from '../../assets/stage.png'
export default function Home(){
    return(
        <section className="home-bg">
             <div className='home-div-two'>
                <div className='home-text-div'>
                    <h2 className='home-title'>Shopping And Department Store.</h2>
                    <p className='home-paragraph mt-2'>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
                    <a className='learn-btn mt-2' href='#'>Learn More</a>
                </div>
                <div className="product-stage-div">
                     <img src={stage} className='product-stage'alt='product-stage'/>
                </div>
             </div>
        </section>
    )
}