## Sobre o projeto

O projeto consiste em buscar o dados de uma organização do github e exibir seus membros, ao clicar em ver mais em cada membro, é possível ver o nome, a data em que a pessoa entro no git, número de seguidores e repositórios.

## Funções do app

Buscar membros na api do github, exibir de 3 em 3 com paginação, buscar detalhes do membro ao clicar em veja mais, filtrar pelo login

## Estrutura de pastas

`src/assets`
Todos arquivos estáticos da aplicação, ex: imagens, fontes.

`src/componentes`
Todos os componentes react que podem ser utilizados em varios lugares da aplicação, cada componente está separado em uma pasta com o arquivo que monta o html e funções e a sua estilização. Ex: (Header, Sidebar, Footer).

`src/pages`
Todas as páginas, que são chamadas individualmente em uma rota, cada página fica em uma pasta com seu arquivo source e sua estilização, uma página pode conter vários componentes, do item acima. Ex: (Home, Posts, Contato).

`src/routes`
Arquivos de configurações de rotas da aplicação.

`src/store`
Arquivos de configurações de dados passados entre os componentes, que podem ser utilizados em qualquer lugar da aplicação, Ex: aqui podem vir as configurações de redux ou context api.

`src/services`
Arquivos de configurações de serviços da aplicação. Ex: configurações da lib usada pra fazer requests a api rest.

`src/styles`
Arquivos de estilos globais da aplicação.

`src/App.js`
Componente principal, que emgloba todos os componentes.

`src/index.js`
Arquivo que renderiza o componente principal App.js

## Tecnologias usadas

**React:** para interface;
**React-router-dom:** para criar as rotas;
**Styled-components:** Lib que permite escrever css/scss dentro do javascript, usado para estilização de componentes com scss, deixando o cód. mais organizado, melhorando questões como reutilização de componentes, e carregamento de arquivos sob demanda, utilização de variáveis do js dentro do css.
**Javascript es6+:** conceitos e funções mais atuais do javascript (como deestruturação, filter, spread operator, map, import/export) que facilitaram principalmente para o desenvolvimento do filtro e da paginação;
**Axios:** Lib para consultas ajax a api do github;
**React Toastify:** Caso de algum erro na request da api, exibe um toast com o erro;
**Context Api React:** Hook useContext, usado para passar a função que exibe o modal do usuário entre os componentes.
**React Hooks:** Todo o app foi feito sem usar classes, somente com os hooks do react como: useEffect, useState, useCallback.

## Scripts disponíveis

Este projeto foi criado com [Create React App](https://github.com/facebook/create-react-app).

No diretorios root do projeto é possível rodar.

### `yarn start`

Roda em modo de desenvolvimento.<br />
Abra [http://localhost:3000](http://localhost:3000) para ver no browser

A página vai ser recarregada a cada edição.<br />
Todos os erros podem ser vistos no console.

### `yarn build`

Faz o build do app para produção, arquivos salvos na pasta `build`.<br />

Todos os arquivos são minificados incluindo hashes.<br />
App pronto para produção!
