import { Box } from "@mui/material";

const SubStepper = ({ subSteps, currentSubStep, children }) => {
  return (
    <Box className="substeps">
      {subSteps.map((subStep, index) => (
        <Box key={index} className="substep-bar">
          <Box
            className={`substep-bar-inner ${
              index < currentSubStep
                ? "completed"
                : index === currentSubStep
                ? "active"
                : ""
            }`}
          ></Box>
        </Box>
      ))}
      {children}
    </Box>
  );
};

export default SubStepper;
