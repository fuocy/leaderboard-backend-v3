# Leaderboard Backend (v3)

This is the backend for the Leaderboard System that powers custom leaderboards, metric sorting, and live updates. It's built with Express, TypeScript, MongoDB, and Socket.io for real-time communication.

## Environment Setup

Node.js v18.12.0
For simplicity, use the following .env file, which is already connected to the MongoDB database:
MONGO_URI=mongodb+srv://ph1109ji:RNaBjETNPcONVzSv@backenddb.jbrv3.mongodb.net/v3?retryWrites=true&w=majority&appName=BackendDB
PORT=5000

## Features

### Custom Leaderboard Creation

Flexible setup: Game creators can create leaderboards with any number of custom metrics (e.g., "Kills," "Points") to track player performance. Metrics can be either text or numbers.

### Sorting Metrics

Custom sorting: Creators can choose to automatically sort the leaderboard by a numeric metric in descending order, ensuring the leaderboard always reflects the top performers.

### Live Updating Leaderboard

Real-time updates: Using Socket.io, the leaderboard updates live as players' stats change. Every connected player sees the leaderboard update in real-time without refreshing the page.

## Built With

Express: Server framework
TypeScript: Type-safe backend development
MongoDB: Database for leaderboard storage
Socket.io: Real-time updates for leaderboards

## Key Endpoints

/api/leaderboards/create: Create a new leaderboard with custom metrics and sorting.
/api/leaderboards/:gameName: Fetch the leaderboard for a specific game.
Socket.io: Real-time leaderboard updates for players.

This backend uses Express, TypeScript, MongoDB, and Socket.io to deliver a dynamic leaderboard experience with real-time updates and flexible customization for game creators.
