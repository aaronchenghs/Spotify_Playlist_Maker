// src/utils/spotifyAuth.ts

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const SCOPES = [
  "user-read-email",
  "user-read-private",
  "user-library-read",
  "playlist-read-private",
].join("%20");

export const getSpotifyAuthUrl = () => {
  return `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`;
};

export const getAccessTokenFromUrl = () => {
  const hash = window.location.hash;
  if (!hash) return null;

  const params = new URLSearchParams(hash.substring(1));
  return params.get("access_token");
};
