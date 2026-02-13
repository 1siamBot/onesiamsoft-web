FROM node:22-alpine AS builder

WORKDIR /app

# Copy everything
COPY . .

# Debug: verify [slug].vue was copied
RUN ls -la app/pages/blog/ && echo "FILES OK"

# Remove macOS artifacts
RUN rm -rf node_modules package-lock.json .output .nuxt

# Install deps fresh
RUN npm install

# Build
RUN npm run build

# Verify slug chunk exists in build
RUN ls .output/server/chunks/build/ | grep -i slug && echo "BUILD OK"

FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.output /app/.output

ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
