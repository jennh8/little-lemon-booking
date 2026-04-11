import Staff from './assets/Mario-and-Adrian-b.jpg'

export default function Booking() {
return(
    <div className='booking'>
        <div className="booking-content">
            <div className="booking-form">
                <h1>Reserve a Table</h1>
                <div className='date'>
                    <div>
                        <label>Select a date: </label>
                        <input type="date" />
                    </div>
                    <div>
                        <label>Select a time: </label>
                        <input type="time" />
                    </div>
                </div>
                <p>Number of guests</p>

                <h2>Enter your details</h2>
                <form>
                    <div className="info">
                        <div className="form-row">
                            <label>First name </label>
                            <input type="text" name="fname" />
                        </div>
                        <div className="form-row">
                            <label>Last name </label>
                            <input type="text" name="lname" />
                        </div>
                        <div className="form-row">
                            <label>Mobile number </label>
                            <input type="tel" name="mobile" />
                        </div>
                        <div className="form-row">
                            <label>Email address </label>
                            <input type="email" name="email" />
                        </div>
                    </div>
                    <div>
                        <div className="form-row">
                            <label>Special requirements </label>
                            <textarea/>
                        </div>
                    </div>
                    </form>
                    <button>
                        <span>Confirm reservation</span>
                    </button>
            </div>
        </div>
        <div className='img-wrapper'>
            <img className='booking-img' src={Staff}></img>
        </div>
    </div>
)
}