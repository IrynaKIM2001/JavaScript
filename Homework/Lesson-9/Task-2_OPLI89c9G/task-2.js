// – Є масив:
//     [‘Main’,’Products’,’About us’,’Contacts’]
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const ul = document.createElement('ul');
document.body.appendChild(ul);
const list =['Main','Products','About us','Contacts'];

for (const lis of list) {
    const li=document.createElement('li')
    li.innerText=lis;
    ul.appendChild(li);
}
