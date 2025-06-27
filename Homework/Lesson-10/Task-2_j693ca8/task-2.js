// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

const button=document.getElementById('btn');

button.onclick=function(){
    const inputeAge=document.getElementById('age').value;
    const message=document.getElementById('message');
    const age = parseInt(inputeAge);
   if(age>=18) {
       message.textContent='Ваш вік більше 18'
   }else {
       message.textContent='Ваш вік менше 18'
   }
}