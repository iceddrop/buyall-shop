import "./TrendingProducts.css";
export default function TrendingProducts() {
  return (
    <section className="trending-section">
      <h2 className="trend-head">Trending Stores For you!</h2>
      <div className="trend-flex">
        <div className="trend-card">
          <div className="trend-img-div"></div>
          <div className="trend-card-text">
            <h2 className="trend-card-title">Furniture Village</h2>
            <p className="trend-card-paragraph">Delivery within 24 hours</p>
            <div>
            <a heref="#" className="trend-btn">
              Shop Now
            </a>
            </div>
          </div>
        </div>
        <div className="trend-card">
          <div className="trend-img-div"></div>
          <div className="trend-card-text">
          <h2 className="trend-card-title">Furniture Village</h2>
            <p className="trend-card-paragraph">Delivery within 24 hours</p>
            <div>
            <a heref="#" className="trend-btn">
              Shop Now
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
