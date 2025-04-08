//..............................................................................TRIE IMPLIMENTATION.........................................................................


// class TrieNode{
//     constructor(){
//         this.children=new Array(26).fill(null)
//         this.endOfWord=false
//     }
// }
 
// class Trie{
//     constructor(){
//         this.root=new TrieNode()
//     }
//     insert(word){
//         let node=this.root
//         for(let char of word){
//             let index=this.charCode(char)
//             if(node.children[index]===null){
//                 node.children[index]=new TrieNode()
//             }
//             node=node.children[index]
//         }
//        node.endOfWord=true
//     }
//     charCode(char){
//         return char.charCodeAt(0)-'a'.charCodeAt(0)
//     }
//     search(word){
//         let node=this.root
//         for(let char of word){
//             let index=this.charCode(char)
//             if(node.children[index]===null){
//                 return false
//             }
//             node=node.children[index]
//         }
//         return node.endOfWord
//     }
//     DFS(node,word,result){
//         if(node.endOfWord){
//             result.push(word)
//         }
//         for(let i=0;i<26;i++){
//             if(node.children[i]){
//                 const char=String.fromCharCode(i + 'a'.charCodeAt(0))
//                 this. DFS(node.children[i],word+char,result)
//             }
//         }
//         return result
//     }
//     AutoComplition(prefix){
//         let node=this.root
//         const result=[]
//         for(const char of prefix){
//             const index=this.charCode(char)
//             if(!node.children[index]) return result
//             node=node.children[index]
//         }
//         this.DFS(node,prefix,result)
//         return result
//     }
// }

// const trie = new Trie();
// trie.insert('apple');
// trie.insert('apps');
// trie.insert('apex');
// trie.insert('bat');
// console.log(trie.AutoComplition('a'));
// console.log(trie.AutoComplition('ap')); 
// console.log(trie.AutoComplition('bat')); 
// console.log(trie.AutoComplition('c'));   