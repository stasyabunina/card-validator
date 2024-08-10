import ValidationForm from "./validator";
import { input, form } from "./var";

const validateForm = new ValidationForm(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  validateForm.init(value);
  input.focus();
});
