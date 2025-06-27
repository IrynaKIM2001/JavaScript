// створити конвертор ваги з кг в фунти. дані заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const input=document.getElementById('kilo');
const result=document.getElementById('result');
input.oninput=function(){
    result.innerText=+this.value*2.2;
}