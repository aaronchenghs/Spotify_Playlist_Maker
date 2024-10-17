# Spotify BPM Playlist App

A web application built with **TypeScript**, **React**, and **Vite** that allows users to log in with their Spotify account, set a BPM (beats per minute) range, and create or filter playlists around that BPM. The app leverages the **Spotify Web API** for fetching user data and playlists.

## Table of Contents

- [Spotify BPM Playlist App](#spotify-bpm-playlist-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Usage](#usage)
  - [Technologies](#technologies)

## Features

- Log in with Spotify credentials via OAuth.
- Set a BPM range for playlist filtering.
- Filter existing playlists based on BPM.
- Generate new playlists with favorite songs around the selected BPM.
- Responsive design for mobile and desktop devices.

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (or use [yarn](https://yarnpkg.com/))

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/spotify-bpm-playlist-app.git
   cd spotify-bpm-playlist-app
   ```
2. Install dependencies:

```bash
npm install
```

3. Create a .env file in the root directory and add your Spotify API credentials:

```bash
VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
VITE_SPOTIFY_REDIRECT_URI=your_redirect_uri
```

4. Run the development server:

```bash
npm run dev
```

## Usage

1. Log in with your Spotify account.
2. Set your desired BPM (beats per minute) range.
3. Select whether to filter an existing playlist or generate a new one based on recent favorites.
4. Enjoy your BPM-matched playlist!

## Technologies

- **React** – Frontend library for building UI components.
- **TypeScript** – Static type checking for JavaScript.
- **Vite** – Fast development server and build tool.
- **Sass** – CSS preprocessor used for styling.
- **Spotify Web API** – Access Spotify’s music data and user playlists.
