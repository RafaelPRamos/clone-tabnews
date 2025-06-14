# Clone TabNews

Projeto para aprendizado de desenvolvimento de software, utilizando Next.js e PostgreSQL.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado: versão 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente já vem com o Node.js)
- [Docker](https://www.docker.com/products/docker-desktop) e [Docker Compose](https://docs.docker.com/compose/)
- [PostgreSQL Client (psql)](https://www.postgresql.org/download/) (opcional, para acessar o banco via terminal)

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/clone-tabnews.git
   cd clone-tabnews
   ```

2. **Instale as dependências do projeto:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env.development` na raiz do projeto ou dentro da pasta `infra/` com o seguinte conteúdo (ajuste conforme necessário):

   ```
   DB_USER=postgres
   DB_PASSWORD=local
   DB_NAME=postgres
   ```

## Subindo o Banco de Dados

O projeto utiliza Docker para facilitar o setup do banco de dados.

1. **Suba o banco de dados:**

   ```bash
   npm run docker:db:up
   ```

   Isso irá criar e iniciar um container PostgreSQL acessível na porta 5432.

2. **(Opcional) Acesse o banco de dados via terminal:**

   ```bash
   npm run postgress:up
   ```

   Ou, diretamente pelo Docker:

   ```bash
   docker exec -it postgres-local psql -U postgres -d postgres
   ```

## Executando o Projeto

1. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

   O projeto estará disponível em [http://localhost:3000](http://localhost:3000).

## Scripts Úteis

- `npm run dev` — Sobe o banco (se necessário) e inicia o Next.js em modo desenvolvimento.
- `npm run build` — Gera a build de produção do Next.js.
- `npm start` — Inicia o servidor Next.js em modo produção.
- `npm run docker:db:up` — Sobe o banco de dados PostgreSQL via Docker.
- `npm run docker:db:down` — Para e remove o container do banco de dados.
- `npm run docker:db:logs` — Mostra os logs do banco de dados.
- `npm run postgress:up` — Abre o console do PostgreSQL (psql).

## Testes

Para rodar os testes automatizados:

```bash
npm test
```

## Estrutura do Projeto

```
clone-tabnews/
├── infra/                # Infraestrutura (Docker, banco de dados)
│   └── compose.yaml
├── pages/                # Rotas do Next.js
│   └── api/v1/health/    # Exemplo de endpoint de health check
├── package.json
└── ...
```

## Extensões recomendadas para VS Code

- **ESLint** (`dbaeumer.vscode-eslint`): Linting de código JavaScript/TypeScript.
- **Prettier - Code formatter** (`esbenp.prettier-vscode`): Formatação automática de código.
- **Docker** (`ms-azuretools.vscode-docker`): Gerenciamento de containers e arquivos Docker.
- **vscode-icons** (`vscode-icons-team.vscode-icons`): Ícones para arquivos e pastas.
- **Jest** (`Orta.vscode-jest`): Suporte a testes automatizados com Jest.
- **SQLTools** (`mtxr.sqltools`): Conexão e gerenciamento de bancos de dados SQL.

> **Dica:** Ao abrir o projeto no VS Code, você pode ser solicitado a instalar as extensões recomendadas.

## Configurações realizadas no projeto

- **Prettier:**  
  O projeto utiliza o Prettier para padronização de formatação de código.  
  Scripts disponíveis:

  - `npm run lint:check` — Verifica formatação.
  - `npm run lint:fix` — Corrige formatação automaticamente.

- **ESLint:**  
  Utilizado para garantir boas práticas e evitar erros comuns de JavaScript/React.

- **Docker Compose:**  
  Configuração do banco de dados PostgreSQL via arquivo `infra/compose.yaml`.

- **Scripts npm personalizados:**  
  Scripts para facilitar o gerenciamento do banco de dados e do ambiente de desenvolvimento.

- **Alias de importação (opcional):**  
  Caso utilize imports como `import db from "infra/database"`, configure o arquivo `jsconfig.json` na raiz do projeto:

  ```json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "infra/*": ["infra/*"]
      }
    }
  }
  ```

- [**EditorConfig fo VS Code**](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

- [**WSL**](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)
- [**Remote Explorer**](https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-explorer)
- [**Rmote Development**](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
- [**Remote - Tunnels**](https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-server)
- [**Remote - SSH: Editing Configuration Files**](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh-edit)
- [**Remote - SSH**](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)
- [**Docker**](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [**Dev Containers**](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- [**Container Tools**](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-containers)
- [**Prettier - Code formatter**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [**XML**](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-xml)
- [**ESLint**](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

---

Se tiver dúvidas, consulte a documentação oficial do [Next.js](https://nextjs.org/), [PostgreSQL](https://www.postgresql.org/docs/) ou abra uma issue no
