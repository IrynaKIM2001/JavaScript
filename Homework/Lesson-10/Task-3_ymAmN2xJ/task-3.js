// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та
// вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

const myForm=document.forms.myForm;
const information=document.getElementById('information');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = myForm.name.value;
    const surnameValue = myForm.surname.value;
    const ageValue = myForm.age.value;
    let obj ={nameValue,surnameValue,ageValue};
    console.log(obj);
    information.innerText=obj.nameValue + ' ' + obj.surnameValue + ' ' + ageValue;
})