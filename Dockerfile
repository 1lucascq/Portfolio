# Step 1: Build the React app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the source code
COPY . .

# Build the Next.js app
RUN npm run build

# Step 2: Set up Nginx for serving the static site
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Install production dependencies
COPY package.json package-lock.json ./
RUN npm install --only=production

# Copy the built Next.js app from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port that the app runs on
EXPOSE 3000

# Run Next.js app
CMD ["npm", "start"]
