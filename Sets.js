//Create a Set using exisitng array
let array = [10,20,30,40,40,50];
let set = new Set(array);
console.log(set)

//Add Element to Set
set.add(99)
console.log(set)
set.delete(50)
console.log(set)

//Element existed or not
console.log(set.has(10))
console.log(set.has(50))

//Size set
console.log(set.size)

//Convert set to array
console.log([...set])