import ValidationForm from "./validator";
import { input, form } from "./var";
import { formatNumber } from "./formatNumber";

const validateForm = new ValidationForm(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  input.focus();
  const value = input.value.replaceAll(' ', '');
  validateForm.init(value);
});

input.addEventListener("input", () => {
  input.value = formatNumber(input.value.replaceAll(" ", ""))
});
