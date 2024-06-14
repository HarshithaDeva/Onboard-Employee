import { Box } from "@mui/material";
import CheckIcon from "../assets/images/CheckIcon.svg";

const Stepper = ({ steps, currentStep, currentSubStep }) => {
  return (
    <Box className="stepper">
      {steps.map((step, index) => (
        <Box key={index} className="step">
          <Box
            className={`step-circle ${
              index < currentStep
                ? "completed"
                : index === currentStep
                ? "active"
                : ""
            }`}
          >
            {index < currentStep && (
              <Box className="checkmark" component="img" src={CheckIcon} />
            )}
            {index === currentStep && <Box className="filled-circle"></Box>}
          </Box>
          <Box className={`step-label ${index <= currentStep ? "active" : ""}`}>
            {step}
          </Box>
          {index < steps.length - 1 && (
            <Box
              className={`step-line ${index < currentStep ? "active" : ""}`}
            ></Box>
          )}
        </Box>
      ))}
    </Box>
  );
};
export default Stepper;
