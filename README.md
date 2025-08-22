# URL Shortener with Analytics (Next.js)

## Quick start

1. Install deps
```bash
pnpm i
```

2. Set up env
```bash
cp .env.example .env
```

3. Prisma (SQLite by default)
```bash
pnpm prisma migrate dev --name init
```

4. Run
```bash
pnpm dev
```

- Switch to Postgres by updating `prisma/schema.prisma` provider and `DATABASE_URL`.
- Optional: configure Upstash Redis and MaxMind.

## Tech
- Next.js App Router, TypeScript, Tailwind
- Prisma ORM, NextAuth (Google + Credentials)
- Zod, react-hook-form, Recharts

More docs coming as features land.
