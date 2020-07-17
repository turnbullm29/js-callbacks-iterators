var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array. 
// Don't worry about strings in the nested array (misc[5] is considered an array, not a string)

// Your code goes here
var filteredtext = misc.filter(element => {
    if (element > 4) {
        return element;
    }
});
console.log(filteredtext);


/*

const allStrings = misc.filter(element => {
    console.log(element);

    if (typeof element === 'string'){
        return element;
    }
});
console.log(allStrings);
*/

/*