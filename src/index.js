module.exports = function toReadable (number) {
    let str1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let str2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let str3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 10) return str1[number];
    if (number < 20) return str2[number % 10];
    if (number < 100) {
      if (number % 10 === 0) {
          return str3[number / 10 - 2];
      } 
      else {
          
          return str3[Math.floor(number / 10) - 2] + ' ' + str1[number % 10];
      }
    } 
    if (number <  1000) {
        if (number % 100 === 0) {
            return str1[number / 100] + ' hundred';
        }
        else {
            if (number % 10 === 0) {
                if (number % 100 == 10) return str1[Math.floor(number / 100)] + ' hundred ' + str2[0];
                return str1[Math.floor(number / 100)] + ' hundred ' + str3[Math.floor(number / 10 % 10) - 2];
            } 
            else {
               if (number % 100 < 20 && number % 100 >= 10) {
                    return str1[Math.floor(number / 100)] + ' hundred ' + str2[number % 100 % 10];
                    //return number % 100 % 10;
               } 
               if (number % 100 < 10 ) {
                    return str1[Math.floor(number / 100)] + ' hundred ' + str1[number % 100];
               }
            }
        }
        return str1[Math.floor(number / 100)] + ' hundred ' + str3[Math.floor(number % 100 / 10) - 2] + ' ' + str1[number % 100 % 10];
    }
    return 0;
  }

