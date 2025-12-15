//.........................................................................GRAPH........................................................................

// class Graph{
//     constructor(){
//         this.Graph={}
//     }
//     addVertex(vertex){
//         if(!this.Graph[vertex]) {
//             this.Graph[vertex]=[]
        
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if(!this.Graph[vertex1]) this.addVertex(vertex1)
//         if(!this.Graph[vertex2]) this.addVertex(vertex2)
//         this.Graph[vertex1].push(vertex2)
//         this.Graph[vertex2].push(vertex1)

//     }
//     removeVertex(vertex){
//         if(this.Graph[vertex]){
//             delete this.Graph[vertex]
//         }
//         for(let key in this.Graph){
//             this.Graph[key]=this.Graph[key].filter((v)=>v!==vertex)
//         }
//     }
//     BFS(start){
//         if(!this.Graph[start]) return 
//         let queue=[start]
//         let result=[]
//         let visited=new Set()
//         visited.add(start)
        
//         while(queue.length){
//             let current=queue.shift()
//             result.push(current)
//           this.Graph[current].forEach((item)=>{
//               if(!visited.has(item)){
//                   queue.push(item)
//                   visited.add(item)
//               }
//           })
//         }
//         return result
//     }
//     DFS(start){
//         if(!this.Graph[start]) return []
//         let stack=[start]
//         let result=[]
//         let visited=new Set()
//         visited.add(start)
        
//         while(stack.length){
//             let current=stack.pop()
//             result.push(current)
//             this.Graph[current].forEach((item)=>{
//                 if(!visited.has(item)){
//                     stack.push(item)
//                     visited.add(item)
//                 }
//             })
//         }
//         return result
//     }
//     ShortesPath(start,end){
//         if(!this.Graph[start] || !this.Graph[end]){
//             return null
//         }
//         let queue=[start]
//         let visited=new Set()
//         visited.add(start)
        
//         while(queue.length){
//             let path=queue.shift()
//             let node=path[path.length-1]
            
//             if(node==end) return path
            
//             for(let item of this.Graph[node]){
//                 if(!visited.has(item)){
//                     visited.add(item)
//                     queue.push([...path,item])
//                 }
//             }
            
//         }
//         return null
//     }
    
// }

// const graph = new Graph();

// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');

// graph.addEdge('A', 'B');
// graph.addEdge('B', 'C');
// graph.addEdge('C', 'D');
// graph.addEdge('D', 'E');

// console.log("Graph before removing a vertex:");
// console.log(graph);

// console.log("Breadth-First Search (BFS) from A:", graph.BSF('A'))
// console.log("Breadth-First Search (BFS) from A:", graph.DSF('A'))

// console.log("ShortesPath",graph.ShortesPath('A',"C"))
