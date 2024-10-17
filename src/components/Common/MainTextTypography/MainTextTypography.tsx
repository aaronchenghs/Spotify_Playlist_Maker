import React from "react";
import "./_MainTextTypography.styles.css";

type MainTextTypographyProps = {
  tag?: "body" | "p" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  accent?: boolean;
  className?: string;
  htmlFor?: string;
  children: React.ReactNode;
  inverted?: boolean;
};

const MainTextTypography: React.FC<MainTextTypographyProps> = ({
  tag = "body",
  accent,
  children,
  className,
  inverted,
  htmlFor,
}) => {
  const Tag = tag;

  return tag === "label" ? (
    <label htmlFor={htmlFor}> {children}</label>
  ) : (
    <Tag
      className={`${
        inverted ? `invertedAccentTyography` : `accentTypography`
      } ${className ?? ""} ${accent ? "accent" : ""}`}
    >
      {children}
    </Tag>
  );
};

export default MainTextTypography;
