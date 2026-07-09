import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import {
  Visibility,
  Download,
  CheckCircle,
  Cancel,
  CloudUpload,
  Description,
} from "@mui/icons-material";

const documentTypes = [
  {
    key: "profilePhoto",
    title: "Profile Photo",
  },
  {
    key: "aadhaarFront",
    title: "Aadhaar Front",
  },
  {
    key: "aadhaarBack",
    title: "Aadhaar Back",
  },
  {
    key: "panCard",
    title: "PAN Card",
  },
  {
    key: "voterId",
    title: "Voter ID",
  },
  {
    key: "bankPassbook",
    title: "Bank Passbook",
  },
  {
    key: "signature",
    title: "Signature",
  },
];

export default function DocumentsTab({ member }) {

  if (!member) return null;

  return (

    <Card
      sx={{
        borderRadius: 4,
      }}
    >

      <CardContent>

        <Typography
          variant="h5"
          fontWeight={700}
        >
          Documents & KYC
        </Typography>

        <Typography
          color="text.secondary"
          mb={3}
        >
          Uploaded identity documents and verification status
        </Typography>

        <Divider sx={{ mb: 4 }} />

        <Grid
          container
          spacing={3}
        >

          {documentTypes.map((doc) => {

            const file = member?.documents?.[doc.key];

            return (

              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                key={doc.key}
              >

                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                  }}
                >

                  <CardContent>

                    <Stack
                      spacing={2}
                      alignItems="center"
                    >

                      <Avatar
                        src={file?.thumbnail}
                        sx={{
                          width: 90,
                          height: 90,
                          bgcolor: "primary.main",
                        }}
                      >
                        <Description />
                      </Avatar>

                      <Typography
                        fontWeight={700}
                        align="center"
                      >
                        {doc.title}
                      </Typography>

                      <Chip
                        color={
                          file?.verified
                            ? "success"
                            : "warning"
                        }
                        label={
                          file?.verified
                            ? "Verified"
                            : "Pending"
                        }
                      />

                      <Typography
                        variant="caption"
                        color="text.secondary"
                        align="center"
                      >
                        Uploaded :
                        {" "}
                        {file?.uploadedOn || "-"}
                      </Typography>

                      <Typography
                        variant="caption"
                        color="text.secondary"
                        align="center"
                      >
                        Verified By :
                        {" "}
                        {file?.verifiedBy || "-"}
                      </Typography>

                      <Divider
                        sx={{
                          width: "100%",
                        }}
                      />

                      <Stack
                        spacing={1}
                        width="100%"
                      >

                        <Button
                          fullWidth
                          variant="contained"
                          startIcon={<Visibility />}
                        >
                          View
                        </Button>

                        <Button
                          fullWidth
                          variant="outlined"
                          startIcon={<Download />}
                        >
                          Download
                        </Button>

                        <Button
                          fullWidth
                          color="success"
                          variant="outlined"
                          startIcon={<CheckCircle />}
                        >
                          Approve
                        </Button>

                        <Button
                          fullWidth
                          color="error"
                          variant="outlined"
                          startIcon={<Cancel />}
                        >
                          Reject
                        </Button>

                        <Button
                          fullWidth
                          variant="text"
                          startIcon={<CloudUpload />}
                        >
                          Replace
                        </Button>

                      </Stack>

                    </Stack>

                  </CardContent>

                </Card>

              </Grid>

            );

          })}

        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box>

          <Typography
            variant="h6"
            gutterBottom
          >
            KYC Summary
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
            useFlexGap
          >

            <Chip
              color="success"
              label="Aadhaar Verified"
            />

            <Chip
              color="success"
              label="PAN Verified"
            />

            <Chip
              color="success"
              label="Bank Verified"
            />

            <Chip
              color="primary"
              label="KYC Completed"
            />

          </Stack>

        </Box>

      </CardContent>

    </Card>

  );

}