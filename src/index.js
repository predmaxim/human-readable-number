module.exports = function toReadable(num) {

  const numsToConvert = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }

  const findTens = num => {
    if (numsToConvert[num] === undefined) {

      const firstNum = String(num).split('')[0] == 0 ? '' : String(num).split('')[0]
      const lastNum = String(num).split('')[1] == 0 ? '' : String(num).split('')[1]
      const tens = `${firstNum}0`

      return `${numsToConvert[tens]} ${numsToConvert[lastNum]}`.trim()

    } else {

      return numsToConvert[num]
    }
  }

  switch (String(num).length) {

    case 1:
      return numsToConvert[num]
      break;

    case 2:
      return findTens(num)
      break;

    case 3:
      const firstNum = String(num).split('')[0] == 0 ? '' : String(num).split('')[0]
      const secondNum = String(num).split('')[1] == 0 ? '' : String(num).split('')[1]
      const lastNum = String(num).split('')[2]

      const tens = findTens(`${secondNum}${lastNum}`) === 'zero' ? '' : findTens(`${secondNum}${lastNum}`)
      const hundred = `${numsToConvert[firstNum]} hundred`

      return `${hundred} ${tens}`.trim()
      break;
  }
}