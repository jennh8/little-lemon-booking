import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Maps input field IDs to form state keys
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

    // When date changes, update available booking times
    if (id === "res-date") {
      dispatch({
        type: "UPDATE_TIMES",
        date: value,
      });
    }
  };

  // Checks whether all required fields are valid before enabling submission
  const isFormValid =
    formData.date &&
    formData.time &&
    formData.guests &&
    formData.occasion;

  // Error messages
  const validate = () => {
    const newErrors = {};

    if (!formData.date) newErrors.date = "Please choose a date";
    if (!formData.time) newErrors.time = "Please select a time";
    if (formData.guests < 1 || formData.guests > 10)
      newErrors.guests = "Guests must be between 1 and 10";
    if (!formData.occasion) newErrors.occasion = "Please select an occasion";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    submitForm(formData);
  };

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
          onInvalid={(e) => e.target.setCustomValidity("Please select a date")}
          onInput={(e) => e.target.setCustomValidity("")}
        />
        {errors.date && <p className="error">{errors.date}</p>}

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
        {errors.time && <p className="error">{errors.date}</p>}

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
        {errors.guests && <p className="error">{errors.date}</p>}

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
        {errors.occasion && <p className="error">{errors.date}</p>}

        <button type="submit">
          <span>Make Your reservation</span>
        </button>
      </form>
    </div>
  );
}

export default BookingForm;