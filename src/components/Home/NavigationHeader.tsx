import MainTextTypography from "../Common/MainTextTypography/MainTextTypography";
import "./_NavigationHeader.styles.css";

interface NavigationHeaderProps {
  step: number;
  totalSteps: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  step,
  totalSteps,
  setStep,
}) => {
  const onBack = () => {
    setStep(step - 1);
  };

  const onNext = () => {
    setStep(step + 1);
  };

  return (
    <header className="navigation-header">
      <button
        className={"header-button"}
        onClick={onBack}
        disabled={step === 0}
      >
        Back
      </button>
      <div className="step-info">
        <MainTextTypography inverted tag="body">
          Step {step} of {totalSteps}
        </MainTextTypography>
      </div>
      <button
        className={"header-button"}
        onClick={onNext}
        disabled={step >= totalSteps}
      >
        Next
      </button>
    </header>
  );
};

export default NavigationHeader;
