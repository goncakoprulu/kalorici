# Kalorici Mobile App

This project is a basic scaffold for a React Native mobile application using **Expo**. It will let users enter meal descriptions in natural language. The backend and NLP integration are not implemented yet.

## Getting Started

1. Install dependencies (requires Node.js):
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
   You can then run the app on a simulator or a connected device using the Expo CLI instructions.

## Project Structure

- `App.tsx` – main application file containing a simple text input and list of entered items.
- `app.json` – Expo configuration.
- `package.json` – project dependencies and scripts.

## Next Steps

- Implement NLP parsing of entries (OpenAI GPT or other model).
- Connect to a nutrition database to fetch calorie and macro information.
- Store user data in a backend (e.g., Supabase).
