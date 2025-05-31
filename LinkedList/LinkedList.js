// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//     }
//     addFirst(data){
//         const newNode=new Node(data)
//         if(!this.head){
//             this.head=newNode
//             return
//         }
//         newNode.next=this.head
//         this.head=newNode
//     }
//     addLast(data){
//         const newNode=new Node(data)
//         if(!this.head)
//         {
//             this.head=newNode
//             return
//         }
//         let current=this.head
//         while(current.next){
//             current=current.next
//         }
//         current.next=newNode
//     }
//     reverse(){
//         let prev=null
//         let current=this.head
//         while(current){
//             const nextNode=current.next
//             current.next=prev
//             prev=current
//             current=nextNode
//         }
//         this.head=prev
//     }
//     print(){
//         console.log(this.head)
//     }
// }

// const ll=new LinkedList()
// ll.addFirst(10)
// ll.addLast(20)
// ll.addLast(30)
// ll.addLast(40)
// ll.reverse()
// ll.print()

// function reverseString(str,i,length){
//     if(i>=length)
//     {
//         return ''
//     }
//     return reverseString(str,i+1,length)+str[i]
// }
// const str='hello'
// console.log(reverseString(str,0,str.length))

class Node{
    constructor(data){
        this.data=data
        this.next=null
        this.prev=null
    }
}
class DoubleLinkedList{
    constructor() {
        this.head=null
    }
    addFirst(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            return
        }
        newNode.next=this.head
        this.head.prev=newNode
        this.head=newNode
    }
    print(){
        console.log(this.head)
    }
    reverse(){
        let current=this.head
        let prev=null
        while(current){
            prev=current.prev
            current.prev=current.next
            current.next=prev
            current=current.prev
        }
        if(prev){
            this.head=prev.prev
        }
    }
}
const dl=new DoubleLinkedList()
dl.addFirst(10)
dl.addFirst(20)
dl.addFirst(30)
dl.addFirst(40)
// dl.reverse()
dl.print()