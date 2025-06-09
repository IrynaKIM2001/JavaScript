// *Через Array.prototype. створити власний foreach, filter
let myArray = [1,2,3,4,5];
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
            callback(this[i], i, this);
        }
    }
};
myArray.myForEach((value, i) => {
    console.log(`index ${i}: ${value}`);
});
Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
            if (callback(this[i], i, this)) {
                result.push(this[i]);
            }
        }
    }
    return result;
};
const filtered = myArray.myFilter((value, i) => {
    return value % 2 === 0;
});
console.log(filtered)