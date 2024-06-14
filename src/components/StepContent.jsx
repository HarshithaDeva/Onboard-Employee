// StepContent.js
import React from "react";
import SubStepContent from "./SubStepContent";
import SubStepper from "./SubStepper";
import AddressForm from "./AddressForm";
import PayConfigForm from "./PayConfigForm";
import { Box, Button } from "@mui/material";

const StepContent = ({
  currentStep,
  currentSubStep,
  formData,
  handleInputChange,
  handleAutocompleteChange,
  addPayOption,
  errors,
  isLastPayOptionEmpty,
  showExtraCard,
  toggleExtraCard,
}) => {
  switch (currentStep) {
    case 0:
      return (
        <>
          <SubStepper
            subSteps={["Sub Step 1", "Sub Step 2"]}
            currentSubStep={currentSubStep}
          />
          <SubStepContent
            currentSubStep={currentSubStep}
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        </>
      );
    case 1:
      return (
        <>
          <AddressForm
            formData={formData}
            handleInputChange={handleInputChange}
            showExtraCard={showExtraCard}
            toggleExtraCard={toggleExtraCard}
            errors={errors}
          />
        </>
      );
    case 2:
      return (
        <Box className="card">
          <Box className="cardHeader">Pay Configuration</Box>
          {formData.payOption.map((payOption, index) => (
            <PayConfigForm
              key={index}
              formData={formData}
              payOptionIndex={index}
              handleAutocompleteChange={(newValue) =>
                handleAutocompleteChange(index, newValue)
              }
            />
          ))}
          <Button
            disabled={isLastPayOptionEmpty}
            className="newLevelButton"
            variant="contained"
            onClick={addPayOption}
          >
            Add New Level
          </Button>
          {errors && errors.payOption ? (
            <div className="errors">{errors.payOption}</div>
          ) : (
            ""
          )}
        </Box>
      );
    default:
      return null;
  }
};

export default StepContent;
