import { Box } from "@mui/material";
import React from "react";

const AddressForm = ({
  formData,
  handleInputChange,
  showExtraCard,
  toggleExtraCard,
  errors,
}) => {
  return (
    <Box>
      <Box className="card">
        <Box className="cardHeader">Address</Box>
        <Box className="cardAddressContainer">
          <Box className="cardAddressWrapper">
            <Box className="cardInputAddress">
              <label>
                Address Line 1:
                <input
                  type="text"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleInputChange}
                />
              </label>
            </Box>
            <Box className="cardInputAddress">
              <label>
                Address Line 2:
                <input
                  type="text"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleInputChange}
                />
              </label>
            </Box>
          </Box>
          <button
            className={showExtraCard ? "removeButton" : ""}
            onClick={toggleExtraCard}
          >
            {showExtraCard ? "-" : "+"}
          </button>
        </Box>
        {showExtraCard && (
          <Box className="cardAddressContainer">
            <Box className="cardAddressWrapper">
              <Box className="cardInputAddress">
                <label>
                  Address Line 3:
                  <input
                    type="text"
                    name="addressLine1"
                    value={formData.addressLine3}
                    onChange={handleInputChange}
                  />
                </label>
              </Box>
              <Box className="cardInputAddress">
                <label>
                  Address Line 4:
                  <input
                    type="text"
                    name="addressLine2"
                    value={formData.addressLine4}
                    onChange={handleInputChange}
                  />
                </label>
              </Box>
            </Box>
          </Box>
        )}
        {errors && errors.address ? (
          <div className="errors">{errors.address}</div>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

export default AddressForm;
