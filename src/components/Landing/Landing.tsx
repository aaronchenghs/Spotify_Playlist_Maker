import React from "react";
import SpotifyButton from "../Common/Buttons/SpotifyButton/SpotifyButton";
import MainTextTypography from "../Common/MainTextTypography/MainTextTypography";
import SpotifyLogo from "../../assets/spotify-logo.svg";
import { AppName } from "../../global";
import "./_Landing.styles.css";
import { getSpotifyAuthUrl } from "../../spotifyAuth";

const Landing: React.FC = () => {
  const handleSpotifyLogin = () => {
    window.location.href = getSpotifyAuthUrl();
  };

  return (
    <div className="landing-container">
      <header className="landing-header">
        <MainTextTypography accent tag="h1">
          {AppName}
        </MainTextTypography>
        <p>A quicker way to make your Spotify playlists</p>
      </header>
      <main className="landing-main">
        <section className="features">
          <ul>
            <li>Create playlists by BPM.</li>
            <li>Filter your existing playlists by tempo.</li>
            <li>Automatically sync songs from recent favorites.</li>
          </ul>
        </section>
        <SpotifyButton onClick={handleSpotifyLogin}>
          <MainTextTypography>
            Log in with Spotify{" "}
            <img
              src={SpotifyLogo}
              alt="Spotify Logo"
              className="spotify-logo"
            />
          </MainTextTypography>
        </SpotifyButton>
      </main>
      <footer className="landing-footer">
        <p>
          &copy; 2024 {AppName}. Project by{" "}
          <a
            href={"https://aaroncheng.netlify.app/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Aaron Cheng
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Landing;
