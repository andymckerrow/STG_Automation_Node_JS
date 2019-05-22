module.exports = {
    numToString: numToString
}
function numToString(number){
    var stringnum = "";
    var s_number = number + '';
    if (number < 1)
    stringNum = 0;

    var hundred = s_number.substring(s_number.length-3, (s_number.length-3)+3);
    if (hundred > 0){
        stringnum = getNum(hundred);
    }
    var thousand = s_number.substring(s_number.length-6, (s_number.length-6)+3);
    if (thousand > 0){
        stringnum = getNum(thousand) + "thousand";
    }
    var million = s_number.substring(s_number.length-9, (s_number.length-9)+3);
    if (million > 0) {
        stringnum = getNum(million)+ "million";
    }
    var billion = s_number.substring(s_number.length-12, (s_number.length-12)+3);
    if (million > 0){
        stringnum = getNum(billion) + billion;
    }

    return stringnum;
}

function getNum(number){
     var threeDigitNum = "";
     var s_number = number + "";
     var singleNum_array = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
     var tens_array = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
     if (number < 20){
         threeDigitNum = singleNum_array[number];
     }else{
          if (hval > 0){
              threeDigitNum = threeDigitNum + singleNum_array[hval] + "hundred";
          }
          if (tenval > 0){
              threeDigitNum = threeDigitNum + tens_array[tenval] + "";
          }
          if (singval >= 0){
              threeDigitNum = threeDigitNum + singleNum_array[singval] + "";
          }
     }
    return threeDigitNum;
}