// class hashTable{
//     constructor(size){
//         this.size=size;
//         this.table=new Array(size)
//     }
//     hash(key){
//         let total=0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     insert(key,value){
//         let index=this.hash(key)
//         let bucket=this.table[index];
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             let a=bucket.find((items)=>items[0]===key)
//             if(a){
//                 a[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     print(){
//         for(let i=0;i<this.size;i++){
//             let buc=this.table[i];
//             console.log(i,buc)
//         }
//     }
// }
// // let ht=new hashTable(10);

// // ht.insert("apple",10) 
// // ht.insert("orange",38)
// // ht.insert("grapes",12)
// // ht.insert("pineapple",16)

// // ht.print()


// let str="Navya"

// class hashTable{
//     constructor(size){
//         this.size=size;
//         this.table=new Array(size);
//     }
//     hash(key){
//         let total=0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size;
//     }
//     insert(key,value){
//         let index=this.hash(key);
//         let bucket=this.table[index];
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             let a=bucket.find((item)=>item[0]==key);
//             if(a){
//                 a[1]=value+1
//             }else{
//                 bucket.push([[key,value]])
//             }
//         }
//     }
//     search(key){
//         let index=this.hash(key);
//         let bucket=this.table[index];
//        if(!bucket){
//            return "No item found"
//        }else{
//        let val=bucket.find((item)=>item[0]==key)
//         return val[1]
//        }
//     }
//     delete(key){
//         let index=this.hash(key);
//         let bucket=this.table[index];
//         this.table[index]=bucket.filter((item)=>item[0]!==key)
//         return true;
//     }
//     print(){
//         for(let i=0;i<this.size;i++){
//             console.log(i,this.table[i])
//         }
//     }
// }

// let ht=new hashTable(10)

// for(i of str){
//     ht.insert(i,1)
// }
// for(let i=str.length-1;i>0;i--){
//     if(ht.search(str[i])==1){
//         console.log(str[i]);
//         break;
//     }
// }