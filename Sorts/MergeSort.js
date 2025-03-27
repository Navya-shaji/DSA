// ......................................................MERGE SORT(NUMBER).........................................................................

// function MergeSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let left=MergeSort(arr.slice(0,mid))
//     let right=MergeSort(arr.slice(mid))
//     return Merge(left,right)
// }
// function Merge(left,right){
//     let Result=[]
    
//     while(left.length&&right.length){
//       if(left[0]<right[0]){
//         Result.push(left.shift())
//       }else{
//         Result.push(right.shift())
//       }
//     }
//     return [...Result,...left,...right]
// }
// console.log(MergeSort([4,3,5,6,7,8]))

//Sort string Using MergeSort.....................

// function StrMerge(str){
//     if(str.length<=1) {
//         return str
//     }
//     let mid=Math.floor(str.length/2)
//     let left=StrMerge(str.slice(0,mid))
//     let right=StrMerge(str.slice(mid))
//     return SMerging(left,right)
// }
// function SMerging(left,right){
//     let Result="";
//     let i=0;
//     let j=0;
//     while(i<left.length&& j<right.length){
//         if(left[i]<right[j]){
//             Result+=left[i]
//             i++
//         }else{
//             Result+=right[j]
//             j++
//         }
//     }

//     while(i<left.length){
//         Result+=left[i]
//         i++
//     }
//     while(j<right.length){
//         Result+=right[j]
//         j++
//     }
//     return Result
// }
// const Str="Datastructure";
// console.log(StrMerge(Str))

