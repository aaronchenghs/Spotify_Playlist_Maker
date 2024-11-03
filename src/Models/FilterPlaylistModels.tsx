import { Playlist } from "../spotifyServices";

export interface FilterPlaylistState {
  playlist: Playlist | null;
}

export const DEFAULT_FILTER_STATE = {
  playlist: null,
};
