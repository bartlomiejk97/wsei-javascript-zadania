//exercise 1
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

/exercise 2 
function pressbutton() {
    const buttonEx2 = document.getElementById('ex2')
    buttonEx2.addEventListener('click', enterText => {
        let dataText = enterText.target.dataset.text;
        let belowElement = enterText.target.nextElementSibling;
        
        belowElement.innerText = dataText
    })
}
pressbutton();

// exercise 3
  function switchColor(){
    const myElement = document.getElementById('ex3');
    myElement.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'blue';
    });
    myElement.addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = 'red';
    });
}
switchColor();

//exercise 4
const inputError = document.querySelector('#ex3-err');
const input = document.querySelector('#input-test');
input.addEventListener('keyup', (e) => {
	const reg = /[0-9]/gm;
	const checkIfNumber = e.target.value.match(reg);
	if (checkIfNumber !== null) {
		inputError.innerText = 'You cannot enter numbers here';
	} else {
		inputError.innerText = '';
	}
});

// exercise 5 
const divEx5 = document.getElementById('ex5');
const buttonEx5 = document.getElementById('ex5-button');
let numberOfClick = 0
buttonEx5.addEventListener('click', function counting() {
    numberOfClick++
    if(numberOfClick ==  10) {
        buttonEx5.removeEventListener('click', counting)
    }
    else {
        divEx5.innerHTML = numberOfClick
    }
})


// exercise 6
 function redOrWhiteColor() {
    document.addEventListener('scroll', (event) => {
        var whereAmI = window.scrollY;
        var body = document.querySelector('body');

        if (whereAmI > 200) {
            body.style.backgroundColor = 'red';
        } else {
            body.style.backgroundColor = 'white';
        }
    }); 
}
redOrWhiteColor()
