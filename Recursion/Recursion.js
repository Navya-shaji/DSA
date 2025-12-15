//Find sum of Digits using recursion.......................................................................................


function sumDigits(input){
    if(input<0){
        input=-input
    }
    
    if(input<10){
        return input
    }
    
    let lastDigit=input%10
    
    let Remaining=(input/10)|0
    
    return lastDigit+sumDigits(Remaining)
    
}

let input=12345
console.log(sumDigits(input))

//find the duplicate array in nested array using recursion .............................................................................

// ==========================================================
// 1. FLATTEN A NESTED ARRAY USING RECURSION
// Converts nested arrays into a single-level array
// Example: [1,[2,3],[4,[5]]] → [1,2,3,4,5]
// ==========================================================
function flaten(arr){
    let result = []
    for(let item of arr){
        if(Array.isArray(item)){
            result.push(...flaten(item))
        } else {
            result.push(item)
        }
    }
    return result
}

// ==========================================================
// 2. REMOVE DUPLICATES FROM A NESTED ARRAY
// Uses flatten + Set to remove duplicates
// ==========================================================
function Dup(arr){
    let flated = flaten(arr)
    let visit = new Set()

    for(let item of flated){
        visit.add(item)
    }

    return Array.from(visit)
}

console.log(Dup([1, [2, 3], [4, [5, 2, 3]]]))

// ==========================================================
// 3. PRINT NUMBERS FROM 1 TO N USING RECURSION
// ==========================================================
function Print(n) {
    if(n == 0) return
    Print(n - 1)
    console.log(n)
}

Print(12)

// ==========================================================
// 4. PRINT NUMBERS FROM N TO 1 USING RECURSION
// ==========================================================
function Print(n){
    if(n == 0) return
    console.log(n)
    Print(n - 1)
}

Print(12)

// ==========================================================
// 5. FIND FACTORIAL USING RECURSION
// Example: 5 → 120
// ==========================================================
function Fact(n){
    if(n == 0) return 1
    return n * Fact(n - 1)
}

console.log(Fact(5))

// ==========================================================
// 6. FIND SUM OF FIRST N NATURAL NUMBERS
// Example: 3 → 6
// ==========================================================
function Sum(n) {
    if(n == 0) return 0
    return n + Sum(n - 1)
}

console.log(Sum(2))

// ==========================================================
// 7. REVERSE A NUMBER USING RECURSION
// Example: 123 → 321
// ==========================================================
function ReverseNum(n) {
    if(n == 0) return ""
    let last = n % 10 + ""
    let remaining = (n / 10) | 0
    return last + ReverseNum(remaining)
}

console.log(Number(ReverseNum(56473993)))

// ==========================================================
// 8. FIND POWER OF A NUMBER (a^b) USING RECURSION
// Example: 2^3 → 8
// ==========================================================
function Power(a, b){
    if(b == 0) return 1
    return a * Power(a, b - 1)
}

console.log(Power(2, 2))

// ==========================================================
// 9. FIND SUM OF ARRAY ELEMENTS USING RECURSION
// ==========================================================
function arrSum(arr, i = 0){
    if(i == arr.length) return 0
    return arr[i] + arrSum(arr, i + 1)
}

console.log(arrSum([1,2,3,4,5,6]))

// ==========================================================
// 10. FIND MAXIMUM ELEMENT IN ARRAY USING RECURSION
// ==========================================================
function FindMax(arr, i = 0, max = -Infinity) {
    if(i == arr.length) return max
    return FindMax(arr, i + 1, Math.max(arr[i], max))
}

console.log(FindMax([1,2,3,4,5,6,7]))

// ==========================================================
// 11. CHECK IF ARRAY IS SORTED USING RECURSION
// ==========================================================
function IsSorted(arr, i = 0){
    if(i >= arr.length - 1) return true
    if(arr[i] > arr[i + 1]) return false
    return IsSorted(arr, i + 1)
}

console.log(IsSorted([1,2,3,4,5,6,7]))

// ==========================================================
// 12. REVERSE A STRING USING RECURSION
// Example: "abc" → "cba"
// ==========================================================
function StringReverse(str){
    if(str.length == 0) return ""
    return StringReverse(str.slice(1)) + str[0]
}

console.log(StringReverse("Navyacs"))

// ==========================================================
// 13. CHECK IF STRING IS PALINDROME USING RECURSION
// Example: "MALAYALAM" → true
// ==========================================================
function ISPalidrom(str, l = 0, r = str.length - 1){
    if(l >= r) return true
    if(str[l] !== str[r]) return false
    return ISPalidrom(str, l + 1, r - 1)
}

console.log(ISPalidrom("MALAYALAM"))

// ==========================================================
// 14. CHECK IF A TAG EXISTS IN A DOM TREE USING RECURSION
// ==========================================================
const domTree = {
  tag: 'html',
  children: [
    {
      tag: 'head',
      children: [
        { tag: 'title', children: [] },
        { tag: 'meta', children: [] },
      ],
    },
    {
      tag: 'body',
      children: [
        {
          tag: 'div',
          children: [
            { tag: 'h1', children: [] },
            {
              tag: 'p',
              children: [{ tag: 'span', children: [] }],
            },
          ],
        },
        {
          tag: 'ul',
          children: [
            { tag: 'li', children: [] },
            { tag: 'li', children: [{ tag: 'a', children: [] }] },
          ],
        },
      ],
    },
  ],
}

// Recursively searches for a tag in DOM tree
function isTagExist(domTree, element){
    if(domTree.tag === element) return true
    if(!domTree.children) return false

    for(let item of domTree.children){
        if(isTagExist(item, element)){
            return true
        }
    }
    return false
}

console.log(isTagExist(domTree, 'span'))   // true
console.log(isTagExist(domTree, 'footer')) // false

