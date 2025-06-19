// – створити блок,
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
div.innerText='OKTEN'
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
div.style.background ='pink';
div.style.color ='red';
div.style.fontSize ='10 px';
document.body.appendChild(div);
const clone = div.cloneNode(true);
document.body.appendChild(clone);
