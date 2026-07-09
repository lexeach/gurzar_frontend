import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Button,
  Stack,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import StepperHeader from "./registration/StepperHeader";
import PersonalInformation from "./registration/PersonalInformation";
import AddressInformation from "./registration/AddressInformation";
import FamilyInformation from "./registration/FamilyInformation";
import OrganizationHierarchy from "./registration/OrganizationHierarchy";
import KYCDocuments from "./registration/KYCDocuments";
import ReviewSubmit from "./registration/ReviewSubmit";

const steps = [
  "Personal",
  "Address",
  "Family",
  "Hierarchy",
  "KYC",
  "Review",
];

export default function MemberRegistration() {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    personal: {},
    address: {},
    family: {},
    hierarchy: {},
    kyc: {},
  });

  const nextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const updateSection = (section, values) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...values,
      },
    }));
  };

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <PersonalInformation
            data={formData.personal}
            onChange={(values) =>
              updateSection("personal", values)
            }
          />
        );

      case 1:
        return (
          <AddressInformation
            data={formData.address}
            onChange={(values) =>
              updateSection("address", values)
            }
          />
        );

      case 2:
        return (
          <FamilyInformation
            data={formData.family}
            onChange={(values) =>
              updateSection("family", values)
            }
          />
        );

      case 3:
        return (
          <OrganizationHierarchy
            data={formData.hierarchy}
            onChange={(values) =>
              updateSection("hierarchy", values)
            }
          />
        );

      case 4:
        return (
          <KYCDocuments
            data={formData.kyc}
            onChange={(values) =>
              updateSection("kyc", values)
            }
          />
        );

      case 5:
        return (
          <ReviewSubmit
            data={formData}
          />
        );

      default:
        return null;
    }
  };

  return (
    <Card
      sx={{
        borderRadius: 4,
      }}
    >
      <CardContent>

        <Typography
          variant="h4"
          fontWeight={700}
          mb={3}
        >
          New Member Registration
        </Typography>

        <StepperHeader
          activeStep={activeStep}
          steps={steps}
        />

        <Box mt={4}>
          {renderStep()}
        </Box>

        <Stack
          direction="row"
          justifyContent="space-between"
          mt={4}
        >
          <Button
            disabled={activeStep === 0}
            onClick={previousStep}
          >
            Previous
          </Button>

          <Stack
            direction="row"
            spacing={2}
          >
            <Button
              variant="outlined"
              onClick={() => navigate("/members")}
            >
              Cancel
            </Button>

            {activeStep === steps.length - 1 ? (
              <Button
                variant="contained"
                color="success"
              >
                Submit Registration
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={nextStep}
              >
                Next
              </Button>
            )}
          </Stack>
        </Stack>

      </CardContent>
    </Card>
  );
}