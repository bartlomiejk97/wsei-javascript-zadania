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

