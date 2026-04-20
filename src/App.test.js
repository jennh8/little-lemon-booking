import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from "./Times";


test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}}/>);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test("initializeTimes returns the correct default times", () => {
  const result = initializeTimes();

  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

test("updateTimes returns same state for unknown action", () => {
    const state = initializeTimes();
    const result = updateTimes(state, { type: "UNKNOWN" });

    expect(result).toEqual(state);
  });
