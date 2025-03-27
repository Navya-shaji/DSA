//.......................................................QUEUE IMPLIMENTATION..................................................................

// class Queue{
//     constructor(){
//         this.queue=[]
//     }
//     Enqueue(value){
//         this.queue.push(value)
//     }
//     dequeue(){
//         if(this.queue.length==0){
//             return "UnderFolw"
//         }
//         return this.queue.shift()
//     }
//     peek(){
//         return this.queue[this.queue.length-1]
//     }
//     isEmpty(){
//         return this.queue.length==0? "Empty":"Not Empty"
//     }
//     size(){
//         return this.queue.length
//     }
// }

// const newQueue=new Queue()
// newQueue.Enqueue(3)
// newQueue.Enqueue(32)
// newQueue.Enqueue(4)
// newQueue.Enqueue(13)
// console.log(newQueue)
// console.log(newQueue.dequeue())
// console.log(newQueue.dequeue())
// console.log(newQueue.dequeue())
// console.log(newQueue.dequeue())
// console.log(newQueue.dequeue())


//.....................................................QUEUE WITH STACK.....................................................................

// class Queue{
//     constructor(){
//         this.s1=[]
//         this.s2=[]
//     }
//     Enqueue(value){
//         this.s1.push(value)
//     }
//     dequeue(){
//         if(this.s1.length==0){
//             return "Underflow"
//         }
//         while(this.s1.length<=1){
//             this.s2.push(this.s1.shift())
//         }
//         [this.s1,this.s2]=[this.s2,this.s1]
//         return this.s2.shift()
//     }
// }
// const newQueue=new Queue()
// newQueue.Enqueue(8)
// newQueue.Enqueue(12)
// newQueue.Enqueue(76)
// console.log(newQueue.dequeue())


//........................................................QUEUE USING LINKEDLIST..............................................................

// class Node{
//     constructor(value){
//         this.value=value
//     }
// }
// class Queue{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     enqueue(value){
//         const newNode=new Node(value)
//         if(!this.head){
//           return  this.head=newNode
//         }
//         let current=this.head
//         while(current.next){
//             current=current.next
//         }
//         current.next=newNode
//         this.size++
        
//     }
//     dequeue(){
//         let val=this.head.value
//         this.head=this.head.next
//         this.size--
//         return val
//     }
// }

// const Que=new Queue()
// Que.enqueue(2)
// Que.enqueue(4)
// Que.enqueue(6)
// console.log(Que.dequeue())

