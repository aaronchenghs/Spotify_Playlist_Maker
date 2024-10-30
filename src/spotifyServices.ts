/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";

export interface PlaylistImage {
  url: string;
  width?: number;
  height?: number;
}

export interface Playlist {
  id: string;
  name: string;
  images: PlaylistImage[];
  description: string;
  owner: any;
  tracksCount: number;
}

export const getUserPlaylists = async (accessToken: string) => {
  try {
    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/me/playlists`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        limit: 50,
      },
    });

    const playlists = response.data.items.map((playlist: any) => ({
      id: playlist.id,
      name: playlist.name,
      images: playlist.images,
      description: playlist.description,
      owner: playlist.owner.display_name,
      tracksCount: playlist.tracks.total,
    }));

    return playlists;
  } catch (error) {
    console.error("Error fetching playlists:", error);
    return [];
  }
};
