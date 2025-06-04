// – є масив
// let coursesAndDurationArray = [
//     {title: ‘JavaScript Complex’, monthDuration: 5},
// {title: ‘Java Complex’, monthDuration: 6},
// {title: ‘Python Complex’, monthDuration: 6},
// {title: ‘QA Complex’, monthDuration: 4},
// {title: ‘FullStack’, monthDuration: 7},
// {title: ‘Frontend’, monthDuration: 4}
// ];
//

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
    ];
 // — відсортувати його за спаданням за monthDuration
let sortOfMonthDuraction = (array) => {
    return array.sort((a,b)=>b.monthDuration - a.monthDuration)
};
console.log(sortOfMonthDuraction(coursesAndDurationArray));
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
let onlyFiveMonthDuraction = (array) => {
        return array.filter(monthDuraction=>monthDuraction.monthDuration>=5);
}
console.log(onlyFiveMonthDuraction(coursesAndDurationArray));
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let  mapPlusId = (array)=>{
    return array.map((value,index)=>{
        return {
            id: index+1,
            title: value.title,
            monthDuration: value.monthDuration,
        };
    })
}
console.log(mapPlusId(coursesAndDurationArray));
// усі умови
let map1 =coursesAndDurationArray
.sort((a,b)=>b.monthDuration - a.monthDuration)
.filter(monthDuraction=>monthDuraction.monthDuration>=5)
.map((value,index)=>{
    return {
        id: index+1,
        title: value.title,
        monthDuration: value.monthDuration,
    };})
console.log(map1);
