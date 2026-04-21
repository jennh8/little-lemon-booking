import Lemon from './assets/lemon-dessert.jpg'
import Bruschetta from './assets/bruchetta.svg'
import Greek from './assets/greek-salad.jpg'

export default function Specials() {
return(
    <div className="container">
        <div className="spec-heading">
            <h1>This week's specials!</h1>
            <button>
                <span>Online Menu</span>
            </button>
        </div>
        <div className="cards">
            <article className="article">
                <div className='card-img'>
                    <img src={Greek}></img>
                </div>
                <div className='card-content'>
                    <div className='dish'>
                        <h4 className='dish-name'>Greek Salad</h4>
                        <h4 className='price'>$12.99</h4>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                </div>
                    <button>Order a delivery</button>
            </article>
            <article className="article">
                <div className='card-img'>
                    <img src={Bruschetta}></img>
                </div>
                <div className='card-content'>
                    <div className='dish'>
                        <h4 className='dish-name'>Bruschetta</h4>
                        <h4 className='price'>$5.99</h4>
                    </div>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                </div>
                    <button>Order a delivery</button>
            </article>
            <article className="article">
                <div className='card-img'>
                    <img src={Lemon}></img>
                </div>
                <div className='card-content'>
                    <div className='dish'>
                        <h4 className='dish-name'>Lemon Dessert</h4>
                        <h4 className='price'>$5.00</h4>
                    </div>
                    <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                </div>
                    <button>Order a delivery</button>
            </article>
        </div>
    </div>
)
}