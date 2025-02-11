# Backend Repository

This repository contains the backend implementation for the EBUDDY technical test, built with Express.js and Firebase.

## Prerequisites

- Node.js v20 or higher
- Firebase CLI
- Firebase Emulator Suite

## Project Structure

```
backend-repo/
├── config/
│   └── firebaseConfig.ts      # Firebase configuration
├── controller/
│   └── api.ts                 # API controllers
├── core/
│   └── app.ts                 # Express application
├── entities/
│   └── user.ts                # User type definitions
├── middleware/
│   └── authMiddleware.ts      # Authentication middleware
├── repository/
│   └── userCollection.ts      # User firestore collections
└── routes/
      └── userRoutes.ts          # User routes

```

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Set up Firebase Emulator:

   ```bash
   firebase init emulators
   ```

3. Start Firebase Emulators

   ```bash
   npm run dev:emulatos
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run build`: Compiles TypeScript to JavaScript
- `npm run dev`: Run app in development mode
- `npm run dev:emulators`: Starts Firebase emulators
- `npm run lint`: Lint the app

## API Endpoints

### Get User Data

```http
GET /users/:userId
Authorization: Bearer <token>
```

### Update User Data

```http
PATCH /users/:userId
Authorization: Bearer <token>

{
  "totalAverageWeightRatings": number,
  "numberOfRents": number,
  "recentlyActive": number
}
```

## Testing

For local testing, you can use the dummy token:

```http
Authorization: Bearer dummy-token
```
