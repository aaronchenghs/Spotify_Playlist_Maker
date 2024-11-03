import { useEffect, useState } from "react";
import "./_ChoosePlaylist.styles.css";
import { getUserPlaylists, Playlist } from "../../../../../spotifyServices";
import { getAccessTokenFromUrl } from "../../../../../spotifyAuth";
import MainTextTypography from "../../../../Common/MainTextTypography/MainTextTypography";
import { FilterPlaylistState } from "../../../../../Models/FilterPlaylistModels";

interface ChoosePlaylistProps {
  filterPlaylistState: FilterPlaylistState;
  setFilterPlaylistState: React.Dispatch<
    React.SetStateAction<FilterPlaylistState>
  >;
}

const ChoosePlaylist = ({
  filterPlaylistState,
  setFilterPlaylistState,
}: ChoosePlaylistProps) => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  const onPlaylistClick = (playlist: Playlist) => {
    setFilterPlaylistState((prevState) => ({
      ...prevState,
      playlist,
    }));
  };

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
      {playlists.map((playlist) => {
        const isThisPlaylistSelected =
          filterPlaylistState.playlist?.id === playlist.id;

        return (
          <PlaylistBlock
            key={playlist.id}
            onClick={onPlaylistClick}
            playlist={playlist}
            isSelected={isThisPlaylistSelected}
          />
        );
      })}
    </div>
  );
};

export default ChoosePlaylist;

interface PlaylistBlockProps {
  onClick: (playlist: Playlist) => void;
  isSelected: boolean;
  playlist: Playlist;
}

const PlaylistBlock: React.FC<PlaylistBlockProps> = ({
  playlist,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={`playlist-block ${isSelected && "selected"}`}
      onClick={() => onClick(playlist)}
    >
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
