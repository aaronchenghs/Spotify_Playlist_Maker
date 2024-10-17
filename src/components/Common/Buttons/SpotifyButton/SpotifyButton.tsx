import React from "react";
import "./_SpotifyButton.styles.css";

interface SpotifyButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const SpotifyButton: React.FC<SpotifyButtonProps> = ({ children, onClick }) => {
  return (
    <button className={"spotifyButton"} onClick={onClick}>
      {children}
    </button>
  );
};

export default SpotifyButton;
