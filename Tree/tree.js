//....................................................................BST.....................................................................................

// class Node{
//     constructor(value){
//         this.value=value;
//         this.left=null;
//         this.right=null;
//     }
// }

// class BST{
//     constructor(){
//         this.root=null
//     }
//     insert(value){
//         const NewNode=new Node(value)
//         if(!this.root){
//             this.root=NewNode
//             return
//         }
//         let current=this.root
//         while(true){
//             if(value<current.value){
//                 if(!current.left){
//                     current.left=NewNode
//                     return
//                 }
//                 current=current.left
//             }else if(value>current.value){
//                 if(!current.right){
//                     current.right=NewNode
//                     return
//                 }
//                 current=current.right
//             }
//         }
//     }
//     include(value){
//         let current=this.root
//         while(current){
//             if(value==current.value) return true
//             if(value<current.value){
//                 current=current.left
//             }else{
//                 current=current.right
//             }
//         }
//         return false
//     }
//     findClosest(target){
//         let current=this.root;
//         let closest=this.root.value
//         while(current){
//             if(Math.abs(target-current.value)<Math.abs(target-closest)){
//                 current=closest
//             }
//             if(target<current.value){
//                 current=current.left
//             }else {
//                 current=current.right
//             }
//         }
//         return closest
//     }
//     findMin(node=this.root){
//         if(!node) return null
//         while(node.left){
//             node=node.left
//         }
//         return node.value
//     }
//     findMax(node=this.root){
//         if(!node ) return null
//         while(node.right){
//             node=node.right
//         }
//          return node.value
//     }
//     findHeight(node=this.root){
//         if(!node) return -1
//         return 1+ Math.max(this.findHeight(node.left),this.findHeight(node.right))
//     }
//     preOrder(node=this.root){
//         if(!node) return 
//         console.log(node.value)
//         this.preOrder(node.left)
//         this.preOrder(node.right)
//     }
//     inOrder(node=this.root){
//         if(!node) return 
//         this.inOrder(node.left)
//         console.log(node.value)
//         this.inOrder(node.right)
//     } 
//     postOrder(node=this.root){
//         if(!node) return 
//         this.postOrder(node.left)
//         this.postOrder(node.right)
//         console.log(node.value)

//     }
//     search(value,node=this.root){
//         if(!node) return 
//         if(value==node.value) return node
//         return value<node.value? this.search(value,node.left):this.search(value,node.right)
//     }
//     isBST(node=this.root,min=-Infinity,max=Infinity){
//         if(!node) return true
//         if(node.value<=min || node.value>=max) return false
//         return this.isBST(node.left,min,node.value) &&  this.isBST(node.right,node.value,max)
//     }
    
// }

// const l=new BST()
// l.insert(3)
// l.insert(1)
// l.insert(5)
// l.insert(23)
// l.insert(28)
// l.insert(51)
// l.insert(15)
// l.insert(65)

// console.log(l)
// console.log(l.include(1))
// console.log(l.include(123))
// console.log(l.findClosest(1))
// console.log(l.findMin())
// console.log(l.findMax())
// console.log(l.findHeight())
// console.log("preOrder")
// l.preOrder()
// console.log("inOrder")
// l.inOrder()
// console.log("postOrder")
// l.postOrder()
// console.log(l.search(5))
// console.log(l.isBST())


//.................................................................SECOND LARGEST............................................................

// class Node{
//     constructor(data){
//         this.value=data
//         this.left=null;
//         this.right=null
//     }
// }
// class BST{
//     constructor(){
//         this.root=null
//     }
//     insert(value){
//         const newNode=new Node(value)
//         if(!this.root){
//             this.root=newNode
//             return 
//         }
//         let current=this.root
//         while(true){
//             if(value<current.value){
//                 if(!current.left){
//                   current.left=newNode
//                   return 
//                 }
//                 current=current.left
//             }else if(value>current.value){
//                 if(!current.right){
//                     current.right=newNode
//                     return
//                 }
//                 current=current.right
//             }
//         }
//     }
//     secondLargest(){
//         let prev=null;
//         let current=this.root
//         while(current && current.right){
//             prev=current
//             current=current.right
//         }
//         if(current && current.left){
//             current=current.left
//             while(current.right) {
//                 current=current.right
//             }
//         }
//         return prev? prev.value:null
//     }
// }
// const l=new BST()
// l.insert(12)
// l.insert(2)
// l.insert(21)
// l.insert(111)
// console.log(l)
// console.log(l.secondLargest());
