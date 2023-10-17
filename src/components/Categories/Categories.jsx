import bg from "../../assets/pexels-jill-burrow-6387865.jpg";
import "./Categories.css";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TailSpin } from "react-loader-spinner";


export default function Categories() {
  gsap.registerPlugin(ScrollTrigger);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  const revealRefs = useRef([]);
  revealRefs.current = [];
  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          scale: 0.5,
          y: 100,
          opacity: 0,
        },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".category",
            toggleActions: "play none none reverse",
            start: 200,
          },
          delay: 1,
        }
      );
    });
  }, []);
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  return (
    <section className="categories-section">
      <h2 className="category-title">Shop Our Top Categories</h2>
      <div className="category-div">
        {
            categories ?
            <>
            {categories.map((category) => (
                <div key={category} ref={addToRefs} className="category">
                  <div className="zoom">
                    <img
                      src={bg}
                      className="category-image"
                      alt="furniture-img"
                    />
                  </div>
                  <h2 className="category-text">{category}</h2>
                </div>
              ))}
              </>
              :
               <TailSpin/>
        }

      </div>
    </section>
  );
}
