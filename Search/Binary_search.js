//Recursion.........................................................


// function Binary(arr,target,left=0,right=arr.length-1){
//     if(left>right) return -1
//     let mid=Math.floor((left+right)/2)
//     if(arr[mid]==target){
//         return mid
//     }else if(arr[mid]>target){
//         return Binary(arr,target,left,mid-1)
//     }else{
//         return Binary(arr,target,mid+1,right)
//     }
// }

// console.log(Binary([1,2,3,4,5,6,7,8,9,10],7))


//Without recursion.........................................................................

// function Binary(arr,target){
//     let left=0;
//     let right=arr.length-1;
//     while(left<=right){
//     let mid=Math.floor((left+right)/2)
//         if(arr[mid]==target){
//          return mid
//         }  
//         else if(arr[mid]>target){
//             right=mid-1
//         }else{
//             left=mid+1
//         }
//     }
//     return -1
// }

// console.log(Binary([1,2,3,4,5,6,7,8,9,10],10))

