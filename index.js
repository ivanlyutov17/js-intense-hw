'use strict'

const MESSAGE_ERROR = 'Некорректный ввод';


//1 задача
function radixInt(){
let number = +prompt('Введите число');
let radix = +prompt('Введите систему счисления');

(!(isNaN(number)) && !(isNaN(radix)))? 
console.log(number.toString(radix))
:console.log(MESSAGE_ERROR);
}


// 2 задача

function mathInt(){
    let secNum;
    let firstNum = +prompt('Введите число');

    if(isNaN(firstNum) === false)
    secNum = +prompt('Введите второе число');
     else {
        console.log(MESSAGE_ERROR);
    return;}
    
    !isNaN(secNum)?console.log(`Ответ: ${firstNum + secNum},${firstNum - secNum}`):
    console.log(MESSAGE_ERROR);

}


radixInt();
mathInt();
