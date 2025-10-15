// ....................................................STACK USING ARRAY......................................................................

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.stack.length === 0) {
      console.log("Stack is empty!");
      return null;
    }
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  length() {
    return this.stack.length;
  }

  peek() {
    if (this.stack.length === 0) {
      console.log("Stack is empty!");
      return null;
    }
    return this.stack[this.stack.length - 1];
  }
}

const newStack = new Stack();
newStack.push(2);
newStack.push(3);
newStack.push(4);
newStack.push(6);

console.log("Stack:", newStack.stack);
console.log("Peek:", newStack.peek());
console.log("Pop:", newStack.pop());
console.log("Stack after pop:", newStack.stack);
console.log("Is Empty?", newStack.isEmpty());
console.log("Length:", newStack.length());


//........................................................STACK USING LINKEDLIST.......................................................


// class Node{
//     constructor(value){
//         this.value=value
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     push(value){
//         const newNode=new Node(value)
//         newNode.next=this.head
//         this.head=newNode
//         return newNode
//     }
//     pop(){
//         let val=this.head.value;
//         this.head=this.head.next;
//         this.size--;
//         return val
//     }
//     peek(){
//         return this.stack[this.stack.length]
//     }


// }

// const NewStack=new LinkedList()
// NewStack.push(3)
// NewStack.push(32)
// NewStack.push(31)
// NewStack.push(13)
// console.log(NewStack)

//.....................................................STACK USING QUEUE..................................................................

// class Stack{
//     constructor(){
//         this.q1=[]
//         this.q2=[]
//     }
//     push(value){
//         this.q1.push(value)
//     }
//     pop(){
//         while(this.q1.length>1){
//             this.q2.push(this.q1.shift())
//         }
//         [this.q2,this.q1]=[this.q1,this.q2]
//         return this.q2.shift()
//     }

// }

// const newStack=new Stack()
// newStack.push(2)
// newStack.push(23)
// newStack.push(12)
// console.log(newStack)
// console.log(newStack.pop())
