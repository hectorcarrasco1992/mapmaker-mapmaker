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
    for(j = 0;j < arr[i].length;j++){
    if(j === 0){
      newArr.push(arr[i][j])
    } else if (arr[i][j] === ' ') {
      newArr.push(arr[i][j+1])
    }
  }
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
  let left = []
  let num = '1'
  for (let i = 0; i < arr.length; i++){
    if(arr[i] > 0|| arr[i] < 0){
      left.push(num + arr[i])
    }
  }
return left
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