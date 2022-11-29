const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
  ];
  

////////////////////////some/every/////////////////////
// Q1 Does any inventor have the letter 'y' in their name?


//Q2 Does every inventor have the letter 'e' in their name?
result = inventors.every(function(name){
  return name.includes('e')
});
console.log(result)


// Q3 Does every inventor have first name that's longer than 4 characters?
result = inventors.every(function(name){
  return name.split(" ")[0] > 4
});
console.log(result)

/////////////////filter////////////////////////////////////
// Q4 Print out an array of the inventors whose name starts with 'A'.
result = inventors.filter(function(name){
  return name[0] === 'A'
})
console.log(result)
// Q5 Print out an array of the inventors whose name contains 'n'.
result = inventors.filter(function(name){
  return name.includes('n')
})
console.log(result)

////////////////////find/findIndex///////////////////////
// Q6 Find the inventor that has a middle name.
const countSpace = (name) => {
  var count = 0, i;
  for ( i=0; name.Length; i++){
    if (name[i] === " "){
      count++;
    }
    return count;
  }
  result = inventors.find(function(name){
    if (countSpace(name) >=2){
      return name
    }
  });
  console.log(result)


const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
//Q7  Find the number divisible by 7.
result = numbers.find(function(number){
  if (number !=0){
    return number % 7 === 0;
  }
})
console.log(result)

// Q9 Print out an array of the numbers which are prime.
function checkPrime(number){
  var i =0;
  if(number <=1){
  return false;
  }
  for (i=2; i <= number/2; i++){
    if(number % i === 0)
    return false;
  }
  return true;
}
result = numbers.filter(function(number){
  if(checkPrime(number)){
    return number
  }
});
console.log(result)

//   Q10  Print out an array of every number multiplied by 100.
result = numbers.map

// Q11  Given an array, Write a function to reverse the items in that array.
