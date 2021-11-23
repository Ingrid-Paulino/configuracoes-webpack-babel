

module.exports = {
  //1° parte
  //ponto de entrada (entry) que puxa todos os outros arquivos
  entry: './src/index.js',
  // ponto de saida (output)
  output: {
    //path : onde que vai sair o codigo, quando ele for rodado
    //dist: é o nome de uma pasta que é criada sozinha mais pra frente. poderia ser outro nome
    // filename: é o nome do arquivo criado, dentro do dist. tbm pode ser qualquer outro nome
    //__dirname: caminho absoluto da minha maquina. è uma variavel global que me da o exato diretorio que eu estiver trabalhando.
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  //2° parte
  // O webpack não sabe lidar com nenhum tipo de arquivo por padrao. Vc encina para o webpack como ele vai lidar com os arquivos.

  //cada arquivo são tratados como module e terao regras que serão aplicadas.

  //ex1: rules fala -> se terminar com .js, aplica o babel-loader

  //babel-loader é uma ferramenta criada para trabalhar com o webpack e o babel. Ele faz a cola das duas ferramentas, para que o babel consiga aplicar as altomaçoes e deixar os codigos compativeis com as verçoes mais antigas dos navegadores. pra isso funcionar é necessario instalar o babel-loader
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
}