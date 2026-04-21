import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    const keyMap = {
      "res-date": "date",
      "res-time": "time",
      guests: "guests",
      occasion: "occasion",
    };

    const key = keyMap[id];

    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));

    if (id === "res-date") {
      dispatch({
        type: "UPDATE_TIMES",
        date: value,
      });
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  submitForm(formData);
};

  const isFormValid =
    formData.date &&
    formData.time &&
    formData.guests &&
    formData.occasion;

  return (
    <div className="form-wrapper">
      <h1 className="form-heading">Reserve a Table</h1>
      <form
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          min={new Date().toISOString().split("T")[0]}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">Select a time</option>
          {(availableTimes || []).map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          min="1"
          max="10"
          onChange={handleChange}
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
        >
          <option value="">Select an occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <button type="submit" disabled={!isFormValid} style={{
          opacity: !isFormValid ? 0.5 : 1,
          cursor: !isFormValid ? "not-allowed" : "pointer",
        }}>
          <span>Make Your reservation</span>
        </button>
      </form>
    </div>
  );
}

export default BookingForm;