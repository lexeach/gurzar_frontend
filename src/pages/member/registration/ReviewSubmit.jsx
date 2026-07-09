import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  Stack,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Chip,
  Checkbox,
  FormControlLabel,
  Alert,
  Button,
  Box,
} from "@mui/material";

import {
  CheckCircle,
  Save,
  Send,
  Print,
  PictureAsPdf,
  Person,
} from "@mui/icons-material";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createMember } from "../../../redux/slices/memberSlice";

export default function ReviewSubmit({ data }) {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [accepted, setAccepted] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const submitRegistration = async () => {

    if (!accepted) return;

    try {

      setLoading(true);

      await dispatch(
        createMember(data)
      );

      navigate("/members");

    } finally {

      setLoading(false);

    }

  };

  return (

    <Card>

      <CardContent>

        <Typography
          variant="h4"
          fontWeight={700}
        >
          Review Registration
        </Typography>

        <Typography
          color="text.secondary"
          mb={3}
        >
          Please verify all information before
          submitting.
        </Typography>

        <Divider sx={{ mb: 4 }} />

        {/* Profile */}

        <Stack
          direction="row"
          spacing={3}
          mb={4}
          alignItems="center"
        >

          <Avatar
            sx={{
              width: 100,
              height: 100,
            }}
            src={
              data?.kyc?.profilePhoto
                ? URL.createObjectURL(
                    data.kyc.profilePhoto
                  )
                : ""
            }
          >
            <Person />
          </Avatar>

          <Box>

            <Typography
              variant="h5"
              fontWeight={700}
            >
              {data.personal.firstName}{" "}
              {data.personal.middleName}{" "}
              {data.personal.lastName}
            </Typography>

            <Typography>
              {data.personal.mobile}
            </Typography>

            <Typography>
              {data.personal.email}
            </Typography>

            <Chip
              label="Ready for Registration"
              color="success"
              sx={{ mt: 2 }}
            />

          </Box>

        </Stack>

        {/* Summary */}

        <Grid
          container
          spacing={3}
        >

          <Grid
            item
            xs={12}
            md={6}
          >

            <Card variant="outlined">

              <CardContent>

                <Typography
                  variant="h6"
                  fontWeight={700}
                >
                  Personal Information
                </Typography>

                <Divider sx={{ my:2 }}/>

                <List dense>

                  <ListItem>

                    <ListItemText
                      primary="Father"
                      secondary={
                        data.personal.fatherName
                      }
                    />

                  </ListItem>

                  <ListItem>

                    <ListItemText
                      primary="DOB"
                      secondary={
                        data.personal.dob
                      }
                    />

                  </ListItem>

                  <ListItem>

                    <ListItemText
                      primary="Gender"
                      secondary={
                        data.personal.gender
                      }
                    />

                  </ListItem>

                  <ListItem>

                    <ListItemText
                      primary="Occupation"
                      secondary={
                        data.personal.occupation
                      }
                    />

                  </ListItem>

                </List>

              </CardContent>

            </Card>

          </Grid>

          <Grid
            item
            xs={12}
            md={6}
          >

            <Card variant="outlined">

              <CardContent>

                <Typography
                  variant="h6"
                  fontWeight={700}
                >
                  Organization
                </Typography>

                <Divider sx={{ my:2 }}/>

                <List dense>

                  <ListItem>

                    <ListItemText
                      primary="State"
                      secondary={
                        data.hierarchy.state
                      }
                    />

                  </ListItem>

                  <ListItem>

                    <ListItemText
                      primary="District"
                      secondary={
                        data.hierarchy.district
                      }
                    />

                  </ListItem>

                  <ListItem>

                    <ListItemText
                      primary="Tehsil"
                      secondary={
                        data.hierarchy.tehsil
                      }
                    />

                  </ListItem>

                  <ListItem>

                    <ListItemText
                      primary="Village"
                      secondary={
                        data.hierarchy.village
                      }
                    />

                  </ListItem>

                </List>

              </CardContent>

            </Card>

          </Grid>

          <Grid
            item
            xs={12}
          >

            <Card variant="outlined">

              <CardContent>

                <Typography
                  variant="h6"
                  fontWeight={700}
                >
                  Uploaded Documents
                </Typography>

                <Divider sx={{ my:2 }}/>

                <Stack
                  direction="row"
                  spacing={2}
                  flexWrap="wrap"
                >

                  {Object.entries(data.kyc).map(
                    ([key,value])=>{

                      if(!value) return null;

                      return(

                        <Chip

                          key={key}

                          icon={<CheckCircle/>}

                          color="success"

                          label={key}

                        />

                      );

                    }
                  )}

                </Stack>

              </CardContent>

            </Card>

          </Grid>

        </Grid>

        <Alert
          severity="info"
          sx={{ mt:4 }}
        >
          Please ensure all information is
          correct. Once submitted, approval
          workflow will begin.
        </Alert>

        <FormControlLabel

          sx={{ mt:3 }}

          control={

            <Checkbox

              checked={accepted}

              onChange={(e)=>
                setAccepted(e.target.checked)
              }

            />

          }

          label="I certify that the information provided is true and correct."

        />

        <Stack
          direction={{
            xs:"column",
            md:"row"
          }}
          spacing={2}
          mt={4}
        >

          <Button

            startIcon={<Save/>}

            variant="outlined"

            fullWidth

          >
            Save Draft
          </Button>

          <Button

            startIcon={<Print/>}

            variant="outlined"

            fullWidth

          >
            Print
          </Button>

          <Button

            startIcon={<PictureAsPdf/>}

            variant="outlined"

            fullWidth

          >
            Download PDF
          </Button>

          <Button

            startIcon={<Send/>}

            variant="contained"

            color="success"

            fullWidth

            disabled={
              !accepted || loading
            }

            onClick={submitRegistration}

          >

            Final Submit

          </Button>

        </Stack>

      </CardContent>

    </Card>

  );

}