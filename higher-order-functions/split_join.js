function reverseString(hexString)
{
  //reverse the string
  //step 1 : turining into an array
  let myArray = hexString.split("");
  
  //step 2: reverse the array
  let rev = myArray.reverse();
  
  //step 3: join back into string
  let revString = rev.join("");
  
  return revString;
  //return str.split("").reverse().join("");
}
