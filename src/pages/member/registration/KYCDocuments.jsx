import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  Button,
  Stack,
  Box,
  Avatar,
  Chip,
} from "@mui/material";

import {
  CloudUpload,
  Delete,
  Visibility,
  CameraAlt,
  Description,
} from "@mui/icons-material";

import {
  Controller,
  useForm,
} from "react-hook-form";

const documentList = [
  {
    key: "profilePhoto",
    title: "Profile Photo",
    accept: "image/*",
  },
  {
    key: "aadhaarFront",
    title: "Aadhaar Front",
    accept: "image/*,.pdf",
  },
  {
    key: "aadhaarBack",
    title: "Aadhaar Back",
    accept: "image/*,.pdf",
  },
  {
    key: "panCard",
    title: "PAN Card",
    accept: "image/*,.pdf",
  },
  {
    key: "voterId",
    title: "Voter ID",
    accept: "image/*,.pdf",
  },
  {
    key: "bankPassbook",
    title: "Bank Passbook",
    accept: "image/*,.pdf",
  },
  {
    key: "signature",
    title: "Signature",
    accept: "image/*",
  },
];

export default function KYCDocuments({
  data,
  onChange,
}) {

  const {
    control,
    watch,
    setValue,
  } = useForm({
    defaultValues: {},
  });

  useEffect(() => {

    Object.keys(data || {}).forEach((key) => {
      setValue(key, data[key]);
    });

  }, [data]);

  useEffect(() => {

    const subscription = watch((values) => {
      onChange(values);
    });

    return () => subscription.unsubscribe();

  }, [watch]);

  return (

    <Card>

      <CardContent>

        <Typography
          variant="h5"
          fontWeight={700}
        >
          KYC & Documents
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Grid
          container
          spacing={3}
        >

          {documentList.map((doc) => (

            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={doc.key}
            >

              <Controller

                name={doc.key}

                control={control}

                render={({ field }) => (

                  <Card
                    variant="outlined"
                  >

                    <CardContent>

                      <Stack
                        spacing={2}
                        alignItems="center"
                      >

                        <Avatar
                          sx={{
                            width: 70,
                            height: 70,
                            bgcolor: "primary.main",
                          }}
                        >
                          <Description />
                        </Avatar>

                        <Typography
                          fontWeight={600}
                          align="center"
                        >
                          {doc.title}
                        </Typography>

                        {field.value ? (

                          <Chip
                            color="success"
                            label="Uploaded"
                          />

                        ) : (

                          <Chip
                            color="warning"
                            label="Pending"
                          />

                        )}

                        <Button
                          component="label"
                          variant="contained"
                          startIcon={<CloudUpload />}
                          fullWidth
                        >

                          Upload

                          <input
                            hidden
                            type="file"
                            accept={doc.accept}
                            onChange={(e) =>
                              field.onChange(
                                e.target.files[0]
                              )
                            }
                          />

                        </Button>

                        <Button
                          variant="outlined"
                          startIcon={<CameraAlt />}
                          fullWidth
                        >
                          Capture
                        </Button>

                        <Stack
                          direction="row"
                          spacing={1}
                        >

                          <Button
                            size="small"
                            startIcon={<Visibility />}
                          >
                            View
                          </Button>

                          <Button
                            size="small"
                            color="error"
                            startIcon={<Delete />}
                            onClick={() =>
                              field.onChange(null)
                            }
                          >
                            Remove
                          </Button>

                        </Stack>

                      </Stack>

                    </CardContent>

                  </Card>

                )}

              />

            </Grid>

          ))}

        </Grid>

        <Box mt={4}>

          <Typography
            color="text.secondary"
            variant="body2"
          >

            • Maximum file size: 5 MB

            <br />

            • Supported formats:
            JPG, PNG, PDF

            <br />

            • All uploaded documents are
            encrypted before storage.

            <br />

            • KYC documents are verified by
            authorized administrators only.

          </Typography>

        </Box>

      </CardContent>

    </Card>

  );

}