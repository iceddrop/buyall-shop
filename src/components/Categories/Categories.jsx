import furniture from "../../assets/63e8c4e570738029a725e686_Furniture-min.png";
import handbag from "../../assets/63e8c4e52d6553668075697e_hand bag-min.png";
import books from "../../assets/63e8c4e460afc22b7ea53520_books-min.png";
import tech from "../../assets/63e8c4e754ac2e32897cb53b_tech-min.png";
import sneakers from "../../assets/63e8c4e64b769118272f244f_sneakers-min.png";
import travel from "../../assets/63e8c4e71eb4ad6d07e7568f_travel-min.png";
import "./Categories.css";
export default function Categories(){
    return(
        <section className="categories-section">
            <h2 className="category-title">Shop Our Top Categories</h2>
            <div className="category-div">
                <div className="category">
                    <div className="zoom">
                        <img src={furniture} className="category-image" alt="furniture-img"/>
                    </div>
                    <h2 className="category-text">Furniture</h2>
                </div>
                <div className="category">
                    <div className="zoom">
                        <img src={handbag} className="category-image" alt="handbag-img"/>
                    </div>
                    <h2 className="category-text">Handbag</h2>
                </div>
                <div className="category">
                    <div className="zoom">
                        <img src={books} className="category-image" alt="books-img"/>
                    </div>
                    <h2 className="category-text">Books</h2>
                </div>
                <div className="category">
                    <div className="zoom">
                        <img src={tech} className="category-image" alt="tech-img"/>
                    </div>
                    <h2 className="category-text">Tech</h2>
                </div>
                <div className="category">
                    <div className="zoom">
                        <img src={sneakers} className="category-image" alt="sneakers-img"/>
                    </div>
                    <h2 className="category-text">Sneakers</h2>
                </div>
                <div className="category">
                    <div className="zoom">
                        <img src={travel} className="category-image" alt="travel-img"/>
                    </div>
                    <h2 className="category-text">Travel</h2>
                </div>
            </div>
        </section>
    )
}