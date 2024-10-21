import "./_CopyFooter.styles.css";
import { AppName } from "../../../global";

export const CopyFooter = (
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
);
