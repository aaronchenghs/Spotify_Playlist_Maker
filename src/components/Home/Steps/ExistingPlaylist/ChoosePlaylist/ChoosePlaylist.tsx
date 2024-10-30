import { useEffect, useState } from "react";
import "./_ChoosePlaylist.styles.css";
import { getUserPlaylists, Playlist } from "../../../../../spotifyServices";
import { getAccessTokenFromUrl } from "../../../../../spotifyAuth";
import MainTextTypography from "../../../../Common/MainTextTypography/MainTextTypography";

const ChoosePlaylist = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const token = getAccessTokenFromUrl();
      if (token) {
        const playlistsData = await getUserPlaylists(token);
        setPlaylists(playlistsData);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <div className="playlist-grid">
      {playlists.map((playlist) => (
        <PlaylistBlock key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
};

export default ChoosePlaylist;

interface PlaylistBlockProps {
  playlist: Playlist;
}

const PlaylistBlock: React.FC<PlaylistBlockProps> = ({ playlist }) => {
  return (
    <div className="playlist-block">
      <div className="image-container">
        {playlist.images.length > 0 && (
          <img
            src={playlist.images[0].url}
            alt={`${playlist.name} thumbnail`}
            className="playlist-image"
          />
        )}
      </div>

      <div className="playlist-info">
        <MainTextTypography tag="h3" className="playlist-name">
          {playlist.name}
        </MainTextTypography>
        <MainTextTypography tag="body" className="playlist-owner">
          Owner: {playlist.owner}
        </MainTextTypography>
        <MainTextTypography tag="body" className="playlist-tracks">
          Tracks: {playlist.tracksCount}
        </MainTextTypography>
      </div>
    </div>
  );
};
