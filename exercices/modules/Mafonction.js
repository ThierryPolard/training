'use strict';

// entrée chiffres
// sortie : nombre pairs

var nombres =(2,1,4,6)

fonction filterEven_Sup100(nombres){
  var nombres.filter(function(element) {
    if (elementnombres%2 === 0  &&  elementnombres > 100)
        return true
    else
       return false
   }
}

 module.exports = {
   filterEven: filterEven,
   }


module.exports = function (nombres){
  return nombres.filter (function (element) {
    return element%2=== 0;
  });
