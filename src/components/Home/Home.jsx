import "./Home.css";
import stage from "../../assets/stage.png";
import shoes from "../../assets/63e8c4e660afc23a10a53523_other-min.png";
import lugages from "../../assets/63e8c4e75b939fd1159c029e_tour-min.png";
import games from "../../assets/63e9c0607f75e4aad54b94a0_ele.png";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
export default function Home() {
  let shoesEl = useRef(null);
  let gamesEl = useRef(null);
  let lugagesEl = useRef(null);

  useEffect(() => {
    gsap.to(shoesEl.current, {
      opacity: 1,
      y: 150,
      ease: "elastic",
      delay: 1,
    });
    gsap.to(lugagesEl.current, {
        opacity: 1,
        y:150,
        ease: "elastic",
        delay: 1,
      });
      gsap.to(gamesEl.current, {
        opacity: 1,
        y:120,
        ease: "elastic",
        delay: 1,
      });
  }, []);
  return (
    <section className="home-bg">
      <div className="home-div-two">
        <div className="home-text-div">
          <h2 className="home-title">Shopping And Department Store.</h2>
          <p className="home-paragraph mt-2">
            Shopping is a bit of a relaxing hobby for me, which is sometimes
            troubling for the bank balance.
          </p>
          <a className="learn-btn mt-2" href="#">
            Learn More
          </a>
        </div>
        <div className="product-stage-div">
          <img src={stage} className="product-stage" alt="product-stage" />
          <img ref={shoesEl} src={shoes} className="shoes" alt="shoes" />
          <img ref={gamesEl} src={games} className="games" alt="games" />
          <img
            ref={lugagesEl}
            src={lugages}
            className="lugages"
            alt="lugages"
          />
        </div>
      </div>
    </section>
  );
}
