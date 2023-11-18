import "./Brands.css";
export default function Brands() {
  const brands = [
    {
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e560afc2c49da53521_brand%20(3)-min.png",
      name: "Staples",
      deliveryTime: "24",
    },
    {
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e58b497e41aa46b801_brand%20(8)-min.png",
      name: "Sprouts",
      deliveryTime: "24",
    },
    {
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e5eaf8533b0958cefe_brand%20(5)-min.png",
      name: "Grocery outlet",
      deliveryTime: "24",
    },
    {
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e454ac2e9d497cb531_brand%20(6)-min.png",
      name: "Molie stones",
      deliveryTime: "24",
    },
    {
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4707380971125e685_brand%20(4)-min.png",
      name: "Sport basement",
      deliveryTime: "24",
    },
    {
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e460afc2193aa53511_brand%20(2)-min.png",
      name: "Container Store",
      deliveryTime: "24",
    },
    {
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4c21faa5e03c209c5_brand%20(1)-min.png",
      name: "Target",
      deliveryTime: "24",
    },
    {
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e51eb4ad92a3e75673_brand%20(7)-min.png",
      name: "Bevmo!",
      deliveryTime: "24",
    },
  ];
  return (
    <section className="brand-section">
      <h2 className="section-title">Choose By Brand</h2>
      <div className="mother-brand">
        {brands.map((brand) => (
          <div className="brand-div">
            <img className="brand-img" src={brand.img} alt="staple" />
            <div className="brand-text-div">
              <h4 className="brand-title">{brand.name}</h4>
              <p className="delivery-time">Delivery with in {brand.deliveryTime} hours</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
