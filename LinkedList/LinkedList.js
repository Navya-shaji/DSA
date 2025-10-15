
// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }
// }
// class LinkedList
// {
//     constructor(){
//         this.head=null
//     }
//     addFirst(value){
//         let newNode=new Node(value)
//         if(!this.head){
//             this.head=newNode
//             return 
//         }
//         newNode.next=this.head;
//         this.head=newNode
//     }
//     addLast(value){
//         let newNode=new Node(value)
//         if(!this.head){
//             this.head=newNode
//             return
//         }
//         let current=this.head;
//         while(current.next){
//             current=current.next
//         }
//         current.next=newNode
//     }
//     print(){
//       let current=this.head
//       while(current){
//           console.log(current.value)
//           current=current.next
//       }
//     }
//     Reverse(){
//         let prev=null;
//         let current=this.head;
//         while(current){
//             let next=current.next;
//             current.next=prev;
//             prev=current;
//             current=next
//         }
//         this.head=prev
//     }
//     findMiddle(){
//     if(!this.head) return null
//     if(!this.head.next){
//         return this.head.value
//     }
//     let slow=this.head
//     let fast=this.head
//     while(fast&&fast.next){
//         slow=slow.next
//         fast=fast.next.next
//     }
//     return slow.value
//     }
// }

// const l = new LinkedList();
// l.addFirst(3);
// l.addFirst(4);
// l.addLast(7);
// l.addLast(6);
// l.addLast(10)
// l.print();
// console.log("Reverse starting")
// l.Reverse()
// l.print()
// console.log("Middle element:", l.findMiddle());
// l.print()