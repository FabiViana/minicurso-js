//Array

// const a = 5;
// const b = 10;

function Title(css, textContent, smallText, otherText ) { // ...values (tras todos os parametros do array)

  return `
    <h1 style="${css[0]}${css[1]}">
      ${textContent}

      <small>${smallText}</small>
      <em>${otherText}<em>
    </h1>`
}
