# Use a clean Node base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy only package files first (improves cache efficiency)
COPY package.json package-lock.json* ./

# Make sure all dependencies (including dev) are installed
RUN npm install --include=dev

# Copy the rest of the application files
COPY . .

# Expose port for Vite dev server
EXPOSE 5173

# Start the Vite server
CMD ["npm", "start"]