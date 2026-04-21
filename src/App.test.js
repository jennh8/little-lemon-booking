import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from "./Times";
import { fetchAPI } from "./api";

jest.mock("./api", () => ({
  fetchAPI: jest.fn(),
}));

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}}/>);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})

test("initializeTimes returns API times", () => {
  fetchAPI.mockReturnValue(["17:00", "18:00"]);

  const result = initializeTimes();

  expect(result).toEqual(["17:00", "18:00"]);
});

test("updateTimes returns same state for unknown action", () => {
    const state = initializeTimes();
    const result = updateTimes(state, { type: "UNKNOWN" });

    expect(result).toEqual(state);
  });
