# fabricaautomoveis
Projeto full stack, baseado na prova do SAEP de 2023, que simula o sistema de uma fábrica de automóveis. O sistema permite o cadastro, consulta, atualização e exclusão de informações sobre veículos, clientes, lojas e vendas.

## 🧩 Tecnologias Utilizadas

**Back-end**
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [MySQL (XAMPP)](https://www.apachefriends.org/)

**Front-end**
- HTML5  
- CSS3  
- JavaScript 

**Ambiente de Desenvolvimento**
- [Visual Studio Code](https://code.visualstudio.com/)
- Extensão **Live Server**

---

## ⚙️ Configuração do Ambiente

### 1️⃣  Instale as dependências da API
    cd api
    npm install
### 2️⃣Configure o banco de dados
  -Abra o XAMPP e inicie o Apache e o MySQL.
  -Crie o banco de dados fabrica2025 no phpMyAdmin.

### 3️⃣  Crie o arquivo .env
  -Na pasta /api, crie o arquivo .env com o seguinte conteúdo:
  DATABASE_URL="mysql://root@localhost:3306/fabrica2025"

### 4️⃣  Execute a migração do banco de dados
   npx prisma migrate dev --name init

### 5️⃣ Inicie o servidor da API
    npm run dev

  A API estará rodando em:
  👉 http://localhost:3000

### 6️⃣ Rode o front-end

 -Abra a pasta /web no Visual Studio Code.

 -Clique com o botão direito no arquivo index.html → "Open with Live Server".

 -O front-end será carregado no navegador.

 ### 🚀 Funcionalidades Principais

-  Cadastro, listagem, edição e exclusão de veículos
- Gerenciamento de clientes e lojas
- Registro e consulta de vendas
-  Interface web simples e responsiva
- Integração com API RESTful (Express + Prisma)