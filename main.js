function doubleAll(arr) {
  let newArr = []
  for(i = 0;i < arr.length; i++){
    newArr.push(arr[i] * 2)
  }
  return newArr
}

function absoluteValues(arr) {
  let newArr = []
  for (i = 0; i < arr.length; i++){
    if ( arr[i] >= 0){
      newArr.push(arr[i])
    } else {
      newArr.push(arr[i] * -1)
    }

    
    
  
   }

  return newArr
}

function yelledGreetings(arr) {
  let newArr = []
  
  for (let i = 0; i < arr.length; i++){
    newArr.push(arr[i]+ '!')

  }
  return newArr
}

  
  

function changeToInitials(arr) {
  let newArr = []
  for (i = 0;i < arr.length;i++) {
    const name = arr[i];
    const inital1 = name[0]
    const spaceIndex = name.indexOf(' ')
    const initial2 =name[spaceIndex + 1]
    newArr.push(inital1 + initial2)  
  }
  return newArr
}

function doubleOdd(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++){
  if(arr[i] % 2 === 1 || arr[i] % 2 === -1){
    newArr.push(arr[i] * 2)
  }else {
    newArr.push(arr[i])
  } 
}
   return newArr
}

function upperCaseFirstLetters(arr) {
  let newArr = []
   for(let i = 0; i <arr.length; i++){
  //   if ( i <= 0){
  //     newArr.push(arr[0].toUpperCase())
  //   }
  newArr.push(arr[i] + arr[0])
  
}
return newArr

 
}

function add1ToLeft(arr) {
  let newArr = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
    newArr.push(Number(`1${arr[i] * -1}` * -1))
  } else if (arr[i] >= 0) {
    newArr.push(Number(`1${arr[i]}`))
    }
  }
  return newArr;
 }




module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}