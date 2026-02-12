FROM node:22-alpine AS builder

WORKDIR /app

# Copy all source first to ensure rebuild on any change
COPY . .

# Install and build
RUN npm install --ignore-scripts && npm run build

FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.output /app/.output

ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
