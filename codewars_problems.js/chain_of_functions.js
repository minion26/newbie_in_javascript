function chain(input, fs) {
    // implement the "chain" function
      let result = 0;
      for ( let i of fs)
        {
            result = i(input)
            input = result;
          
        }
    return result;
}
function add(x) {
	return x + 10;	
}

function mult(x) {
	return x * 30;
}
chain(2, [add, mult] )
