import React from 'react';
import ReactDOM from 'react-dom';

const meuNome = 'Mario';

ReactDOM.render(
  <div>Nome: {meuNome}</div>,
  document.getElementById('app')
)

console.log('Funcionou tudo junto')