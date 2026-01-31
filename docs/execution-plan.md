# Execution Plan (Pi 5 + Coolify)
1. **Service split (hybrid):** Node.js API for product logic + Python worker for forecasting/ETL.
2. **Containers:** ARM64-friendly Dockerfiles per service.
3. **Local orchestration:** docker-compose with API + worker + Postgres + Redis.
4. **Health checks:** `/health` endpoint for Coolify monitoring.
5. **Docs:** .env template and deployment notes.

## Project Structure
```
services/
  api/           # Node.js API
  worker/        # Python worker

docker-compose.yml
.env.example
```

## Local Development
1. Copy environment variables:
    - `cp .env.example .env`
2. Start services:
    - `docker compose up --build`
3. API health check:
    - http://localhost:3000/health

## Coolify Notes (Pi 5)
- Build on the Pi 5 to ensure ARM64 images.
- Use the `docker-compose.yml` as the stack definition.
- Expose port 3000 for the API service.
- Health check endpoint: `/health`.

## Next Steps
- Define database schema for assets, maintenance events, and demand signals.
- Add background jobs for weather/holiday ingestion.
- Implement forecasting pipeline and vector search.
