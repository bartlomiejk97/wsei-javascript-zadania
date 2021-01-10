let button = document.querySelector('#test-event');
button.addEventListener("click", function (event) {
 
  console.log(event.type);
});

button.addEventListener("mouseover", function (event) {
  
  console.log(event.type);
});

addEventListener("mousemove", function (event){
  
  console.log(event.type);
});

addEventListener("keypress", function (event){

  console.log(event.type);
});

addEventListener("scroll", function (event){

  console.log(event.type);
});

document.querySelector('#input-test').addEventListener("change", function (event){

  console.log(event.type);
});
