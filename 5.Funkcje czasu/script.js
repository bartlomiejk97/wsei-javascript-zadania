// exercise 1
let time = 0;
const interval = setInterval(() => {
    time += 1;
    console.log(`Cześć po raz ${time}`);
    if(time >= 4) {
        clearInterval(interval);
    }
}, 1000);


// exercise 2
let myArray = ['śnieg','zacznie','padać','w','grudniu'];
let myTimer = setTimeout(() => {
    for (let i = 0; i < myArray.length; i++)
      {
        console.log(myArray[i]);
      }
    let j = 0;
    let myInterval = setInterval(() => {
      console.log(myArray[j]);
      j++;
      if(j >= myArray.length)
        {
          clearInterval(myInterval);
        }
    },3000);
},2000);
