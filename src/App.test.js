import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from "./Times";
import { fetchAPI } from "./api";
import userEvent from '@testing-library/user-event';

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

test("user can type in the date input", async () => {
  const user = userEvent.setup();

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  const dateInput = screen.getByLabelText(/choose date/i);

  await user.type(dateInput, "2026-04-21");

  expect(dateInput.value).toBe("2026-04-21");
});

test("user can select a time", async () => {
  const user = userEvent.setup();

  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  const select = screen.getByLabelText(/choose time/i);

  await user.selectOptions(select, "18:00");

  expect(select.value).toBe("18:00");
});

test("user can change number of guests", async () => {
  const user = userEvent.setup();

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  const guests = screen.getByLabelText(/number of guests/i);

  await user.clear(guests);
  await user.type(guests, "3");

  expect(guests.value).toBe("3");
});

test("form submits correct data", async () => {
  const user = userEvent.setup();
  const mockSubmit = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={() => {}}
      submitForm={mockSubmit}
    />
  );

  await user.type(screen.getByLabelText(/choose date/i), "2026-04-21");
  await user.selectOptions(screen.getByLabelText(/choose time/i), "17:00");
  await user.type(screen.getByLabelText(/number of guests/i), "2");
  await user.selectOptions(screen.getByLabelText(/occasion/i), "Birthday");

  await user.click(screen.getByRole("button"));

  expect(mockSubmit).toHaveBeenCalled();
});
