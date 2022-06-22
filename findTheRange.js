// Starting array
// let array = [28, 43, -12, 30, 4, 0, -36] ; 

let array =  [1, 4, 11, 2, 37, -4] ; 

// Write your solution below:
let smallestNo = array[0];
let largestNo = array[0];
for(let i = 0; i < array.length ; i++)
{
    if ( array[i] < smallestNo)
    {
        smallestNo = array[i];
    
    }
    else if (array[i]> largestNo)
    {
        largestNo = array[i] ;
    }
}
console.log(`Smallest number is :  ${smallestNo}`);
console.log(`Largest number is :  ${largestNo}`);