// ......................................................SELECTION SORT.........................................................................

// function SelectionSort(arr){
//     if(arr.length<=1) {
//         return arr
//     }
//     for(let i=0;i<arr.length;i++){
//         let minIndex=i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex=j
//             }
//         }
//         if(minIndex!=i){
//             [arr[minIndex],arr[i]]=[arr[i],arr[minIndex]]
//         }
//     }
//     return arr
// }
// console.log(SelectionSort([7,3,4,5,6]))