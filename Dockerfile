FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the app
RUN npm run build

# Expose the preview port
EXPOSE 4173

# Start the preview server with host flag
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]