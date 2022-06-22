//1

Array.prototype.myFilter = function (callback, thisArg){
    var result = [];
    let array = this;
    let check;

    if(callback ){

        for(index = 0;index<array.length;index++){
           let element = array[index];
            check = callback.apply(thisArg,[element,index,array]);
            if(check === true) result.push(element);
        }     
        return result
    }
  
else {
    throw new Error("Не переданы условия фильтрации");
}
}


//2

function createDebounceFunction(fn, ms) {
let timeout;
    return function(){
        const fnCall = ()=>{
            fn.apply(this,arguments);
        }

        clearTimeout(timeout);

        timeout = setTimeout(fnCall,ms);
    }

  };

