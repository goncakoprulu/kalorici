# Kalorici Mobile App

This project is a simple React Native mobile application using **Expo**. It lets users enter meal descriptions in natural language and stores them locally. Backend integration and NLP parsing will be added later.

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

- `App.tsx` – entry point loading React Navigation.
- `navigation/` – stack navigator configuration.
- `screens/` – contains `LoginScreen` and `HomeScreen` components.
- `app.json` – Expo configuration.
- `package.json` – project dependencies and scripts.

## Next Steps

- Implement NLP parsing of entries (OpenAI GPT or other model).
- Connect to a nutrition database to fetch calorie and macro information.
- Store user data in a backend (e.g., Supabase).
