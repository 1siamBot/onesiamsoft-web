FROM node:22-alpine AS builder

WORKDIR /app

# Copy everything first to bust Docker cache on any source change
COPY . .

# Remove any macOS-specific lock/artifacts
RUN rm -rf node_modules package-lock.json .output .nuxt

# Install deps fresh (no lock file = platform-correct binaries)
RUN npm install

# Build
RUN npm run build

FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.output /app/.output

ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
