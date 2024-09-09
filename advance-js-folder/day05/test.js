/*
Que1: Write a function to find the count of a letter in a string.
Ex: letterCount("giraffe",'g');
output 1

Que2: Write a program to find duplicate values in a given array
Ex: [4,2,34,4,1,12,1,4]; 
output[4,1]

Que3: Write a program to print the Fibonacci series for a given value of N
Ex:fibonacci(9) //0 1 1 2 3 5 8 13 21 ;
fibonacci(5) // 0 1 1 2 3;

hw- fetch(randomuser.data) card html-dom-data fill
*/
function letterCount(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

console.log(letterCount("giraffe", 'g')); // Output: 2




function findDuplicates(arr) {
    let duplicates = [];
    let counts = {};
    for (let i = 0; i < arr.length; i++) {
        if (counts[arr[i]]) {
            counts[arr[i]]++;
        } else {
            counts[arr[i]] = 1;
        }
    }
    for (let key in counts) {
        if (counts[key] > 1) {
            duplicates.push(key);
        }
    }
    return duplicates;
}

console.log(findDuplicates([4, 2, 34, 4, 1, 12, 1, 4])); // Output: [4,1]


function fibonacci(n) {
    let series = [0, 1];
    while (series.length < n) {
        series.push(series[series.length - 1] + series[series.length - 2]);
    }
    return series.slice(0, n);
}

console.log(fibonacci(9)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21]
console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]