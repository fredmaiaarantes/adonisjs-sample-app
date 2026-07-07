# AdonisJS Sample App

A simple AdonisJS 7 API application with PostgreSQL, built as a companion to the [Galaxy deployment guide](https://galaxycloud.app/guides/deploy-adonisjs).

## Prerequisites

- Node.js 20+
- PostgreSQL

## Setup

```bash
# Clone the repository
git clone https://github.com/CloudByGalaxy/adonisjs-sample-app.git
cd adonisjs-sample-app

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your database credentials and generate an APP_KEY:
node ace generate:key

# Create the database
createdb adonisjs_sample_app

# Run migrations
node ace migration:run

# Start the development server
node ace serve --hmr
```

The app runs on `http://localhost:3333` by default.

## API Endpoints

| Method | Path         | Description                          |
|--------|--------------|--------------------------------------|
| GET    | `/`          | Hello world                          |
| GET    | `/health`    | Health check (returns `{status: "ok"}`) |
| GET    | `/db-check`  | Verify database connectivity         |
| GET    | `/posts`     | List all posts                       |
| POST   | `/posts`     | Create a post (`title`, `content`)   |
| GET    | `/posts/:id` | Get a single post                    |

## Deploying to Galaxy

Follow the step-by-step guide at **[galaxycloud.app/guides/deploy-adonisjs](https://galaxycloud.app/guides/deploy-adonisjs)** to deploy this app with a managed PostgreSQL database.

Key deployment settings:

- **Build command:** `npm run build`
- **Start command:** `node bin/server.js` (from the `build` directory)
- **Pre-deploy command:** `node ace migration:run --force`
- **Health check path:** `/health`

### Required Environment Variables

| Variable       | Description                    |
|----------------|--------------------------------|
| `APP_KEY`      | Application encryption key     |
| `NODE_ENV`     | Set to `production`            |
| `DB_HOST`      | PostgreSQL host                |
| `DB_PORT`      | PostgreSQL port (default 5432) |
| `DB_USER`      | PostgreSQL user                |
| `DB_PASSWORD`  | PostgreSQL password            |
| `DB_DATABASE`  | PostgreSQL database name       |

## License

MIT
