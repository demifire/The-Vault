'use strict';
module.exports = function() {

    const myGlobal = {};

    const setValue = function(key, value){
        if(!(myGlobal.key)){
            myGlobal[key] = value;
        }
    };

    const getValue = function(key){
        if(myGlobal[key]){
            return myGlobal[key]
        }else{
            return null
        }
    };

  return {
      getValue: getValue,
      setValue: setValue,
  }
};
