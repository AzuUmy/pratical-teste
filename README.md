# estrutura de Back-End

# Aplicação de Gerenciamento de Itens

Esta aplicação é um serviço de gerenciamento de itens que permite realizar operações básicas de CRUD (Create, Read, Update, Delete) para gerenciar itens. A aplicação foi construída utilizando Node.js, TypeScript e NestJS, e utiliza o MongoDB como banco de dados.

## Funcionalidades

- **Criar Itens:** Adicione novos itens ao banco de dados com um nome e descrição.
- **Ler Itens:** Liste todos os itens existentes ou visualize um item específico pelo ID.
- **Atualizar Itens:** Modifique o nome e a descrição de um item existente.
- **Excluir Itens:** Remova itens do banco de dados pelo ID.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript para servidores.
- **TypeScript:** Linguagem de programação que estende o JavaScript com tipagem estática.
- **NestJS:** Framework para construir aplicações Node.js escaláveis e testáveis, baseado em TypeScript.
- **MongoDB:** Banco de dados NoSQL orientado a documentos, utilizado para armazenar itens e suas sequências.

## Estrutura do Projeto

O projeto é organizado da seguinte forma:

- **`src/`**: Contém o código-fonte da aplicação.
  - **`app.controller.ts`**: Controlador principal da aplicação.
  - **`app.service.ts`**: Serviço principal da aplicação.
  - **`items/`**: Módulo relacionado aos itens.
    - **`items.controller.ts`**: Controlador para as operações de CRUD dos itens.
    - **`items.service.ts`**: Serviço que implementa a lógica de negócios dos itens.
    - **`items.module.ts`**: Módulo que encapsula o controlador e o serviço de itens, configurando as dependências e o esquema de dados.
  - **`schemas/`**: Contém os esquemas de dados utilizados pela aplicação.
    - **`item.schema.ts`**: Definição do esquema de dados para itens no MongoDB.
    - **`sequence.schema.ts`**: Definição do esquema de dados para sequências no MongoDB.
  - **`app.module.ts`**: Módulo principal da aplicação que configura os módulos e dependências.
  - **`main.ts`**: Arquivo de entrada que inicializa a aplicação.

## Configuração

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/AzuUmy/pratical-teste.git
   cd pratical-teste
   cd teste-dev
   cd test-dev
2. **download e instalacao de dependencias nescessarias**
   npm install

3. **inicializa o servidor**
   npm run start

   
# Estrutura de Front-End

- **`src/`**: Contém o código-fonte da aplicação frontend.
  - **`components/`**: Contém componentes Vue reutilizáveis.
    - **`Templates/`**: Contém pastas de organização para componentes.
      - **`create-item.vue`**: Componente para criar ou editar um item.
      - **`item-list.vue`**: Componente para listar todos os itens.
  - **`views/`**: Contém as views da aplicação.
    - **`main-page-view.vue`**: View principal que utiliza `item-list` e `create-item`.
    - **`create-item-view.vue`**: View para criação ou edição de itens.
  - **`routes/`**: Contém as definições de rotas para a aplicação.
    - **`router.ts`**: Configura as rotas da aplicação Vue.
  - **`App.vue`**: Componente raiz da aplicação Vue.
  - **`main.ts`**: Arquivo de entrada que inicializa a aplicação Vue.
 
   ```bash
   cd pratical-teste
   cd teste-dev
   cd test-app
2. **download e instalacao de dependencias nescessarias**
   npm install

3. **inicializa o servidor da vite**
   npm run dev


   e possivel utilizar o container docker para rodar aplicacao de forma mais direta

   utiliza o seguinte 

   
