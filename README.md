# Task Manager with Apollo Client and NestJS

This project is a simple task manager that uses **Apollo Client** on the frontend (React) and **NestJS** as the backend. The project implements **GraphQL** queries, mutations, and subscriptions to manage tasks in real-time.

## Features

- Add tasks with a title and priority.
- View a list of tasks.
- Real-time updates using GraphQL subscriptions (tasks are automatically updated without needing to refresh the page).
- Each task has a priority (Low, Medium, High) and a completion status.

## Tech Stack

- **Frontend**:
  - React
  - Apollo Client
  - GraphQL
  - CSS (for styling)

- **Backend**:
  - NestJS
  - GraphQL (Apollo Server)
  - WebSockets for subscriptions
  - SQLite for database persistence (optional)

## Requirements

- Node.js (v14 or higher)
- npm or yarn
- A running instance of NestJS API with subscriptions enabled

## Installation

### Frontend (React)

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/task-manager.git
    ```

2. Navigate to the frontend directory:
    ```bash
    cd task-manager/frontend
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Run the React app:
    ```bash
    npm start
    ```

### Backend (NestJS)

1. Clone the repository (if not already done):
    ```bash
    git clone https://github.com/your-username/task-manager.git
    ```

2. Navigate to the backend directory:
    ```bash
    cd task-manager/backend
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Run the NestJS server:
    ```bash
    npm run start
    ```

   By default, the server will be available at `http://localhost:3000`.

## Usage

1. Start both the frontend and backend servers.
2. Open the app in your browser at `http://localhost:3001`.
3. Add tasks using the form.
4. View tasks in the list and watch for real-time updates when new tasks are added.

## API Endpoints

### GraphQL API

- **POST** `/graphql`: This is the main endpoint for all GraphQL queries and mutations.

### Subscription

- **WebSocket** `/graphql`: Used for real-time updates (task additions).

## GraphQL Schema

### Queries

```graphql
query {
  tasks {
    id
    title
    priority
  }
}
```

## Mutations
```graphql
mutation CreateTask($data: CreateTaskInput!) {
  createTask(data: $data) {
    id
    title
    priority
  }
}
```

## Subscriptions
```graphql
subscription {
  taskAdded {
    id
    title
    priority
  }
}
```

## How It Works
React (Frontend):

Uses Apollo Client to send queries and mutations.
Implements subscriptions to receive real-time updates when tasks are added to the server.
NestJS (Backend):

Provides a GraphQL API with queries, mutations, and subscriptions.
When a task is created, the backend triggers a taskAdded.

## Contributing
Feel free to fork the repository and submit pull requests. For bugs or feature requests, please open an issue.




