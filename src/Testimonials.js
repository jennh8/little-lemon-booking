import User from './assets/user.png'

export default function Testimonials() {
return (
    <div className='section bg-green'>
        <div className="testimonials container">
            <h1>Testimonials</h1>
            <div className="test-cards">
                <article>
                    <h3>Rating</h3>
                    <div className='user'>
                        <img src={User}></img>
                        <h3>Jen</h3>
                    </div>
                    <button>Review text</button>
                </article>
                <article>
                    <h3>Rating</h3>
                    <div className='user'>
                        <img src={User}></img>
                        <h3>Tommy</h3>
                    </div>
                    <button>Review text</button>
                </article>
                <article>
                    <h3>Rating</h3>
                    <div className='user'>
                        <img src={User}></img>
                        <h3>Evelyn</h3>
                    </div>
                    <button>Review text</button>
                </article>
                <article>
                    <h3>Rating</h3>
                    <div className='user'>
                        <img src={User}></img>
                        <h3>Liam</h3>
                    </div>
                    <button>Review text</button>
                </article>
            </div>
        </div>
    </div>
)
}