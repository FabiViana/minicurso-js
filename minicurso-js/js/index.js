//const title = "<h1>Dificuldade</h1>"; //variável const não altera o valor
//BOM -window
//DOM- document

// const title = document.querySelector('h1')


// title.textContent = 'Mudando!!'

// const root = document.querySelector('#root')

// function newElement(tag,content){

//   const title = `<${tag}>${content}</${tag}>` //template string `${}`
//   root.insertAdjacentHTML('beforeend' ,title)
// }

// newElement('h4','Eita')
// newElement('h1','A, vá')

const root = document.querySelector('#root')
const textContent = 'Dificuldade';
const smallText = 'texto pequeno'
const otherText = 'outro texto'

//tagget Templat String

const title = Title `
  color: red;
  ${textContent}
  font-size: 20px;
  ${smallText}
  ${otherText}
`

root.insertAdjacentHTML('beforeend', title)


