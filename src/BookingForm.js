import { useState } from "react";

function BookingForm({ availableTimes, dispatch }) {
  const [formData, setFormData] = useState({
    date: "",
    time: availableTimes?.[0] || "",
    guests: 1,
    occasion: "Birthday",
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
    console.log("Reservation submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={formData.date}
        onChange={handleChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={formData.time}
        onChange={handleChange}
      >
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
        value={formData.guests}
        min="1"
        max="10"
        onChange={handleChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;