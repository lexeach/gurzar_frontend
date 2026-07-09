import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";

import {
  Person,
  Home,
  Groups,
  AccountTree,
  VerifiedUser,
  AssignmentTurnedIn,
} from "@mui/icons-material";

const stepIcons = [
  <Person />,
  <Home />,
  <Groups />,
  <AccountTree />,
  <VerifiedUser />,
  <AssignmentTurnedIn />,
];

export default function StepperHeader({
  activeStep,
  steps,
}) {
  return (
    <Box sx={{ mb: 4 }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={() => (
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor:
                      activeStep >= index
                        ? "primary.main"
                        : "#E5E7EB",
                    color:
                      activeStep >= index
                        ? "#fff"
                        : "#6B7280",
                    transition: ".3s",
                  }}
                >
                  {stepIcons[index]}
                </Box>
              )}
            >
              <Typography
                variant="body2"
                fontWeight={
                  activeStep === index
                    ? 700
                    : 500
                }
              >
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}