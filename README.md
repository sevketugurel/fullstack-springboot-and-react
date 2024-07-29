# Microservices Example

This repository contains two Spring Boot microservices: `userservice` and `orderservice`, containerized using Docker and managed with Docker Compose.

## Prerequisites

- Docker
- Docker Compose

## Running the Services

1. **Clone the repository**:
  
   git clone <repository_url>
   cd microservices
   

2. **Build and start the services**:

   docker-compose up --build
  

## API Endpoints

### userservice

- **Create User**: `POST /users`
  - Request Body:
    
    {
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
    

### orderservice

- **Create Order**: `POST /orders`
  - Request Body:
    
    {
      "userId": 1,
      "productName": "Product 1",
      "quantity": 2
    }
    

## Usage Example

### Step 1: Create a User


curl -X POST http://localhost:8080/users \
-H "Content-Type: application/json" \
-d '{
    "name": "John Doe",
    "email": "john.doe@example.com"
}'


### Step 2: Create an Order


curl -X POST http://localhost:8081/orders \
-H "Content-Type: application/json" \
-d '{
    "userId": 1,
    "productName": "Product 1",
    "quantity": 2
}'


## Stopping the Services


docker-compose down
