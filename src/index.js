const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

module.exports = function toTens(number) {
  if (number < 10) {
    return digits[number];
  } if (number >= 10 && number < 20) {
    return teens[number - 10];
  }
  return `${tens[Math.floor(number / 10)]} ${digits[number % 10]}`;
}

function toHundreds(number) {
  if (number > 99) {
    return `${digits[Math.floor(number / 100)]} hundred ${toTens(number % 100)}`; // The Math.floor() function returns the largest integer less than or equal to a given number.
  }
  return toTens(number);
}

function convert(number) {
  if (number === 0) {
    return 'zero';
  }
  return toHundreds(number);
}

function toReadable(number) {
  console.log(convert(number));
}
