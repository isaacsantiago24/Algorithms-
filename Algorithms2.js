//1 (RANDOM ARRAY)
// Create an array X and fill the array with 10 values, each
//value being a random integer between 0-100.

var arr = [];

for(var i = 0; i <=10; i++)
{
    var x = Math.floor(Math.random() *101);
    arr.push(x);
}

console.log(arr);

// var arr = [];

// for(var i = 0; i <=10; i++)
// {
//     arr.push(random_int);
// }
// Math.floor(Math.random() * 100); //0,0.12, 0.99 // Math.random doesnt include 1

// //Math.floor rounds the number from 100.9999 to 100 
// 0.9999 * 100 = 99.9999


//2 (SWAPPING VALUES)
// write a program that takes an array of numbers, swaps the first and last value
// x = [2,3,5,7,6] ---> x = [6,3,5,7,2]

var x = [2,3,5,7,6];
var temp = x[0];

x[0] = x[x.length-1];

x[x.length-1] = temp;
console.log(x);

//3 REVERSING THE VALUES IN THE ARRAY

var x =[-3,5,1,3,2,10];

for (var i =0; i <Math.floor(x.length/2); i++)
{
    var temp=x[i];
    x[i] = x[x.length-1-i];
    x[x.length-1-i]= temp;
}
console.log(x)

// 4 (INSERT X IN Y)
//if array = [1,3,5,7] x=10 and y=2 ---> [1,3,10,5,7]

var arr=[1,3,5,7];
var x=10;
var y=2;

arr.push(0);

for(var i =arr.length - 1; i > y; i--){
    arr[i] = arr[i-1];
}
arr[y]=x;
console.log(arr);

// [1,3,5,7]
// [1,3,5,7,0]
// [1,3,5,7,7]
// [1,3,5,5,7]
// [1,3,10,5,7]


//5 REMOVING NEGATIVE NUMBERS using POP
// [0,-1,2,-3,4,-5,6] ---> [1,2,4,6]

function removeNegatives(arr)
{
    var numNegatives = 0;
    for(var idx=0; idx <arr.length; idx++)
    {
        if (arr[idx] < 0){
            numNegatives++;
        }
        else {
            arr[idx - numNegatives] = arr[idx];
        }
    }
    while (numNegatives--)
    {
        arr.pop();
    }

    return arr;
}
removeNegatives([0,-1,2,-3,4,-5,6])



