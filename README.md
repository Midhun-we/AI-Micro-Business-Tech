# Micro-Business Tech Stacks Affiliate Hub

A high-performance, SEO-optimized comparison website for SaaS products.

## Tech Stack
- **Frontend**: Next.js 14+ (App Router), TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL

## Prerequisites
- Node.js (v18+)
- Docker & Docker Compose

## Setup

### 1. Database
Start the PostgreSQL database:
```bash
docker-compose up -d
```

### 2. Backend (Server)
Navigate to the `server` directory:
```bash
cd server
npm install
npm run dev
```
The server runs on http://localhost:5000.

### 3. Frontend (Client)
Navigate to the `client` directory:
```bash
cd client
npm install
npm run dev
```
The client runs on http://localhost:3000.

## Database Seeding
(Instructions to be added after seed script creation)
