const arr = ['1',2,'3',4,'napiss'];
//exercise 1 
console.log(arr[0]);
console.log(arr[1]);

//exercise 2
console.log(arr[arr.length-1]);

// exercise 3
for(let i = 0; i < arr.length; i++)
  {
    console.log(arr[i]);
  }

// exercise 4
for(let i = 0; i < arr.length; i++)
  {
    let myLen = arr.length;
    if(i % 2 == 0)
      {
        console.log(arr[i]);
      }
  }



// exercise 5
for(let i = 0; i < arr.length; i++)
  {
    if(typeof arr[i] === "string")
      {
        console.log(arr[i]);
      }
  }

// exercise 6
for(let i = 0; i < arr.length; i++)
  {
    if(typeof arr[i] === "number")
      {
        console.log(arr[i]);
      }
  }

