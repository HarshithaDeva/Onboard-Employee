// SubStepContent.js
import { Box } from "@mui/material";
import React from "react";

const SubStepContent = ({
  currentSubStep,
  formData,
  handleInputChange,
  errors,
}) => {
  switch (currentSubStep) {
    case 0:
      return (
        <Box className="card">
          <Box className="cardHeader">Basic Details</Box>
          <Box className="cardInputContainer">
            <Box className="cardInput">
              <label>
                First Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
            </Box>{" "}
            <Box className="cardInput">
              <label>
                Date of Birth:
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                />
              </label>
            </Box>
          </Box>
          {errors && errors.basic ? (
            <div className="errors">{errors.basic}</div>
          ) : (
            ""
          )}
        </Box>
      );
    case 1:
      return (
        <Box className="card">
          <Box className="cardHeader">Contact Details</Box>
          <Box className="cardInputContainer">
            <Box className="cardInput">
              <label>
                Email ID:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
            </Box>
            <Box className="cardInput">
              <label>
                Mobile Number:
                <input
                  type="number"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                />
              </label>
            </Box>
          </Box>
          {errors && errors.email ? (
            <div className="errors">{errors.email}</div>
          ) : errors && errors.contact ? (
            <div className="errors"> {errors.contact}</div>
          ) : (
            ""
          )}
        </Box>
      );
    default:
      return null;
  }
};

export default SubStepContent;
