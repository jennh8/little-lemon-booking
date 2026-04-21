import Food from './assets/restauranfood.jpg'

export default function CallToAction() {
return(
    <div className='section bg-green'>
        <div className="cta container">
            <div className='cta-content'>
                <div className='cta-text'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <span className='cta-span'>We are a family owned Mediterranean restaurant, focused on recipes served with a modern twist</span>
                    <button>
                        <span>Reserve a Table</span>
                    </button>
                </div>
                <div>
                    <img src={Food} className='food'></img>
                </div>
            </div>
        </div>
    </div>
)
}