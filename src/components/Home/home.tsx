import React, { useState, useEffect, useMemo } from "react";
import "./_Home.styles.css";
import { CopyFooter } from "../Common/CopyFooter/CopyFooter";
import MainTextTypography from "../Common/MainTextTypography/MainTextTypography";
import ChoosePlaylist from "./Steps/ExistingPlaylist/ChoosePlaylist/ChoosePlaylist";
import ChooseFilters from "./Steps/ExistingPlaylist/ChooseFilters/ChooseFilters";
import NavigationHeader from "./NavigationHeader";
import {
  DEFAULT_FILTER_STATE,
  FilterPlaylistState,
} from "../../Models/FilterPlaylistModels";

type Choice = "create" | "filter";

const Home: React.FC = () => {
  // Animation state
  const [contentHeight, setContentHeight] = useState("85vh");
  const [footerVisible, setFooterVisible] = useState(true);

  const [filterPlaylistState, setFilterPlaylistState] =
    useState<FilterPlaylistState>(DEFAULT_FILTER_STATE);

  // Step State
  const [choice, setChoice] = useState<Choice>("create");
  const [step, setStep] = useState(0);

  /**
   * Animation effect to hide the footer and content
   * when the component is first mounted.
   */
  useEffect(() => {
    const timeoutHeight = setTimeout(() => {
      setContentHeight("0px");
    }, 50);

    const timeoutFooter = setTimeout(() => {
      setFooterVisible(false);
    }, 700);

    return () => {
      clearTimeout(timeoutHeight);
      clearTimeout(timeoutFooter);
    };
  }, []);

  const handleChoice = (choice: Choice) => {
    setChoice(choice);
    setStep(1);
  };

  const FilterSteps = useMemo(
    () => [
      () => (
        <ChoosePlaylist
          filterPlaylistState={filterPlaylistState}
          setFilterPlaylistState={setFilterPlaylistState}
        />
      ),
      () => (
        <ChooseFilters
          filterPlaylistState={filterPlaylistState}
          setFilterPlaylistState={setFilterPlaylistState}
        />
      ),
    ],
    [filterPlaylistState]
  );

  const CreateSteps = useMemo(
    () => [
      () => (
        <div>
          <MainTextTypography tag="h3">Create Step 1</MainTextTypography>
        </div>
      ),
      () => (
        <div>
          <MainTextTypography tag="h3">Create Step 2</MainTextTypography>
        </div>
      ),
    ],
    []
  );

  const content = useMemo(() => {
    if (step === 0) {
      return <ChooseContent onChoose={handleChoice} />;
    }

    return choice === "create"
      ? CreateSteps[step - 1]()
      : FilterSteps[step - 1]();
  }, [step, choice, CreateSteps, FilterSteps]);

  const initialContent = (
    <div
      className={`initialHomeContainer ${
        footerVisible ? "fade-in" : "fade-out"
      } `}
    >
      <div className="initialContent" style={{ height: contentHeight }}></div>
      {CopyFooter}
    </div>
  );

  return footerVisible ? (
    initialContent
  ) : (
    <div className="homeContainer">
      {step > 0 && (
        <NavigationHeader
          step={step}
          totalSteps={
            choice === "create" ? CreateSteps.length : FilterSteps.length
          }
          setStep={setStep}
        />
      )}
      {content}
    </div>
  );
};

export default Home;

// region ChooseContent.tsx

interface ChooseContentProps {
  onChoose: (choice: Choice) => void;
}

const ChooseContent: React.FC<ChooseContentProps> = ({ onChoose }) => {
  return (
    <div className="step0Container">
      <div className="choicePicker" onClick={() => onChoose("filter")}>
        Filter an Existing Playlist
      </div>

      <div className="divider">
        <MainTextTypography tag="h3">
          <i>What would you like to do?</i>
        </MainTextTypography>
      </div>

      <div className="choicePicker" onClick={() => onChoose("create")}>
        Generate a New Playlist
      </div>
    </div>
  );
};
