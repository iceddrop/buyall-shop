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
  let titleEl = useRef(null);
  let paragraphEl = useRef(null);
  let btnEl = useRef(null);

  useEffect(() => {
    gsap.to(shoesEl.current, {
      opacity: 1,
      y: 150,
      ease: "elastic",
      delay: 1,
    });
    gsap.to(lugagesEl.current, {
      opacity: 1,
      y: 150,
      ease: "elastic",
      delay: 1,
    });
    gsap.to(gamesEl.current, {
      opacity: 1,
      y: 120,
      ease: "elastic",
      delay: 1,
    });
    gsap.to(titleEl.current, {
      y: 120,
      opacity: 1,
      delay: 1,
    });
    gsap.to(paragraphEl.current, {
      y: 120,
      opacity: 1,
      delay: 1.2,
    });
    gsap.to(btnEl.current, {
      y: 120,
      opacity: 1,
      delay: 1.4,
    });
  }, []);
  return (
    <section className="home-bg">
      <div className="home-div-two">
        <div className="home-text-div">
          <h2 ref={titleEl} className="home-title">
            Shopping And Department Store.
          </h2>
          <p ref={paragraphEl} className="home-paragraph mt-2">
            Shopping is a bit of a relaxing hobby for me, which is sometimes
            troubling for the bank balance.
          </p>
          <div className="lg:mt-4">
            <a
              ref={btnEl}
              className="bg-green-800 text-white py-2 px-4 rounded-md"
              href="#"
            >
              Learn More
            </a>
          </div>
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
