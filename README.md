# Sistema de Criptografia de Dados em Nuvem

Este é um projeto simples de sistema seguro de armazenamento e compartilhamento de dados em nuvem, utilizando criptografia avançada. O projeto é dividido em um backend desenvolvido em Node.js com Express para criar um servidor seguro e um frontend desenvolvido em React para interagir com o usuário.

## Configuração do Projeto

### Backend (Node.js)

1. Navegue até o diretório do backend:

   ```bash
   cd backend
   ```

2. Instale as dependências:
```bash
 npm install
 ```

3. Inicie o servidor:
```bash
 node server.js
   ```
O servidor estará disponível em http://localhost:3001.

### Frontend (React)

1. Navegue até o diretório do frontend:
```bash
cd frontend
   ```
2. Instale as dependências:
```bash
npm install
   ```

3. Inicie o aplicativo React:
```bash
npm start
   ```
O aplicativo estará disponível em http://localhost:3000.

### Funcionalidades

Criptografia e Descriptografia: O sistema permite criptografar e descriptografar dados inseridos pelo usuário, utilizando uma chave de criptografia.

### Observações

Este é um exemplo básico e não deve ser utilizado em um ambiente de produção sem medidas de segurança adicionais.

Certifique-se de gerenciar chaves de criptografia de forma segura em ambientes de produção.

A comunicação entre o frontend e o backend deve ser segura, preferencialmente utilizando HTTPS.

### Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) ou enviar pull requests para melhorar este projeto.

### Licença

Este projeto está licenciado sob a MIT License.