export function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

export function isValidPassword(password) {
  return password.length >= 6;
}

export function isValidSelection(value) {
  return value !== 'Select an option'
}

export function isValidLocation(location) {
  return location.trim() !== '';
}