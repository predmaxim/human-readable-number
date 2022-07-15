module.exports = function toReadable(num) {

  // const numsToConvert = {
  //   zero: 0,
  //   one: 1,
  //   two: 2,
  //   three: 3,
  //   four: 4,
  //   five: 5,
  //   six: 6,
  //   seven: 7,
  //   eight: 8,
  //   nine: 9,
  //   ten: 10,
  //   eleven: 11,
  //   twelve: 12,
  //   thirteen: 13,
  //   fourteen: 14,
  //   fifteen: 15,
  //   sixteen: 16,
  //   seventeen: 17,
  //   eighteen: 18,
  //   тштуеуут: 19,
  //   twenty: 20,
  //   thirty: 30,
  //   fourty: 40,
  //   fifty: 50,
  //   sixty: 60,
  //   seventy: 70,
  //   eighty: 80,
  //   ninety: 90,
  // }

  // const getKeyByValue = (object, value) => {
  //   const objectKeys = Object.keys(object)
  //   const objectValues = Object.values(object)

  //   for (let item of objectValues) {
  //     if (item == value) {
  //       return objectKeys[item]
  //     } else {
  //       return 'Number is not readable'
  //     }
  //   }
  // }

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

  const getValueByKey = (object, key) => {
    return object[key]
  }

  const whatANumber = number => {


    switch (String(number).length) {

      case 2:
        if (getValueByKey(numsToConvert, number) == undefined && number > 20) {

          const firstNum = String(number).split('')[0]
          const lastNum = String(number).split('')[1]
          const ten = `${firstNum}0`

          return `${getValueByKey(numsToConvert, ten)} ${getValueByKey(numsToConvert, lastNum)}`

        } else {
          return getValueByKey(numsToConvert, number)
        }
        break;

      case 3:
        const firstNum = String(number).split('')[0]
        const secondNum = String(number).split('')[1]
        const lastNum = String(number).split('')[2]
        const ten = `${secondNum}0`
        const hundred = `${getValueByKey(numsToConvert, firstNum)} hundred`
        let tenRes = `${getValueByKey(numsToConvert, `${secondNum}${lastNum}`)}`
        

        if (secondNum == 0) {

          ten = ''
          tenRes = getValueByKey(numsToConvert, lastNum)

        } else if (secondNum > 0 && secondNum < 21) {
          
          tenRes = getValueByKey(numsToConvert, number)

        } else if (secondNum > 20) {

          tenRes = `${getValueByKey(numsToConvert, ten)} ${getValueByKey(numsToConvert, lastNum)}`
          
        } else if (lastNum == 0) {
          tenRes = ten
        } else {
          tenRes = getValueByKey(numsToConvert, number)
        }

        return `${getValueByKey(numsToConvert, firstNum)} hundred ${tenRes}`
        break;

      default:
        return getValueByKey(numsToConvert, number)
        break;
    }
  }




  return whatANumber(num)

}
