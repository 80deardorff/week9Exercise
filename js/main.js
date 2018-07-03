// let myArr = ['basketball', 'football', 'soccer', 'baseball', 'tennis'];

// console.log(myArr.length);

// for (var i = 0; i < myArr.length; i++) {
//   console.log(myArr[i].length);
// }

// console.log(myArr.reverse());

// for (var i = 0; i < myArr.length; i++) {
//   let myNewArr = myArr.slice();
//   console.log(myNewArr);
// }

// let myNewArr = [];
// for (var i = 0; i < myArr.length; i++) {
//   myNewArr.push(myArr[i]);
// }
// console.log(myNewArr.reverse());

// myArr.sort();

// let myNums = [22, 44, 80, 61, 88];
// myNums.sort(function(a, b){return a - b});

// let myArr = ['one', 'two', 'three'];
//
// myArr.push('four', 'five');
//
// myArr.shift();

// console.log(myArr);

let arr = [];

function display() {
  // CLEARS THE LIST
  list.innerHTML = '';

  // LOOP FOR RUNNING THROUGH THE ARRAY
  for (var i = 0; i < arr.length; i++) {
    // CREATED A VARIABLE FOR THE ITEMS THAT WILL APPEND TO THE LIST
    let listItem = document.createElement('li');
    listItem.textContent = arr[i];
    // APPENDS THE NEW LIST ITEM TO THE LIST
    list.appendChild(listItem);
  }
}

function addToList() {
  if (document.getElementById('userText').value != '') {

    // ADDS THE VALUE OF THE USERS INPUT INTO THE ARRAY
    let userText = document.getElementById('userText');
    arr.push(userText.value);

    // CREATES A VARIABLE FOR THE UNORDERED LIST
    let list = document.getElementById('list');

    // RUNS THE DISPLAY FUNCTION
    display();
    // CLEARS THE TEXT FROM THE INPUT
    userText.value = '';
  }
}

function sortArr() {
  // RUNS THE SORT METHOD ON THE ARRAY
  arr.sort();
  // RUNS THE DISPLAY FUNCTION
  display();
}

function popArr() {
  // RUNS THE POP METHOD ON THE ARRAY
  arr.pop();
  // RUNS THE DISPLAY FUNCTION
  display();
}

function shiftArr() {
  // RUNS THE SHIFT METHOD ON THE ARRAY
  arr.shift();
  // RUNS THE DISPLAY FUNCTION
  display();
}

userText.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("myBtn").click();
  }
});
