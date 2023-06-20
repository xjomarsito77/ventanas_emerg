function FillDisplay(result, array) {
  if(typeof(array)=='object'){
    result.innerHTML = "<span>" + array.join("</span><span>") + "</span>";
  }else if(typeof(array)=='string'||typeof(array=='number')){
    result.innerHTML = "<span>" + array + "</span>";
  }
}

//Map Function
function map_generate_array(arr) {
  arr = [];
  for (let i = 1; i <= 50; i++) {
    arr.push(i);
  }
  return arr;
}

function MapArray(arr) {
  let input = document.querySelector("#input0");
  arr = arr.map((item) => {
    return item * parseInt(input.value);
  });
  FillDisplay(display, arr);
  arrToProcess = arr;
}

function MapInitialize() {
  let arr = [];
  arr = map_generate_array(arr);
  FillDisplay(display, arr);
  arrToProcess = arr;
}

//Filter Function
function FilterArray(arr) {
  let input = document.querySelector("#input0");
  arr = arr.filter((item) => {
    return item >= parseInt(input.value);
  });
  FillDisplay(display, arr);
  arrToProcess = arr;
}

function FilterInitialize() {
  let arr = [];
  for (let i = 0; i <= 100; i++) {
    arr.push(i);
  }
  FillDisplay(display, arr);
  arrToProcess = arr;
}

//ForEach Function
function ForEachArray() {
  let forEach_started = false;
  if (forEach_started == false) {
    forEach_started = true;
    let elements = display.childNodes;

    for (let index = 0; index <= elements.length; index++) {
      const item = elements[index];
      setTimeout(() => {
        let last = elements[index - 1];
        if (last) last.classList.remove("selected");
        if (item) item.classList.add("selected");
      }, 300 * index);
    }

    setTimeout(() => {
      forEach_started = false;
    }, 300 * elements.length);
  }
}

function ForEachInitialize(arr) {
  arr = [
    "manzanas",
    "peras",
    "mangos",
    "bananas",
    "kiwi",
    "mandarinas",
    "naranjas",
    "melon",
    "sandias",
    "maracuya",
  ];
  FillDisplay(display, arr);
}

//Find Function
function FindArray(arr) {
  let input = document.querySelector("#input0");
  if (input.value != null && input.value != "") {
    arr = [
      arr.find((item) => {
        return item.toLowerCase() == input.value.toLowerCase();
      }),
    ];
    FillDisplay(display, arr);
  } else {
    input.focus();
  }
  arrToProcess = arr;
}

function FindInitialize() {
  let arr = [
    "Manzana",
    "Uva",
    "Piña",
    "Pera",
    "Mango",
    "Arándano",
    "Banana",
    "Kiwi",
    "Zapote",
    "Sandia",
    "Mandarina",
    "Naranja",
    "Melon",
    "Maracuya",
    "Fresa",
    "Coco",
    "Durazno",
  ];
  FillDisplay(display, arr);
  arrToProcess = arr;
}

//Sort Function
function SortArray(arr) {
    arr = [...arr].sort();
  FillDisplay(display, arr);
  arrToProcess = arr;
}

function SortInitialize() {
  let arr = [
    "Manzana",
    "Uva",
    "Piña",
    "Pera",
    "Mango",
    "Banana",
    "Kiwi",
    "Sandia",
    "Mandarina",
    "Naranja",
    "Melon",
    "Maracuya",
    "Fresa",
    "Coco",
    "Durazno",
  ];
  FillDisplay(display, arr);
  arrToProcess = arr;
}
//push
function PushArray(arr) {
  let input= document.querySelector('#input0')
  arr.push(input.value);
  input.value= ""
FillDisplay(display, arr);
arrToProcess = arr;
}

function PushInitialize() {
let arr = [];
FillDisplay(display, arr);
arrToProcess = arr;
}
// metodo pop
function popArray(arr) {
  arr.pop();
FillDisplay(display, arr);
arrToProcess = arr;
}

function popInitialize() {
let arr = [
  "Manzana",
  "Uva",
  "Piña",
  "Pera",
  "Mango",
  "Banana",
  "Kiwi",
  "Sandia",
  "Mandarina",
  "Naranja",
  "Melon",
  "Maracuya",
  "Fresa",
  "Coco",
  "Durazno",
];
FillDisplay(display, arr);
arrToProcess = arr;
}
// metodo slice
function sliceArray(arr) {
  let input1= document.querySelector('#input0')
  let input2= document.querySelector('#input1')
  arr = [...arr].slice(input1.value,input2.value);
FillDisplay(display, arr);
arrToProcess = arr;
}

function sliceInitialize() {
let arr = [
  "Manzana",
  "Uva",
  "Piña",
  "Pera",
  "Mango",
  "Banana",
  "Kiwi",
  "Sandia",
  "Mandarina",
  "Naranja",
  "Melon",
  "Maracuya",
  "Fresa",
  "Coco",
  "Durazno",
];
FillDisplay(display, arr);
arrToProcess = arr;
}
//join
function joinArray(arr) {
  input1 = document.querySelector('#input0')
  arr = arr.join(input1.value);
FillDisplay(display, arr);
arrToProcess = arr;
}

function joinInitialize() {
let arr = [
  "Manzana",
  "Uva",
  "Piña",
  "Pera",
];

FillDisplay(display, arr);
arrToProcess = arr;
}
//reverse
function reverseArray(arr) {
  arr = [...arr].reverse();
FillDisplay(display, arr);
arrToProcess = arr;
}

function reverseInitialize() {
let arr = [
  "Manzana",
  "Uva",
  "Piña",
  "Pera",
  "Mango",
  "Banana",
  "Kiwi",
  "Sandia",
  "Mandarina",
  "Naranja",
  "Melon",
  "Maracuya",
  "Fresa",
  "Coco",
  "Durazno",
];
FillDisplay(display, arr);
arrToProcess = arr;
}
// shift
function shiftArray(arr) {
  arr = [...arr].shift();
FillDisplay(display, arr);
arrToProcess = arr;
}

function shiftInitialize() {
let arr = [
  "Manzana",
  "Uva",
  "Piña",
  "Pera",
  "Mango",
  "Banana",
  "Kiwi",
  "Sandia",
  "Mandarina",
  "Naranja",
  "Melon",
  "Maracuya",
  "Fresa",
  "Coco",
  "Durazno",
];
FillDisplay(display, arr);
arrToProcess = arr;
}
//indexOf
function indexOfArray(arr) {
  let index = -1;
  let input1 = document.querySelector('#input0');
  index = arr.indexOf(input1.value);
FillDisplay(display, index );
arrToProcess = arr;
}

function indexOfInitialize() {
let arr = [
  "Manzana",
  "Uva",
  "Piña",
  "Pera",
  "Mango",
  "Banana",
  "Kiwi",
  "Sandia",
  "Mandarina",
  "Naranja",
  "Melon",
  "Maracuya",
  "Fresa",
  "Coco",
  "Durazno",
];
FillDisplay(display, arr);
arrToProcess = arr;
}
//splice
function spliceArray(arr) {
  let input0 = document.querySelector('#input0');
  let input1 = document.querySelector('#input1');
  let input2 = document.querySelector('#input2');
  let input3 = document.querySelector('#input3');
  arr.splice(input0.value,input1.value,input2.value,input3.value);
FillDisplay(display, arr);
arrToProcess = arr;
}

function spliceInitialize() {
let arr = [
  "Manzana",
  "Uva",
  "Piña",
  "Pera",
  "Mango",
  "Banana",
  "Kiwi",
  "Sandia",
  "Mandarina",
  "Naranja",
  "Melon",
  "Maracuya",
  "Fresa",
  "Coco",
  "Durazno",
];
FillDisplay(display, arr);
arrToProcess = arr;
}
//unshift
function unshiftArray(arr) {
  let input= document.querySelector('#input0')
  arr.unshift(input.value);
  input.value= ""
FillDisplay(display, arr);
arrToProcess = arr;
}

function unshiftInitialize() {
let arr = [
  "Manzana",
  "Manzana",
  "Uva",
  "Piña",
];
FillDisplay(display, arr);
arrToProcess = arr;
}

//concat
function concatArray(arr) {
  let input0 = document.querySelector('#input0');
  let input1 = document.querySelector('#input1');
  arr = arr.concat(input0.value.split(),input1.value.split());
FillDisplay(display, arr);
arrToProcess = arr;
}

function concatInitialize() {
let arr = [
  "Manzana"
];
FillDisplay(display, arr);
arrToProcess = arr;
}
// inclues
function includesArray(arr) {
  let input= document.querySelector('#input0')
  arr = arr.includes(input.value);
  input.value=""
FillDisplay(display, arr);
arrToProcess = arr;
}

function includesInitialize() {
let arr = [
  "Manzana",
  "Uva",
  "Piña",
  "Pera",
  "Mango",
  "Banana",
  "Kiwi",
  "Sandia",
  "Mandarina",
  "Naranja",
  "Melon",
  "Maracuya",
  "Fresa",
  "Coco",
  "Durazno",
];
FillDisplay(display, arr);
arrToProcess = arr;
}
//from
function fromArray(arr) {
  let input= document.querySelector('#input0')
 arr= Array.from(input.value);
FillDisplay(display, arr);
arrToProcess = arr;
}

function fromInitialize() {
let arr = [];
FillDisplay(display, arr);
arrToProcess = arr;
}
//lastindexOf
function lastIndexOfArray(arr) {
  let input= document.querySelector('#input0')
  arr = arr.lastIndexOf(input.value);
  input.value=""
FillDisplay(display, arr);
arrToProcess = arr;
}

function lastIndexOfInitialize() {
let arr = [
  "Manzana",
  "Uva",
  "Piña",
  "Pera",
  "Mango",
  "Banana"
];
FillDisplay(display, arr);
arrToProcess = arr;
}