import furniture from "../../assets/63e8c4e570738029a725e686_Furniture-min.png";
import handbag from "../../assets/63e8c4e52d6553668075697e_hand bag-min.png";
import books from "../../assets/63e8c4e460afc22b7ea53520_books-min.png";
import tech from "../../assets/63e8c4e754ac2e32897cb53b_tech-min.png";
import sneakers from "../../assets/63e8c4e64b769118272f244f_sneakers-min.png";
import travel from "../../assets/63e8c4e71eb4ad6d07e7568f_travel-min.png";
import "./Categories.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Categories(){
    gsap.registerPlugin(ScrollTrigger)
    const categoryOne = useRef(null);
    const categoryTwo = useRef(null);
    const categoryThree = useRef(null);
    const categoryFour = useRef(null);
    const categoryFive = useRef(null);
    const categorySix = useRef(null);

    useEffect(() => {
       gsap.fromTo(categoryOne.current,
        {
          scale:0.5,
          y:100,
          opacity:0,
    },
    {
        scale:1,
        y:0,
        opacity:1,
        scrollTrigger: {
            trigger:'.category',
            toggleActions: 'play none none reverse',
            markers:true,
            start: 200,
        },
        delay:1,
       
    }),
    gsap.fromTo(categoryTwo.current,
        {
          scale:0.5,
          y:100,
          opacity:0,
    },
    {
        scale:1,
        y:0,
        opacity:1,
        scrollTrigger: {
            trigger:'.category',
            toggleActions: 'play none none reverse',
            markers:true,
            start: 200,
        },
        delay:1,
       
    }),
    gsap.fromTo(categoryThree.current,
        {
          scale:0.5,
          y:100,
          opacity:0,
    },
    {
        scale:1,
        y:0,
        opacity:1,
        scrollTrigger: {
            trigger:'.category',
            toggleActions: 'play none none reverse',
            markers:true,
            start: 200,
        },
        delay:1,
       
    }),
    gsap.fromTo(categoryFour.current,
        {
          scale:0.5,
          y:100,
          opacity:0,
    },
    {
        scale:1,
        y:0,
        opacity:1,
        scrollTrigger: {
            trigger:'.category',
            toggleActions: 'play none none reverse',
            markers:true,
            start: 200,
        },
        delay:1,
       
    }),
    gsap.fromTo(categoryFive.current,
        {
          scale:0.5,
          y:100,
          opacity:0,
    },
    {
        scale:1,
        y:0,
        opacity:1,
        scrollTrigger: {
            trigger:'.category',
            toggleActions: 'play none none reverse',
            markers:true,
            start: 200,
        },
        delay:1,
       
    }),
    gsap.fromTo(categorySix.current,
        {
          scale:0.5,
          y:100,
          opacity:0,
    },
    {
        scale:1,
        y:0,
        opacity:1,
        scrollTrigger: {
            trigger:'.category',
            toggleActions: 'play none none reverse',
            start: 200,
        },
        delay:1,
       
    })
    },[])
    return(
        <section className="categories-section">
            <h2 className="category-title">Shop Our Top Categories</h2>
            <div className="category-div">
                <div ref={categoryOne} className="category">
                    <div className="zoom">
                        <img src={furniture} className="category-image" alt="furniture-img"/>
                    </div>
                    <h2 className="category-text">Furniture</h2>
                </div>
                <div  ref={categoryTwo} className="category">
                    <div className="zoom">
                        <img src={handbag} className="category-image" alt="handbag-img"/>
                    </div>
                    <h2 className="category-text">Handbag</h2>
                </div>
                <div  ref={categoryThree} className="category">
                    <div className="zoom">
                        <img src={books} className="category-image" alt="books-img"/>
                    </div>
                    <h2 className="category-text">Books</h2>
                </div>
                <div  ref={categoryFour} className="category">
                    <div className="zoom">
                        <img src={tech} className="category-image" alt="tech-img"/>
                    </div>
                    <h2 className="category-text">Tech</h2>
                </div>
                <div  ref={categoryFive} className="category">
                    <div className="zoom">
                        <img src={sneakers} className="category-image" alt="sneakers-img"/>
                    </div>
                    <h2 className="category-text">Sneakers</h2>
                </div>
                <div  ref={categorySix} className="category">
                    <div className="zoom">
                        <img src={travel} className="category-image" alt="travel-img"/>
                    </div>
                    <h2 className="category-text">Travel</h2>
                </div>
            </div>
        </section>
    )
}