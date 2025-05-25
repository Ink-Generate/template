FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy your app files
COPY . .

# Install dependencies
RUN npm install

# Optional: expose port and set start command
EXPOSE 5173
CMD ["npm", "start"]