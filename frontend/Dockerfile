FROM node:22-alpine AS builder

WORKDIR /app

# Use JSON form of COPY to avoid glob interpretation of brackets [slug].vue
COPY [".", "."]

# Remove macOS artifacts
RUN rm -rf node_modules package-lock.json .output .nuxt

# Verify files
RUN ls -la app/pages/blog/

# Install deps
RUN npm install

# Build
RUN npm run build

# Verify build output
RUN find .output/server/chunks/build -name '*slug*' -o -name '*Slug*'

FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.output /app/.output

ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
