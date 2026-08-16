<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  <h1>Users API</h1>

  <p>Backend desenvolvido com NestJS, Prisma, PostgreSQL e Docker.</p>

  <h2>Requisitos</h2>

  <ul>
    <li>Node.js</li>
    <li>Docker</li>
  </ul>

  <h2>Backend</h2>

  <h3>1. Instale as dependências</h3>

  <pre><code>npm install</code></pre>

  <h3>2. Configure o .env</h3>

  <p>Crie um arquivo <code>.env</code> na raiz do projeto:</p>

  <pre><code>DATABASE_URL="postgresql://postgres:postgres@localhost:5433/users_db?schema=public"</code></pre>

  <h3>3. Inicie o PostgreSQL</h3>

  <pre><code>docker compose up -d</code></pre>

  <h3>4. Execute as migrations</h3>

  <pre><code>npx prisma migrate deploy</code></pre>

  <h3>5. Gere o Prisma Client</h3>

  <pre><code>npx prisma generate</code></pre>

  <h3>6. Inicie o backend</h3>

  <pre><code>npm run start:dev</code></pre>

  <p>O backend estará disponível em:</p>

  <pre><code>http://localhost:3000</code></pre>

  <h2>Frontend</h2>

  <p>Entre na pasta do frontend:</p>

  <pre><code>cd frontend</code></pre>

  <p>Instale as dependências:</p>

  <pre><code>npm install</code></pre>

  <p>Inicie a aplicação:</p>

  <pre><code>npm run dev</code></pre>

  <p>O frontend estará disponível em:</p>

  <pre><code>http://localhost:3001</code></pre>

  <h2>Endpoints</h2>

  <h3>Listar usuários</h3>

  <pre><code>GET http://localhost:3000/users</code></pre>

  <h3>Criar usuário</h3>

  <pre><code>POST http://localhost:3000/users</code></pre>

  <p>Exemplo de body:</p>

  <pre><code>{
  "name": "João Silva",
  "email": "joao@email.com",
  "cpf": "12345678900",
  "favoriteColor": "blue",
  "observation": "Observação do cliente"
}</code></pre>

</body>
</html>
