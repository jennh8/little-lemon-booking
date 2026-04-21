import Staff from './assets/Mario-and-Adrian-b.jpg'
import BookingForm from './BookingForm'

export default function Booking({ availableTimes, dispatch, submitForm }) {
return(
    <div className='booking'>
        <div className='booking-container container'>
            <div className="booking-content">
                <BookingForm
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    submitForm={submitForm}/>
            </div>
            <div className='img-wrapper'>
                <img className='booking-img' src={Staff}></img>
            </div>
        </div>
    </div>
)
}