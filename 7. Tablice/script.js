// exercise 1
const arr = ['1',2,'3',4,'napiss'];
arr.forEach( el => {
  console.log(el);
})

//exercise 2 
// a)
console.log(arr[0]);
console.log(arr[1]);
// b)
console.log(arr[arr.length-1]);

// c)
for(let i = 0; i < arr.length; i++)
  {
    console.log(arr[i]);
  }

// d)
for(let i = 0; i < arr.length; i++)
  {
    let myLen = arr.length;
    if(i % 2 == 0)
      {
        console.log(arr[i]);
      }
  }

// e)
for(let i = 0; i < arr.length; i++)
  {
    if(typeof arr[i] === "string")
      {
        console.log(arr[i]);
      }
  }

// f)
for(let i = 0; i < arr.length; i++)
  {
    if(typeof arr[i] === "number")
      {
        console.log(arr[i]);
      }
  }



// exercise 3 
const arr = [1,2,3,4,-5,-7,10];

 //3.1
console.log(arr.reduce((a,b) => a + b));
// 3.2
console.log(arr.reduce((a,b) => a - b));
// 3.3
console.log(arr.reduce((a,b) => a - b / arr.length));
// 3.4
arr.filter((v, i) => v % 2 === 0).forEach(v => {
    console.log(v);
});
// 3.5
arr.filter((v, i) => v % 2 !== 0).forEach(v => {
    console.log(v);
});

// 3.6
let biggest = 0;
arr.forEach(v => {
    if (v > biggest) {
        biggest = v;
    }
});
console.log(biggest);
// 3.7
let smallest = 0;
arr.forEach(v => {
    if (v < smallest) {
        smallest = v;
    }
});
console.log(smallest);
// 3.8
 const arrLength = arr.length - 1;
arr.forEach((v, i) => {
    console.log(arr[arrLength - i]);
});

// exercise 4 
function myTable(paramTable){
  let sum = 0; 
  
  for(let i = 0; i < paramTable.length; i++)
    {
      sum += paramTable[i];
    }
  console.log(sum);
}
myTable([1,2,3,4]);

// exercise 5 
function myTable(paramTable){
  let sum = 0; 
  
  for(let i = 0; i < paramTable.length; i++)
    {
      sum += paramTable[i];
    }
  
  let average = sum / paramTable.length;
  
  for(let i = 0; i < paramTable.length; i++)
      {
        console.log(paramTable[i] * average);
      }
}
myTable([1,2,3,4]);
// exercise 6

function myTable(myparamble)
{
   let sum =0;
   let average;
  for(let i = 0; i < myparamble.length; i++)
    {
      if(myparamble[i] % 2 == 0)
        {
          sum += myparamble[i];
          average = sum / myparamble.length;
        }
      else
        {
          console.log("Liczba nieparzysta to " + myparamble[i]);
        }
      
    }
    
    console.log(average);
}
myTable([2,22,22,44,32,1,3]);

// exercise 7
function tableSort(paramTable)
{
  paramTable.sort();
  for(let i = 0; i < paramTable.length; i++)
    {
      console.log(paramTable[i]);
    }
}
tableSort([10,1,55,13,25,11,15]);


// exercise 10
function ReserveSing(paramTable)
{
  return  paramTable.map(el => {
    return el * (-1);
  })
}
console.log(ReserveSing([1,2,3,4,6,-6]));
