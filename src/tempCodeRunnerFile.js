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
    19: 'тштуеуут',
    20: 'twenty',
    30: 'thirty',
    40: 'fourty',
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
      case 1:
        return getValueByKey(numsToConvert, number)
        break;
      case 2:
        if (getValueByKey(numsToConvert, number) == undefined && number > 20) {

          const firstNum = String(number).split('')[0]
          const lastNum = String(number).split('')[1]
          const des = firstNum + '0'

          return `${getValueByKey(numsToConvert, des)} ${getValueByKey(numsToConvert, lastNum)}`

        } else {
          return getValueByKey(numsToConvert, number)
        }
        break;
      case 3:
        return getValueByKey(numsToConvert, number)
        break;
    }
  }


  console.log(whatANumber(21))