// – Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,
// в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
// Завдання робити через цикли.



for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.classList.add('item');
    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText=`${course.title}`;
    div.appendChild(h1);
    const p = document.createElement('p');
    p.classList.add('description');
    p.innerText=`${course.monthDuration}`;
    div.appendChild(p);
}