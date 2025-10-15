//Find sum of Digits using recursion.......................................................................................


// function sumDigits(input){
//     if(input<0){
//         input=-input
//     }
    
//     if(input<10){
//         return input
//     }
    
//     let lastDigit=input%10
    
//     let Remaining=(input/10)|0
    
//     return lastDigit+sumDigits(Remaining)
    
// }

// let input=12345
// console.log(sumDigits(input))

//find the duplicate array in nested array using recursion .............................................................................


// function flaten(arr){
//     let result=[]
//     for(let item of arr){
//         if(Array.isArray(item)){
//             result.push(...flaten(item))
//         }else{
//             result.push(item)
//         }
//     }
//     return result
// }
// function Duplicate(arr){
//     let flat=flaten(arr);
//     let seen=new Set()
//     let duplicates=new Set()
//     for(let item of flat){
//         if(seen.has(item)){
//             duplicates.add(item)
//         }else{
//             seen.add(item)
//         }
//     }
//     let b=Array.from( duplicates)
//     return b
// }

// console.log(Duplicate([1, [2, 3], [4, [5, 2, 3]]]))


