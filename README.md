# Platform C

Simulated delayed and noisy market-data API returning commodity prices with TZS and corresponding USD values. The `/api/prices` response sometimes omits the optional `volume` field.

## Endpoints

- `GET /api/prices`
- `GET /api/health`

## Local Development

```bash
npm install
npm run dev
```

Then call:

```bash
curl http://localhost:3003/api/prices
curl http://localhost:3003/api/health
```

## Deploying to Vercel

Deploy this folder as an independent Vercel project:

```bash
vercel
```
