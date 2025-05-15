// Rotate array by 1 in left

// let arr = [1,2,3,4,5]
// let copy= arr[0]
// for(let i=0; i<=arr.length-2;i++){
//     arr[i+1] = arr[i]  
// }
// arr[arr.length-1] = copy
// console.log(arr)

// Rotate array by 1 in right
// let arr = [1,2,3,4,5]
// console.log(arr)
// let copy= arr[arr.length-1]
// for(let i=arr.length-1; i>0;i--){
//     arr[i] = arr[i-1]  
// }
// arr[0] = copy
// console.log(arr)


// left Rotation by K Element

// function leftRoataionByK (ks,arr){
//     let k = ks%arr.length
//     let count = 0
// for(let i=0 ; i<k; i++){
//     count++
//     let arrCopy = arr[0]
//     for(let j=0 ; j<arr.length-1;j++ ){
//             arr[j] = arr[j+1]
//     }
//     arr[arr.length-1] = arrCopy

// }
// console.log(count)
// return arr
// }
// const array = [1,2,3,4,5]
// console.log(leftRoataionByK(8,array))




// Above Solution is brute force solution 

// New Solution with Maths Algorithum


// const rotateArray = (k,arr) =>{
//     // this is left rotation
// let tempArr = Array(arr.length)

// for(let i=0; i<arr.length; i++){
//     tempArr[i]= arr[(i+k)%arr.length]
// }
// console.log(tempArr)
// }


// let array = [1,2,3,4,5]
// rotateArray(2,array)


const rotateArrayRight = (k,arr)=>{
    let tempArr = Array(arr.length)
for(let i=0; i<arr.length;i++){
tempArr[(i+k)%arr.length] = arr[i]
}

console.log(tempArr)
}

let array = [1,2,3,4,5]
rotateArrayRight(2,array)























