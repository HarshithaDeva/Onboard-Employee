import React, { useState } from "react";
import "../assets/css/DetailsProgress.css";
import Stepper from "./Stepper";
import StepContent from "./StepContent";
import { Box, Button } from "@mui/material";
import FinishDialog from "./FinishDialog";
import Navbar from "./Navbar";

const DetailsProgress = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentSubStep, setCurrentSubStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    contact: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    addressLine4: "",
    payOption: [[]],
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const steps = ["General Details", "Address", "Pay Configuration"];
  const [showExtraCard, setShowExtraCard] = useState(false);

  const toggleExtraCard = () => {
    setShowExtraCard((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAutocompleteChange = (index, newValue) => {
    setFormData((prevData) => {
      const updatedPayOptions = [...prevData.payOption];
      updatedPayOptions[index] = newValue;
      return {
        ...prevData,
        payOption: updatedPayOptions,
      };
    });
  };

  const addPayOption = () => {
    setFormData((prevData) => ({
      ...prevData,
      payOption: [...prevData.payOption, []],
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (currentStep === 0 && currentSubStep === 0) {
      if (!formData.name || !formData.dob) {
        tempErrors.basic = "All fields in Basic Details are Required";
      }
    }
    if (currentStep === 0 && currentSubStep === 1) {
      if (!formData.contact || !/^[0-9]{10}$/.test(formData.contact)) {
        tempErrors.contact = "Please Enter Valid Mobile Number";
      }
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = "Please Enter Valid Email ID";
      }
    }

    if (currentStep === 1) {
      if (!formData.addressLine1 || !formData.addressLine2)
        tempErrors.address = "All fields in Address Lines are Required";
      if (showExtraCard) {
        if (
          !formData.addressLine1 ||
          !formData.addressLine2 ||
          !formData.addressLine3 ||
          !formData.addressLine4
        )
          tempErrors.address = "All fields in Address Lines are Required";
      }
    }
    if (currentStep === 2) {
      formData.payOption.forEach((option, index) => {
        if (option.length === 0) {
          tempErrors.payOption = "Pay Configuration Approvers are Required";
        }
      });
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const nextStep = () => {
    if (validate()) {
      if (currentStep === 0 && currentSubStep < 1) {
        setCurrentSubStep((prevSubStep) => prevSubStep + 1);
      } else {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
        setCurrentSubStep(0); // Reset sub-steps when moving to next main step
      }
    }
  };

  const handleFinish = () => {
    if (validate()) {
      setDialogOpen(true);
    }
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const isLastPayOptionEmpty =
    formData.payOption[formData.payOption.length - 1].length === 0;

  return (
    <Box className="App">
      <Navbar />
      <Box>
        <Stepper steps={steps} currentStep={currentStep} />
        <StepContent
          currentStep={currentStep}
          currentSubStep={currentSubStep}
          formData={formData}
          handleInputChange={handleInputChange}
          handleAutocompleteChange={handleAutocompleteChange}
          addPayOption={addPayOption}
          errors={errors}
          isLastPayOptionEmpty={isLastPayOptionEmpty}
          showExtraCard={showExtraCard}
          toggleExtraCard={toggleExtraCard}
        />
        <Box className="buttons">
          {currentStep < steps.length - 1 ? (
            <Button variant="contained" onClick={nextStep}>
              Next
            </Button>
          ) : (
            <Button variant="contained" onClick={handleFinish}>
              Finish
            </Button>
          )}
          <FinishDialog dialogOpen={dialogOpen} handleClose={handleClose} />
        </Box>
      </Box>
    </Box>
  );
};

export default DetailsProgress;
