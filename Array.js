    
class MyFunction{
    constructor(arr){
        this.arr = arr
    }
    at(index){
        console.log(this.arr)
        if(index>=0){
            for(let i=0 ; i<this.arr.length ; i++){
                if(i == index){
                    return this.arr[index]
                }
                if(i >= this.arr.length){
                    return undefined
                }
            }
        }
        else{
            let ind = (this.arr.length) - Math.abs(index)
            for(let i = this.arr.length-1; i>=0 ; i--){
                if(i==ind){
                    return this.arr[ind]
                }
                if(i<0){
                    return undefined
                }
            }
        }


    }

    push(){
        console.log(arguments)
        for(let i=0;i<arguments.length;i++){
            let variable = arguments[i]
            this.arr =  this.arr +","+ variable
        }
        return this.arr // incomplete for deeps
    }

    unshift(){
        for(let i=0;i<arguments.length;i++){
            let variable = arguments[i]
            this.arr =  variable +","+ this.arr
        }
        return this.arr
    }

   concat(arr1,arr2){
        const arr3 = []
        for(let i=0;i<arr1.length;i++){
            arr3.push(arr1[i])
        }
        for(let j=0;j<arr2.length;j++){
            arr3.push(arr2[j])
        }
        return arr3
   } 

   pop(){
        for(let i=0;i<this.arr.length;i++){
            var newarr = arr[arr.length-1]
            return newarr
        }
        
        // let ar = []*this.arr.length-1
        // for(let i=0;i<this.arr.length-1;i++){
        //     ar[i] = this.arr[i]
        // }
        // this.arr = ar
        // return this.arr
        

   }

   shift(){
    for(let i=0;i<this.arr.length;i++){
        var newarr = arr[arr.length-1]
        return newarr
    }
   }

    filter(callback){
        let newarr = []
        for(let i=0;i<this.arr.length;i++){
            let elem = this.arr[i]
            let index = i
            let arr = this.arr
            let ans = callback(elem)
            if(ans === true){
                newarr.push(this.arr[i])
            }
            
        }
        console.log(newarr)
   }

   find(callback){

    for(let i=0;i<this.arr.length;i++){
        let elem = this.arr[i]
        let index = i
        let arr = this.arr
        let ans = callback(elem)
        if(ans===true){
            return elem

        }
    }
    return undefined
   }

   findIndex(callback){
    for(let i=0;i<this.arr.length;i++){
        let elem = this.arr[i]
        let index = i
        let arr = this.arr
        let ans = callback(elem,index)
        if(ans===true){
            return index

        }
    }
    return undefined
   }

   findLast(callback){
    for(let i=this.arr.length-1 ;i>=0;i--){
        let elem = this.arr[i]
        let index = i
        let arr = this.arr
        let ans = callback(elem)
        if(ans===true){
            return elem

        }
    }
    return undefined
   }

   findLastIndex(callback){
    for(let i=this.arr.length-1 ;i>=0;i--){
        let elem = this.arr[i]
        let index = i
        let arr = this.arr
        let ans = callback(elem,index)
        if(ans===true){
            return index

        }
    }
    return undefined
   }

   forEach(callback){
    for(let i=0;i<this.arr.length;i++){
        let elem = this.arr[i]
        let index = i
        let arr = this.arr
        console.log(callback(elem))
        
        
    }
   }

    includes(elem,start){
        if(start< -(this.arr.length)){
            return true
        }
        if(start > this.arr.length){
            return false
        }
        else{
            for(let i=start;i<this.arr.length;i++){
                if(this.arr[i]===elem){
                    return true
                }
            
            }
        }
        return false
   }

   map(callback){
    var newarr = []
    for(let i=0;i<this.arr.length;i++){
        let elem = this.arr[i]
        let index = i
        let array = this.arr
        newarr.push(callback(elem))
    }
    return newarr
   }

   reduce(callback){
    let temp = 0
    for(let i=0;i<this.arr.length;i++){
        let elem = this.arr[i]
        let index = i
        let array = this.arr
        temp += callback(elem)
    }
    return temp
   }

   with(index,value){
    if(index>this.arr.length){
        return "error"
    }
    if(index<-this.arr.length){
        return "error"
    }
    let newarr = []
    for(let i=0;i<this.arr.length;i++){
        if(i !== index){
            newarr.push(this.arr[i])
        }
        else{
            newarr.push(value)
        }
    }
    return newarr
   }

   slice(start,end){
    let newarr = []
    for(let i=start;i<end;i++){
        newarr.push(this.arr[i])
    }
    return newarr
   }

   reverse(){
        let left = 0
        let right = this.arr.length-1
        while(left<=right){
            let temp = this.arr[left]
            this.arr[left] = this.arr[right]
            this.arr[right] = temp
            left+=1
            right-=1
        }
        return this.arr
   }

   toReversed(){
    let newarr = []
    for(let i=this.arr.length-1;i>=0;i--){
        newarr.push(this.arr[i])
    }
    return newarr
   }

   sort(){
    // bubble sort time complexity is O(n square)
    // for(let i=0;i<this.arr.length;i++){
    //     for(let j=i+1; j<this.arr.length;j++){
    //         let a = String(this.arr[j-1]).charCodeAt(0)
    //         let b = String(this.arr[j]).charCodeAt(0)
    //         if(a===b){
    //             let a = String(this.arr[j-1]).charCodeAt(1)
    //             let b = String(this.arr[j]).charCodeAt(1)
    //         }
    //         if(a>b){
    //             let temp = this.arr[j-1]
    //             this.arr[j-1] = this.arr[j]
    //             this.arr[j] = temp
    //             break
    //         }
    //     }

    // }
    // return this.arr

    // better way can be insertion or merge or quick sort


   }


}

let arr = [5, 12, 8, 130, 44]
let obj = new MyFunction(arr)

// console.log(obj.at(2))
// console.log(obj.at(-2))

// console.log(obj.concat(["a", "b", "c"],["d", "e", "f"]))


// let arr2 = [1,2]
// console.log(obj.push(arr2))

// console.log(obj.unshift(arr2))

// console.log(obj.pop())
// obj.pop()
// console.log(arr)

//filter function

// function callback(elem){
//     return elem>=10
// }
// obj.filter(callback)


// find function

// function callback(elem){
//     return elem>=10
// }
// console.log(obj.find(callback))


//findIndex function

// function callback(elem){
//     return elem>=10
// }
// console.log(obj.findIndex(callback))


//findLast function

// function callback(elem){
//     return elem>=45
// }
// console.log(obj.findLast(callback))


//findLastIndex function

// function callback(elem){
//     return elem>=45
// }
// console.log(obj.findLastIndex(callback))


// forEach function

// function callback(elem){
//     return elem+1
// }
// obj.forEach(callback)


//includes function
// let searchElem = 12
// let start = 0
// console.log(obj.includes(searchElem,start))

// map function

// function callback(elem){
//     return elem * 2
// }
// console.log(obj.map(callback))


// reduce function

// function callback(elem){
//     return elem
// }
// console.log(obj.reduce(callback))


// with function
// let index = 2
// let value = 3
// console.log(obj.with(index,value))


//slice function
// let start = 2
// let end = 5
// console.log(obj.slice(start,end))

// reverse function
// console.log(obj.reverse())
// console.log(arr)

// toReversed function
// console.log(obj.toReversed())
// console.log(arr)


// sort function
console.log(obj.sort())