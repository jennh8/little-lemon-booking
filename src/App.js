import './App.css';
import { useReducer } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Booking from './Booking';
import { initializeTimes, updateTimes } from "./Times";
import ConfirmedBooking from './ConfirmedBooking'
import { submitAPI } from "./api";

function App() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);

    if (success) {
      navigate("/confirmed");
    }
  };

  return (
    <>
      <Header/>

      <div className="page-container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={
            <Booking
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
              />} />

          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </div>

      <Footer/>
    </>
  );
}

export default App;
