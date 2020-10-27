//exercise 1 
function my()
{
  console.log("Udało się!");;
}
my();
//exercise 2
function my(a) {
    return a;
}

console.log( my(2));

/// exercise 3

function getArray(arr) {
    return arr;
}

getArray([1,2]);


/// exercise 4
function myString(paramSTR)
{
  let counter = 0;
  let myInterval = setInterval(() => {
      counter++;
      if(counter == 5)
        {
          console.log(" Koniec! ");
          clearInterval(myInterval);
        }
      else
        {
          console.log(paramSTR);
        }
  },3000); 
}

myString('Ala ma kota');
