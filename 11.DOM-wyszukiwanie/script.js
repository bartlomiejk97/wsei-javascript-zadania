// exercise 1
const List = document.getElementsByClassName('list');

// exercise 2
function getElByTag(tag) {
  return document.getElementsByTagName(tag);
}

const LI = getElByTag('li');
console.log(lis);

// exercise 3
const list = document.getElementById('list');
console.log(list);

// exercise 4
function Print(params) {
  params.forEach((param) => console.log(document.querySelectorAll(param)));
}

Print(['li', 'ul', 'span', 'div.list span', 'div#spans span']);
