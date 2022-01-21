// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if(someValue > 42){
      return someValue - 42;
    }
    else if(someValue<42){
      return 42 - someValue ;
      
    }
  }
  function distanceFromHqInFeet(Value){
   return distanceFromHqInBlocks(Value) * 264;
  }
  function distanceTravelledInFeet(start, end){
    return Math.abs((start*264) - (end*264));
  }
 function calculatesFarePrice(start, destination){
   let feet = distanceTravelledInFeet(start, destination)
   if (feet<400){
    return 0;
   }
   else if(feet>400 && feet <2000){
     return (feet - 400) * 0.02;
   }
   else if(feet>2000 && feet <2500){
     return 25;
   }
   else if(feet>2500){
     return 'cannot travel that far';
   }
 
 }
 