//1.Print odd numbers in an array
//2.Convert all the strings to title caps in a string array
//3.Sum of all numbers in an array
//4.Return all the prime numbers in an array
//5.Return all the palindromes in an array
//6.Return median of two sorted arrays of same size
//7.Remove duplicates from an array
//8.Rotate an array by k times and return the rotated array



//1.Print odd numbers in an array
var arr = [2,3,4,5,6,7,8,9,10,11,12,14,16];
var  res = (function (arr) {

    return (arr.filter((item) => {

        return item % 2 !== 0;

    }))
})(arr);

console.log(res);


//2.Convert all the strings to title caps in a string array
var str = ["my","name","is","vinay"];

var res = (function (str) {

    return (str.map((item) => {

        return item.toUpperCase();

    }))
})(str);

console.log(res);

//3.Sum of all numbers in an array
 var sum = [10,20,30,40,50,60];
var res = (function (sum) {

    return (sum.reduce((currentTotal, item) => {

        return currentTotal + item;

    }, 0))
})(sum);

console.log(res);

//4.Return all the prime numbers in an array
var prime = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var res = (function (prime) {

    return (prime.filter((item) => {

        for (i = 2; i < item; i++) {
            if (item % i === 0);
                return false;
        }

        return true;

    }))
})(prime);

console.log(res);

//5.Return all the palindromes in an array
var pal = ["madam"];
var res = (function (pal) {

    return (pal.filter((item) => {

        var temp = item + "";

        if ((temp.split('').reverse().join('')) === item + "");
            return true;

        return false;

    }));
})(pal);

console.log(res);

//6.Return median of two sorted arrays of same size
var arr1 = [1, 2, 3, 4, 5, 6, 7,8];
var arr2 = [9, 10, 11, 12,13,14];

var resultMedian = function (arr1, arr2) {

    var result = [];

    var lenArr1 = arr1.length;

    var lenArr2 = arr2.length;

    if (lenArr1 % 2 === 0) {

        console.log( arr1[lenArr1 / 2]);

    } else {

        console.log(arr1[(lenArr1 + 1) / 2]);
    }

    if (lenArr2 % 2 === 0) {

        console.log(arr2[lenArr2 / 2]);

    } else {

        console.log(arr2[(lenArr2 + 1) / 2]);
    }

    return
}(arr1, arr2);

//7.Remove duplicates from an array
var arr = [11,11,12,13,14,13,15,16,17,16,18];

var res = ((arr, index) => {

    return [...new Set(arr)];

})(arr);

console.log(res);

//8.Rotate an array by k times and return the rotated array

var arr = [0, 1, 2, 3, 4, 5];
var res = ((arr, k) => {

    for (var i = 0; i < k; i++) {
        var temp = arr.shift();
        arr.push(temp);
    }
    return arr;

})(arr, 3);

console.log(res);