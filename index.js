'use strict'

const MESSAGE_ERROR = 'Некорректный ввод';
// 1 функция
const makeObjectDeepCopy = (origObj)=>{
let copObj={};

for(let item in origObj){
    if(origObj[item] instanceof Object){
        copObj[item] = makeObjectDeepCopy(origObj[item]);
        continue;
    }
    copObj[item] = origObj[item];
}
return copObj;

}


// 2

const selectFromInterval = (arr,start,end)=>{
if(typeof arr === 'object'){
    for(let i = 0;i<arr.length;i++){
        if(typeof arr[i] !== 'number'|| isNaN(start) || isNaN(end)) {
            throw new Error(MESSAGE_ERROR);
            break;
        }
    }
    if(start > arr.length) start = arr.length;
    if(end > arr.length) end = arr.length;
        if(start < end){
           let result = arr.slice(start-1,end);
            return result;
        }else {
           let result = arr.slice(end-1,start);
            return result;
        }
}
else throw new Error(MESSAGE_ERROR);

}

// 3

let myIterable = { from:1 , to:4 };

myIterable[Symbol.iterator] =  function(){

if(this.from && this.to){
    if(this.from > this.to || isNaN(this.to) || isNaN(this.from)) throw new Error(MESSAGE_ERROR)
    else{

    return {
        current: this.from,
        last: this.to,
    
    next(){
        if(this.current <= this.last){
            return { done:false, value:this.current++};
        } else 
            return {done:true};
    }
           }
        }      
                        }
else throw new Error(MESSAGE_ERROR);


}

