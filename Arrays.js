let array = [1,2,3,4,5]
console.log(array)
console.log(array.length)
console.log(array[4])
array.push(6)
console.log(`After Pushing in Array: ${array}`)
array.pop()
console.log(`After popping an array ${array}`)
//Iterate through array 
let array2 = [1,2,3,4,5,6]
console.log("---------Used For Each---------")
array2.forEach((element,index) => {
    console.log(`Index is ${index} and Element is ${element}`)
})

//Filter
let pickEven = array2.filter(number => number % 2 == 0)
 console.log(pickEven)

 //Merge all elements into one

 let mergedNumbers = array2.toString().split(",").join("")
 console.log(typeof mergedNumbers)
 console.log(Number(mergedNumbers))

 //Reverse the array order
 let newArray = [];
 for(let i = array2.length-1 ;i >= 0; i--){
    newArray.push(array2[i])
 }
 console.log(newArray)

 //merge 2 arrays

 let ageLevel1 = [30,40,50];
 let ageLevel2 = [20,60,21]
 let combinedArray = ageLevel1.concat(ageLevel2)
 console.log(combinedArray.sort())
//Sort using filter
let sortedArray = combinedArray.filter((a,b) => a-b);
console.log(sortedArray)

