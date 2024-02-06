// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg( intNum , size )

{  
     

    let sum = 0 ;
    let avg = 0;
    for ( let nums of intNum){
        sum = sum + nums
        
         
    }
   
    avg = sum / size
     return avg
     
    
    
    }



let nums = [ 1,3,4,4,5]
let size = nums.length
let avg = make_avg( nums ,size  )
console.log( 'the avg is :', avg)


