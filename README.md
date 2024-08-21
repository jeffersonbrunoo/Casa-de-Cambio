# Casa de Câmbio

Este projeto é uma aplicação de conversão de moedas que permite a conversão de uma moeda para diversas outras. A aplicação foi desenvolvida utilizando HTML, CSS, JavaScript e a API ExchangeRate-API.

## Como o Projeto Foi Desenvolvido:

### 1. Ambiente do Projeto

- Criei um repositório do zero para organizar o código-fonte.
- Iniciei o projeto com NPM para gerenciar as dependências.
- Estruturei o projeto para usar ESModules, configurando o type como module nas tags <script> do HTML.
- Instalei o Vite como ferramenta de desenvolvimento e utilizei o comando npm run dev para iniciar o servidor de desenvolvimento.

### 2. Estrutura da Aplicação

- Estruturei o HTML de acordo com o protótipo, utilizando tags semânticas para melhorar a acessibilidade e a organização do código.
- Criei um layout responsivo e estilizei a aplicação com CSS para proporcionar uma experiência de usuário agradável.

### 3. Interação com a API

- Utilizei o endpoint da API ExchangeRate-API para obter as taxas de câmbio mais recentes.
- A moeda a ser pesquisada é passada como parâmetro no endpoint da API.
- Implementei a lógica para buscar as taxas de câmbio e exibi-las na tela de forma clara e organizada.

### 4. Tratamento de Erro

- Utilizei o Sweet Alert 2 para exibir mensagens de erro amigáveis ao usuário.
- Implementei verificações para garantir que o usuário insira uma moeda válida e exibir mensagens de erro apropriadas quando necessário.

### 5. Estilização

- Segui o [protótipo de alta fidelidade](https://www.figma.com/file/H3gBEiF0F94VESCGx9DD17/Casa-de-C%C3%A2mbio?node-id=0%3A1) para garantir que a aplicação tivesse um design profissional e consistente.
- Apliquei estilos personalizados para melhorar a usabilidade e a aparência da aplicação.
