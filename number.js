// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function numcheck (number){

if (typeof number !== 'number' ){ 
  return'please input number'} 
  else if ( number < 0 )
  { return ' please enter a positve integer' }
else if ( number === 0 ){
    return ' The number is zero'
}
    else if( number % 2 === 1 ){
    let ifOdd = number * 2;
        return ifOdd;
     }
     
    else { let ifEven = number / 2 ;
return ifEven }



}
console.log( numcheck( 0 ))
