# 📚 Booksilia 📚

## 📝 Descrição
Projeto de encerramento do módulo 5 da [Resilia Educação](https://www.resilia.com.br/).
Desenvolvimento de um site de uma livraria que contém todas as funcionalidades básicas do CRUD, implementado com React.js.
A API consumida pela aplicação foi uma adaptação do módulo 4 e se encontra no seguinte repositório: https://github.com/carollyb/bookstore-api.

O projeto proposto, é um sistema de livraria onde o usuário pode realizar seu cadastro e efetuar o login.
Dessa forma, ele poderá acessar o estoque de livros da livraria, realizar o cadastro de um livro novo e a edição ou deleção de livros já inseridos no banco de dados.
Poderá efetuar a listagem de todos os livros registrados, ou pesquisar utilizando o título como parâmetro.

O fluxo de trabalho no desenvolvimento desta aplicação seguiu o modelo GitFlow.

É possível acessar o link do protótipo feito no Figma:
[Protótipo do projeto](https://www.figma.com/file/XTkHiJPlZPJoyxSdPnu6Wx/Projeto---M%C3%B3dulo-5?node-id=0%3A1)

## 🏃 Iniciando o projeto
1. Clone esse repositório em sua máquina: ```$ git clone https://github.com/carollyb/bookstore-api.git```
2. Abra o projeto no VSCode, abra o terminal e assegure-se que está na pasta bookstore-api. Caso esteja em uma pasta acima, execute o seguinte comando:
```cd bookstore-api```
3. Instale as dependências com o comando:
```npm install```
4. Digite ```npm start``` no terminal do seu VSCode para rodar a API.
5. Depois disso, clone o projeto Booksilia em: ```$ git clone https://github.com/carollyb/booksilia.git```
6. Instale as dependências com o comando:
```npm install```
7. Rode o comando ```npm start```

## 👩🏻‍💻 User Story
1. O usuário pode fazer o cadastro, entrando com os inputs de nome completo, username e senha
2. O usuário pode fazer o login com o username e a senha
3. O usuário, após login, pode acessar a página home
4. Caso o usuário não esteja autenticado, a página home renderiza uma mensagem de erro
5. O usuário pode, a partir da página home, acessar o estoque de livros
6. Na página de estoque, o usuário autenticado pode cadastrar, editar e deletar livros, além de ver toda a listagem de livros
7. Caso o usuário não esteja autenticado, a página estoque renderiza uma mensagem de erro
8. O usuário não-autenticado pode acessar todo o catálogo de livros clicando na lupa do header
9. O usuário pode digitar o título de um livro e clicar na lupa do header, e será redirecionado para a página de catálogo com o resultado da busca e o catálogo completo abaixo

## ⚙ Tecnologias Utilizadas

- ![image](https://user-images.githubusercontent.com/77807360/165656549-252a14bc-0e1b-468d-bf27-49357a1f37c0.png)
- ![image](https://user-images.githubusercontent.com/77807360/165656627-cf86aa3d-ddb8-4cec-ad7f-58f7badad065.png)
- ![image](https://user-images.githubusercontent.com/77807360/165658002-8b3f07ac-845b-4337-8fdd-4f391fcb3f93.png)
- ![image](https://user-images.githubusercontent.com/77807360/165657471-b9beb594-76dc-4694-9bf6-2b33d3a9ccf6.png)
- ![image](https://user-images.githubusercontent.com/77807360/165657897-caacb60c-9c74-46ec-a3bd-54fc020c48ad.png)
- ![image](https://user-images.githubusercontent.com/77807360/165657717-40fa2c5b-8457-4114-82b2-ed71175d7001.png)
  
- Bibliotecas
  - React Router Dom
  - Axios
  - React Hook Form
  - Yup
  - React Icons e Chakra Icons

## 💻 Equipe de Desenvolvedores

* [Artur Moretti](https://www.linkedin.com/in/artur-moretti-0653111a1/)

* [Carolly  Barbosa](https://www.linkedin.com/in/carollybarbosa/)

* [Priscila Rossetto](https://www.linkedin.com/in/priscilarossetto/)