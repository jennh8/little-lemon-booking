import { fetchAPI } from "./api";

// Initializes available times using external API for today's date
export function initializeTimes() {
  return fetchAPI(new Date());
}

// Updates available booking times based on selected date
export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
}