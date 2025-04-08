//......................................................................HEAP IMPIMENTATION..............................................................................

// class Heap {
//     constructor() {
//         this.heap = [];
//     }

//     leftChild(index) {
//         return 2 * index + 1;
//     }

//     rightChild(index) {
//         return 2 * index + 2;
//     }

//     parent(index) {
//         return Math.floor((index - 1) / 2);
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapifyUp();
//     }

//     swap(index1, index2) {
//         [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
//     }

//     heapifyUp() {
//         let index = this.heap.length - 1;
//         while (index > 0 && this.heap[index] < this.heap[this.parent(index)]) {
//             this.swap(index, this.parent(index));
//             index = this.parent(index);
//         }
//     }

//     extractMin() {
//         if (this.heap.length === 0) return null;
//         if (this.heap.length === 1) return this.heap.pop();

//         let min = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown(0);
//         return min;
//     }

//     heapifyDown(index) {
//         let smallest = index;
//         let left = this.leftChild(index);
//         let right = this.rightChild(index);

//         if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
//             smallest = left;
//         }
//         if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
//             smallest = right;
//         }
//         if (smallest !== index) {
//             this.swap(index, smallest);
//             this.heapifyDown(smallest);
//         }
//     }

//     sort() {
//         let heapCopy = new Heap();
//         heapCopy.heap = [...this.heap]; 
//         let sortedArr = [];

//         while (heapCopy.heap.length > 0) {
//             sortedArr.push(heapCopy.extractMin());
//         }
//         return sortedArr;
//     }
// }

// // Testing
// const minHeap = new Heap();
// minHeap.insert(5);
// minHeap.insert(3);
// minHeap.insert(8);
// minHeap.insert(1);

// console.log(minHeap.sort()); // Expected Output: [1, 3, 5, 8]
