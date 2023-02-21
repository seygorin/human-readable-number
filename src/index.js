module.exports = function toReadable(number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number === 0) {
    return 'zero';
  }

  let numToWords = '';

  if (Math.floor(number / 100) > 0) {
    numToWords += ones[Math.floor(number / 100)] + ' hundred ';
    number %= 100;
  }

  if (number >= 10 && number < 20) {
    numToWords += teens[number - 10];
    return numToWords.trim();
  } else if (number >= 20) {
    numToWords += tens[Math.floor(number / 10)];
    number %= 10;
    if (number > 0) {
      numToWords += ' ' + ones[number];
    }
  } else if (number > 0) {
    numToWords += ones[number];
  }

  return numToWords.trim();
}
