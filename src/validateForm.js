export function validateForm(formData) {
  return (
    formData.date !== "" &&
    formData.time !== "" &&
    formData.guests >= 1 &&
    formData.guests <= 10 &&
    formData.occasion !== ""
  );
}