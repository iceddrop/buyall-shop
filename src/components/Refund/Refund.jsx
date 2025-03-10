import './Refund.css'
export default function Refund(){
    return(
        <section className="flex justify-around bg-red-200 py-16">
            <div className="refund-text-div">
                <h1 className="refund-title">Get 5% Cash<span> Back</span></h1>
                <h6 className="refund-title-two">on Buyall.com</h6>
                <a href='#' className="cashback-btn mt-4">Learn More</a>
            </div>
            <div>
                <img src='https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e768e3260571e48a0c_visa%20card-min.png' className="refund-img" alt='atm-card'/>
            </div>
        </section>
    )
}