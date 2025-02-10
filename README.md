# Gerenciamento de Usuários

Este projeto é uma API RESTful para gerenciar usuários, construída com Node.js, Express e MySQL. Ela permite criar, listar, atualizar e deletar usuários, além de buscar usuários por ID.

## Endpoints

- **`POST /users`**: Cria um novo usuário.
- **`GET /users`**: Retorna todos os usuários.
- **`GET /users/:id`**: Retorna um usuário pelo ID.
- **`GET /users/?nome=letra`**: Retorna um usuário pelo nome.
- **`PUT /users/:id`**: Atualiza um usuário pelo ID.
- **`DELETE /users/:id`**: Deleta um usuário pelo ID.

## Tecnologias Usadas
1. Node.Js
2. Express
3. Nodemon
4. MySql
5. dotenv

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Lilianvieiramoura/Dataside
   
2. Navegue até o diretório do projeto:
    ```bash
   cd Dataside

3. Instale as depedências
   ```bash
   npm install

4. Inicie o servidor:
   ```bash
   npm run dev

4. Inicie o container:
   ```bash
   docker-compose up -d


## Para interagir com a API
1. Instale o Postman: Baixe e instale o Postman a partir do site oficial: https://www.postman.com/downloads/

2. Crie uma Collection no Postman: Abra o Postman e clique em "Collections" na barra lateral esquerda.
Clique no botão "New Collection" e dê um nome à sua coleção, por exemplo, "API de Usuários".

3. Adicione as requisições à Collection: Para cada endpoint da sua API, adicione uma nova requisição na coleção:

 **`CRIAR USUÁRIOS (POST/users)`**: 
Método: POST
Body (selecionar 'raw' e 'json'):
![image](https://github.com/user-attachments/assets/a3b4b288-a805-48a6-9222-23657e625d2c)



 **`LISTA TODOS OS USUÁRIOS (GET/users):`**
Método: GET |
![image](https://github.com/user-attachments/assets/1bea4538-b62d-4bb9-b817-4ec7c105b5a2)


**`LISTA OS USUÁRIOS PELA LETRA OU NOME (GET/users/?nome=letra):`**
Parâmetros de consulta:
nome: Filtra usuários cujo nome começa com o valor fornecido.

![image](https://github.com/user-attachments/assets/c4d979c0-e536-4415-8c13-3689974d24a4)


**`OBTER USUÁRIO POR ID (GET/users/:id):`**
Substitua :id pelo ID real do usuário que deseja buscar.
![image](https://github.com/user-attachments/assets/e1a2102b-4c2f-48a3-bf51-8477c1f45966)

   
**`ATUALIZAR USUÁRIO (PUT /users/:id):`**
Método: PUT
Body (selecionar "raw" e "JSON"):
![image](https://github.com/user-attachments/assets/42334d17-2dd1-4260-89b6-dee4c53acd56)


**`EXCLUIR USUÁRIO(DELETE/users/:id):`**
Substitua :id pelo ID do usuário que deseja excluir.
![image](https://github.com/user-attachments/assets/b59715ac-d461-46b9-a6e9-d5607892b88f)


