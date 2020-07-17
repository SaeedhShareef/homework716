// repeat a string beginning
function repeatStringNumTimes(str, num) {
    if (num < 1) {
      return ""; 
      } else if (num === 1) {
     
    return str;
      } else {
        return str + repeatStringNumTimes(str, num -1)
      }
   }
    
   console.log(repeatStringNumTimes("abc", 20));

//    repeat a string end
// truncating a string beginning
   function truncateString(str, num) {
    if(str.length > num) {
      return str.slice(0,num) + '...'
    } else{
    return str;
    }
   }
    
   console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
//    truncating a string ending
// finders keepers beginning
function findElement(arr, func) {
    let num = 0;
    for(var i = 0; i < arr.length; i++) {
      num = arr[i]
      if(func(num)) {
   return num;
      }
    }
    return undefined;
   }
    
   findElement([1, 2, 3, 4], num => num % 2 === 0);
    
   console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
   