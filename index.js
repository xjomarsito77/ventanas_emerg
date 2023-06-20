
const buttonsContainer = document.querySelector('.buttonsContainer');
const modal = document.querySelector('.info');
const closeModalBtn = document.querySelector('.close_modal');
const body = document.body;
const display = document.querySelector(".modal-display")
let input1 = null
let input2 = null
const modalInputs = document.querySelector('.modal-controls');
const processBtn = document.querySelector('.process');
const resetBtn = document.querySelector('.reset');
let funcName = "";
// const arrFunctionsName = [{'name':'Map','inputs':1,},
//                         'Filter',
//                         'ForEach',
//                         'find',
//                         'sort',
//                         'some',
//                         'every',
//                         'concat',
//                         'includes',
//                         'join',
//                         'reduce',
//                         'indexof',
//                         'push',
//                         'pop',
//                         'shift',
//                         'Unshift',
//                         'slice',
//                         'reverse',
//                         'splice',
//                         'lastIndexOf',
//                         'Array.from'];

const arrFunctionsName = [{
    'name': 'Map',
    'inputs': 1, 'type': 'number',
    'content': 'crea un nuevo arreglo con los elementos que fueron modificados por una función.'
},
{
    'name': 'Filter',
    'inputs': 1, 'type': 'number',
    'content': `Permite filtrar los elementos de un arreglo según un criterio especificado. 
                Retorna un nuevo arreglo con todos los elementos que cumplan con dicha condición.`},
{
    'name': 'ForEach',
    'inputs': 0, 'type': '',
    'content': `Permite ejecutar una función proporcionada por cada elemento del arreglo. No retorna un nuevo arreglo, 
                            simplemente itera sobre los elementos y realiza alguna acción definida en la función pasada como argumento.`},
{
    'name': 'Find',
    'inputs': 1, 'type': 'text',
    'content': `Permite encontrar el primer elemento que cumple con una condición especificada. Retorna el valor del primer elemento 
                            encontrado o \'undefined\' si no se encuentra ningún elemento que cumpla con la condición.`},
{
    'name': 'Sort',
    'inputs': '', 'type': '',
    'content': `Permite ordenar los elementos de un arreglo en su lugar, es decir, modifica
                            el arreglo original reordenando sus elementos.`},
{
    'name': 'Push',
    'inputs': 1, 'type': '',
    'content': ' se utiliza para agregar uno o más elementos al final de un arreglo.'
},
{
    'name': 'pop',
    'inputs': 0, 'type': '',
    'content': ' se utiliza para eliminar de un arreglo.'
},
{
    'name': 'slice',
    'inputs': 2, 'type': 'number',
    'content': ' Permite extraer elementos específicos de un arreglo sin modificar el arreglo original.'
},
{
    'name': 'join',
    'inputs': 1, 'type': '',
    'content': 'se utiliza para combinar todos los elementos de un arreglo en una sola cadena de texto' 
},
{
    'name': 'reverse',
    'inputs': 0, 'type': '',
    'content': ' se utiliza para invertir el orden de los elementos en un arreglo'
},
{
    'name': 'shift',
    'inputs': 0, 'type': '',
    'content': ' se utiliza para eliminar el primer elemento de un arreglo y retornarlo.'
},
{
    'name': 'indexOf',
    'inputs': 1, 'type': 'text',
    'content': ' se utiliza para obtener la posición de la primera aparición de un elemento en un arreglo. '
},
{
    'name': 'splice',
    'inputs': 4, 'type': '',
    'content': 'se utiliza para modificar un arreglo al agregar, eliminar o reemplazar elementos en posiciones específicas.'
},
{
    'name': 'unshift',
    'inputs': 1, 'type': '',
    'content': 'se utiliza para agregar uno o más elementos al inicio de un arreglo.'
},
{
    'name': 'concat',
    'inputs': 2, 'type': '',
    'content': 'se utiliza para unir dos o mas arreglos'
},
{
    'name': 'includes',
    'inputs': 1, 'type': 'text',
    'content': 'se utiliza para verificar si un arreglo contiene un determinado elemento'
},
{
    'name': 'from',
    'inputs': 1, 'type': '',
    'content': 'se utiliza para crear un nuevo arreglo a partir de una estructura iterable o un objeto similar a un arreglo.'
},
{
    'name': 'lastIndexOf',
    'inputs': 1, 'type': '',
    'content': 'se utiliza para buscar la última aparición de un elemento en un arreglo y retorna el índice de su posición.'
},
];
let arrToProcess = [];
//crea boton por cada funcion
for (let buttonsAmount = 0; buttonsAmount < arrFunctionsName.length; buttonsAmount++) {
    const newButton = document.createElement('a');
    newButton.id = 'button' + buttonsAmount;
    newButton.setAttribute('function', arrFunctionsName[buttonsAmount].name);
    newButton.classList.add('click');
    newButton.href = '#';
    newButton.textContent = arrFunctionsName[buttonsAmount].name;
    newButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default behavior of the link
        OpenModal(e);
    });
    buttonsContainer.appendChild(newButton);
};

function OpenModal(e) {
    funcName = e.srcElement.text;
    let modalTitle = document.querySelector('.modal_titulo_inf');
    let modalContent = document.querySelector('.modal_parrafo');

    initializeDisplay(funcName);
    const arrFunct = arrFunctionsName.find(obj => obj.name === funcName);
    modalTitle.innerHTML = funcName;
    modalContent.innerHTML = arrFunct.content;
    if (arrFunct != null && arrFunct.inputs > 0) {
        for (let i = 0; i < arrFunct.inputs; i++) {
            const newInput = document.createElement('input');
            newInput.type = arrFunct.type;
            newInput.id = 'input' + i;
            modalInputs.appendChild(newInput);
        }
    }
    processBtn.addEventListener('click', () => processArray(funcName));
    resetBtn.addEventListener('click', () => initializeDisplay(funcName));
    modal.classList.add('modal--show');
}

closeModalBtn.addEventListener('click', (e) => {
    modal.classList.remove('modal--show');
    reset();
});

function createImportScript(script) {
    const newScript = document.createElement('script');
    newScript.setAttribute('src', './scripts/modal_' + script + '.js');
    return newScript;
}

function processArray(funcName) {
    const arrFunct = arrFunctionsName.find((obj) => obj.name === funcName);
  if (
    !Number.isNaN(parseInt(arrFunct.inputs) && parseInt(arrFunct.inputs) > 0)
  ) {
    let input = null;
    if (parseInt(arrFunct.inputs) > 0) {
      input = document.querySelector("#input0");
    }
    if (input != null && input.value == "") {
      return;
    }
  }
    switch (funcName) {
        case 'Map':
            MapArray(arrToProcess);
            break;
        case 'Filter':
            FilterArray(arrToProcess);
            break;
        case 'ForEach':
            ForEachArray(arrToProcess);
            break;
        case 'Find':
            FindArray(arrToProcess);
            break;
        case 'Sort':
            SortArray(arrToProcess);
            break;
        case 'Push':
            PushArray(arrToProcess);
            break;
        case 'pop':
            popArray(arrToProcess);
            break;
        case 'slice':
            sliceArray(arrToProcess);
            break;
        case 'join':
            joinArray(arrToProcess);
            break;
        case 'reverse':
            reverseArray(arrToProcess);
            break;
        case 'shift':
            shiftArray(arrToProcess);
            break;
        case 'indexOf':
            indexOfArray(arrToProcess);
            break;
        case 'splice':
            spliceArray(arrToProcess);
            break;
        case 'unshift':
            unshiftArray(arrToProcess);
            break;
        case 'concat':
            concatArray(arrToProcess);
            break;
        case 'includes':
            includesArray(arrToProcess);
            break;
        case 'from':
            fromArray(arrToProcess);
            break;
        case 'lastIndexOf':
            lastIndexOfArray    (arrToProcess);
            break;
        default:
            break;
    }
}

function initializeDisplay(funcName) {
    switch (funcName) {
        case 'Map':
            MapInitialize();
            break;
        case 'Filter':
            FilterInitialize()
            break;
        case 'ForEach':
            ForEachInitialize()
            break;
        case 'Find':
            FindInitialize()
            break;
        case 'Sort':
            SortInitialize();
            break;
        case 'Push':
            PushInitialize();
            break;
        case 'pop':
            popInitialize();
            break;
        case 'slice':
            sliceInitialize();
            break;
        case 'join':
            joinInitialize();
            break;
        case 'reverse':
            reverseInitialize();
            break;
        case 'shift':
            shiftInitialize();
            break;
        case 'indexOf':
            indexOfInitialize();
            break;
        case 'splice':
            spliceInitialize();
            break;
        case 'unshift':
            unshiftInitialize();
            break;
        case 'concat':
            concatInitialize();
            break;
        case 'includes':
            includesInitialize();
            break;
        case 'from':
            fromInitialize();
            break;
        case 'lastIndexOf':
            lastIndexOfInitialize();
            break;
        default:
            break;
    }
}

function reset() {
    modalInputs.innerHTML = '';
    resetBtn.removeEventListener('click', (e) => {
        e.preventDefault();
        console.log('Button clicked!');
    });
    funcName = "";
}