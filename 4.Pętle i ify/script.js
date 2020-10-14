// exercise 1

let numberOne = 3;
let numberTwo = 2;

if(numberOne > numberTwo)
  {
    console.log(numberOne + " jest większe od " + numberTwo);
    
  }
  else
  {
    console.log(numberOne + " jest mniejsze od " + numberTwo);
  }

// exercise 2

let number1 = 1;
let number2 = 5;
let number3 = 3;

if(number1 > number2 && number3)
  {
    console.log("Największe jest: "+ number1);
  }
  else if(number2 > number3)
    {
      console.log("Największe jest: "+ number2);
    }
  else{
    console.log("Największe jest: "+ number3);
  }
  
  // exercise 3
  for(let i = 1; i < 11; i++)
  {
    console.log(i + ". I like JavaScript");
  }

  // exercise 4

let result = 0;
for(let i = 1; i < 11; i++)
  {
    result += i;
  }
console.log(result);
  
  //exercise 5
let n = 5;
for(let i = 0; i <= n; i++)
  {
    console.log(`${i} - ${!i%2 ? `parzysta` : `nieparzysta`}`);
  }
//exercise 6
for( let i = 0; i < 6; i++)
  {
    for(let j = 0; j < 6; j++)
      {
        console.log("i = "+ i + ", j= "+j )
      }
  }


  // exercise 7
for(let i = 0; i < 100; i++)
  {
    if(i % 3 === 0 && i % 5 ===0)
      {
        console.log("FizzBuzz");
      }
      else if( i % 3 === 0)
        {
          console.log("Fizz");
        }
      else if( i % 5 === 0)
        {
          console.log("Buzz");
        }
      else
        {
          console.log(i);
        }
  }
