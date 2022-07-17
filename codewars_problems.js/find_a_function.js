var FindFunction = function(func, arr) {
    //Complete this function
    let f;
    for(let elem of func)
      {
        //daca elem nu e cifra
        if(isNaN(elem) == true)
          {
            f = elem
            break;
          }
      }
    console.log( arr.filter(element => f(element)) )
  }
 FindFunction( [(a=>a%2==0),9,3,1,0],[1,2,3,4] )



 //ca sa verifici daca e numar: isNaN(..) ; typeof ..
 function FindFunction2(func, arr){
    return arr.filter(func.filter(f => typeof f == 'function')[0]);
  }
console.log(FindFunction2( [(a=>a%2==0),9,3,1,0],[1,2,3,4] ))
