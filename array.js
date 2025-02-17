console.log("Here is : ", "array")[
  /*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
  (1, 7, 9, 45)
][("Str", "alex", "moh", "the", "fox", "over", "lazy", "dog")];

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
fruits[0];
fruits[1];

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

var food = ["b", "a", "f", "d", "r"];
var sport = ["e", "q", "g"];
var movie = ["p", "i", "o", "l"];

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

function firstOfArray() {
  console.log(arr[0]);
}
var arr = [1, 4, 5];
firstOfArray(arr);

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function lastOfArray() {
  console.log(arr[2]);
}
var arr = [1, 4, 5];
lastOfArray(arr);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var array = [0, 5, 7, 9];
array.shift();
array.shift();
array.shift();
array.unshift(1, 3, 4, 6, 8);
array.push(10);
console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

var array = [0, 5, 7, 9];
array.shift();
array.pop();
array.pop();
array.push(9, -7, 3.5);
console.log(array);

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

/************* 
function middleOfArray(array) {
    var middleIndex = Math.floor(array.length / 2);
    if (array.length % 2 === 1) {
        console.log(array[middleIndex]);
    } else {
        console.log(array.slice(middleIndex - 1, middleIndex + 1).join(" and "));
    }
}

console.log(middleOfArray([1, 4, 5]));
console.log(middleOfArray(["t", "u", "g", "x"]));
*/

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var nums = [1, 2, 3, 8, 9];
nums[0] = 5;
nums[1] = -22;
nums[2] = 3.5;
nums[3] = 44;
nums[4] = 98;
nums[5] = 44;

console.log(nums);

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
var x = 1;
function indexOfArray(nums, x) {
  console.log(nums[x]);
}
var nums = [1, 2, 3, 8, 9];
indexOfArray(nums, x);

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast() {
  nums.pop();
  console.log(nums);
}
var nums = [1, 2, 3, 8, 9];
arrayExceptLast(nums);
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

function addToEnd() {
  nums.pop();
  nums.push(55);
  console.log(nums);
}
var nums = [1, 2, 3, 8, 9];
addToEnd(nums);

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

var sum = 0;
function sumArray() {
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(sum);
}
var nums = [1, 2, 3, 8, 9];
sumArray(nums);

var sum = 0;
function sumArray(nums) {
  var i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  console.log(sum);
}
var nums = [1, 2, 3, 8, 9];
sumArray(nums);

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function minInArray() {
  var min = nums[0];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  console.log(min);
}
var nums = [1, 2, 3, 8, 9];
minInArray(nums);

function minInArray() {
  var min = nums[0];
  var i = 0;
  while (i < nums.length) {
    if (nums[i] < min) {
      min = nums[i];
    }
    i++;
  }
  console.log(min);
}
var nums = [1, 2, 3, 8, 9];
minInArray(nums);

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function removeFromArray(array, x1) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == x1) {
      array.splice(i, 1);
    }
  }
  console.log(array);
}
var nums = [1, 2, 3, 8, 9];
removeFromArray(nums, 3);

function removeFromArray(array, x1) {
  var i = 0;
  while (i < array.length) {
    if (array[i] == x1) {
      array.splice(i, 1);
    }
    i++;
  }
  console.log(array);
}
var nums = [1, 2, 3, 8, 9];
removeFromArray(nums, 3);
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function oddArray(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

var nums = [1, 2, 3, 8, 9];
console.log(oddArray(nums));

function oddArray(arr) {
  var result = [];
  var i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
    i++;
  }
  return result;
}

var nums = [1, 2, 3, 8, 9];
console.log(oddArray(nums));

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function avgArray(arr) {
  var sum = 0;
  var avg;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    avg = sum / arr.length;
  }
  console.log(avg);
}
var nums = [1, 2, 3, 8, 9];
console.log(avgArray(nums));

function avgArray(arr) {
  var sum = 0;
  var avg;
  var i = 0;
  while (i < arr.length) {
    sum = sum + arr[i];
    avg = sum / arr.length;
    i++;
  }
  console.log(avg);
}
var nums = [1, 2, 3, 8, 9];
console.log(avgArray(nums));

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function shorterInArray(arr) {
  var sh = arr[0];
  for (var i = 1; i < sh.length; i++) {
    if (arr[i].length < sh.length) {
      sh = arr[i];
    }
  }
  console.log(sh);
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
shorterInArray(strings);

function shorterInArray(arr) {
  var sh = arr[0];
  var i = 1;
  while (i < sh.length) {
    if (arr[i].length < sh.length) {
      sh = arr[i];
    }
    i++;
  }
  console.log(sh);
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
shorterInArray(strings);

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(string, char) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

var string = "alex mercer madrasa rashed2 emad hala";
var char = "a";
console.log(repeatChar(string, char));

function repeatChar(string, char) {
  var count = 0;
  var i = 0;
  while (i < string.length) {
    if (string.charAt(i) === char) {
      count++;
    }
    i++;
  }
  return count;
}

var string = "alex mercer madrasa rashed2 emad hala";
var char = "a";
console.log(repeatChar(string, char));

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenIndexOddLength(arr) {
  var x = [];
  for (var i = 0; i < arr.length; i += 2) {
    if (arr[i].length % 2 !== 0) {
      x.push(arr[i]);
    }
  }
  console.log(x);
}

var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(evenIndexOddLength(strings));

function evenIndexOddLength(arr) {
  var x = [];
  var i = 0;
  while (i < arr.length) {
    if (arr[i].length % 2 !== 0) {
      x.push(arr[i]);
    }
    i += 2;
  }
  console.log(x);
}

var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(evenIndexOddLength(strings));

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function powerElementIndex(arr) {
  var x = [];
  for (var i = 0; i < arr.length; i++) {
    x.push(Math.pow(arr[i], i));
  }
  console.log(x);
}
var nums = [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(nums));

function powerElementIndex(arr) {
  var x = [];
  var i = 0;
  while (i < arr.length) {
    x.push(Math.pow(arr[i], i));
    i++;
  }
  console.log(x);
}
var nums = [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(nums));

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenNumberEvenIndex(nums) {
  var x = [];
  for (var i = 0; i < nums.length; i += 2) {
    if (nums[i] % 2 === 0) {
      x.push(nums[i]);
    }
  }
  console.log(x);
}
var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
console.log(evenNumberEvenIndex(nums));

function evenNumberEvenIndex(nums) {
  var x = [];
  var i = 0;
  while (i < nums.length) {
    if (nums[i] % 2 === 0) {
      x.push(nums[i]);
    }
    i += 2;
  }
  console.log(x);
}
var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
console.log(evenNumberEvenIndex(nums));
