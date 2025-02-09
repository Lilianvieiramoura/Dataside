# Gerenciamento de Usuários

Este projeto é uma API RESTful para gerenciar usuários, construída com Node.js, Express e MySQL. Ela permite criar, listar, atualizar e deletar usuários, além de buscar usuários por ID.

## Endpoints

- **`POST /users`**: Cria um novo usuário.
- **`GET /users`**: Retorna todos os usuários.
- **`GET /users/:id`**: Retorna um usuário pelo ID.
- **`GET /users/?nome=letra`**: Retorna um usuário pelo nome.
- **`PUT /users/:id`**: Atualiza um usuário pelo ID.
- **`DELETE /users/:id`**: Deleta um usuário pelo ID.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git

2. Navegue até o diretório do projeto:
    ```bash
   cd seu-repositorio

3. Instale as depedências
   ```bash
   npm install

4. Inicie o servidor:
   ```bash
   npm start

## Para interagir com a API
1. Instale o Postman: Baixe e instale o Postman a partir do site oficial: https://www.postman.com/downloads/

2. Crie uma Collection no Postman: Abra o Postman e clique em "Collections" na barra lateral esquerda.
Clique no botão "New Collection" e dê um nome à sua coleção, por exemplo, "API de Usuários".

3. Adicione as requisições à Collection: Para cada endpoint da sua API, adicione uma nova requisição na coleção:

 **`CRIAR USUÁRIOS (POST/users)`**: 
Método: POST |
URL: http://localhost:3003/users |
Body (selecionar 'raw' e 'json'):
  ```json
  {
    "nome": "João Silva",
    "email": "joao.silva@example.com",
    "dataNascimento": "1990-01-01"
  }

**`LISTA TODOS OS USUÁRIOS (GET/users)`**:
Método: GET |
URL: http://localhost:3003/users |
```json
{
    "nome": "João Silva",
    "email": "joao.silva@example.com",
    "dataNascimento": "1990-01-01"
}

 **`LISTA OS USUÁRIOS PELA LETRA OU NOME (GET/users/?nome=letra)`**:

  
   
