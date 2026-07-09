import React, { useEffect } from "react";

import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Stack,
  Avatar,
  Button,
  Chip,
  Divider,
  LinearProgress,
} from "@mui/material";

import {
  Edit,
  ArrowBack,
  Groups,
  HowToVote,
  Person,
  LocationOn,
  QrCode2,
  Print,
  Timeline,
  SupervisorAccount,
} from "@mui/icons-material";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  fetchBoothById,
} from "../../../redux/slices/boothSlice";

export default function BoothView() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const { selectedBooth } = useSelector(
    (state) => state.booth
  );

  useEffect(() => {

    dispatch(fetchBoothById(id));

  }, [dispatch, id]);

  if (!selectedBooth) return null;

  const coverage = selectedBooth.coverage ?? 0;

  return (

    <Box>

      {/* Header */}

      <Stack

        direction={{ xs: "column", md: "row" }}

        justifyContent="space-between"

        alignItems="center"

        mb={3}

      >

        <Box>

          <Typography
            variant="h4"
            fontWeight={700}
          >

            Booth #{selectedBooth.boothNumber}

          </Typography>

          <Typography color="text.secondary">

            {selectedBooth.boothName}

          </Typography>

        </Box>

        <Stack direction="row" spacing={2}>

          <Button
            variant="contained"
            startIcon={<Edit />}
            onClick={() =>
              navigate(`/hierarchy/booths/edit/${id}`)
            }
          >
            Edit
          </Button>

          <Button
            variant="outlined"
            startIcon={<Print />}
          >
            Print
          </Button>

          <Button
            variant="outlined"
            startIcon={<ArrowBack />}
            onClick={() =>
              navigate("/hierarchy/booths")
            }
          >
            Back
          </Button>

        </Stack>

      </Stack>

      <Grid container spacing={3}>

        {/* LEFT */}

        <Grid item xs={12} lg={8}>

          <Stack spacing={3}>

            <Card>

              <CardHeader title="Booth Information"/>

              <CardContent>

                <Grid container spacing={3}>

                  <Grid item xs={6}>
                    <Typography color="text.secondary">
                      State
                    </Typography>
                    <Typography>{selectedBooth.state}</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography color="text.secondary">
                      District
                    </Typography>
                    <Typography>{selectedBooth.district}</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography color="text.secondary">
                      Tehsil
                    </Typography>
                    <Typography>{selectedBooth.tehsil}</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography color="text.secondary">
                      Village
                    </Typography>
                    <Typography>{selectedBooth.village}</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography color="text.secondary">
                      Polling Station
                    </Typography>
                    <Typography fontWeight={600}>
                      {selectedBooth.pollingStation}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography color="text.secondary">
                      Polling Address
                    </Typography>
                    <Typography>
                      {selectedBooth.pollingAddress}
                    </Typography>
                  </Grid>

                </Grid>

              </CardContent>

            </Card>

            <Card>

              <CardHeader title="Voter Statistics"/>

              <CardContent>

                <Grid container spacing={3}>

                  <Grid item xs={3}>
                    <Typography variant="h5">
                      {selectedBooth.totalVoters}
                    </Typography>
                    <Typography>Total</Typography>
                  </Grid>

                  <Grid item xs={3}>
                    <Typography variant="h5">
                      {selectedBooth.maleVoters}
                    </Typography>
                    <Typography>Male</Typography>
                  </Grid>

                  <Grid item xs={3}>
                    <Typography variant="h5">
                      {selectedBooth.femaleVoters}
                    </Typography>
                    <Typography>Female</Typography>
                  </Grid>

                  <Grid item xs={3}>
                    <Typography variant="h5">
                      {selectedBooth.otherVoters}
                    </Typography>
                    <Typography>Others</Typography>
                  </Grid>

                </Grid>

              </CardContent>

            </Card>

            <Card>

              <CardHeader title="Coverage Progress"/>

              <CardContent>

                <Typography gutterBottom>

                  Member Coverage

                </Typography>

                <LinearProgress

                  variant="determinate"

                  value={coverage}

                  sx={{ height: 10, borderRadius: 5 }}

                />

                <Typography mt={2}>

                  {coverage}% Completed

                </Typography>

              </CardContent>

            </Card>

            <Card>

              <CardHeader title="Recent Activities"/>

              <CardContent>

                {(selectedBooth.activities || []).map((activity, index) => (

                  <Box key={index}>

                    <Stack direction="row" spacing={2}>

                      <Avatar>

                        <Timeline/>

                      </Avatar>

                      <Box>

                        <Typography fontWeight={600}>
                          {activity.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                        >
                          {activity.date}
                        </Typography>

                      </Box>

                    </Stack>

                    {index < selectedBooth.activities.length - 1 && (
                      <Divider sx={{ my: 2 }}/>
                    )}

                  </Box>

                ))}

              </CardContent>

            </Card>

          </Stack>

        </Grid>

        {/* RIGHT */}

        <Grid item xs={12} lg={4}>

          <Stack spacing={3}>

            <Card>

              <CardHeader title="Booth Team"/>

              <CardContent>

                <Stack spacing={2}>

                  <Chip

                    icon={<SupervisorAccount/>}

                    label={`President : ${selectedBooth.boothPresident || "-"}`}

                  />

                  <Chip

                    icon={<Person/>}

                    label={`Incharge : ${selectedBooth.boothIncharge || "-"}`}

                  />

                </Stack>

              </CardContent>

            </Card>

            <Card>

              <CardHeader title="Organization"/>

              <CardContent>

                <Stack spacing={2}>

                  <Chip

                    icon={<Groups/>}

                    label={`Members : ${selectedBooth.members || 0}`}

                  />

                  <Chip

                    icon={<Groups/>}

                    label={`Committee : ${selectedBooth.committeeMembers || 0}`}

                  />

                  <Chip

                    icon={<HowToVote/>}

                    label={`Voters : ${selectedBooth.totalVoters || 0}`}

                  />

                </Stack>

              </CardContent>

            </Card>

            <Card>

              <CardHeader title="Location"/>

              <CardContent>

                <Stack spacing={2}>

                  <Typography>

                    <LocationOn fontSize="small"/>

                    Latitude : {selectedBooth.latitude}

                  </Typography>

                  <Typography>

                    <LocationOn fontSize="small"/>

                    Longitude : {selectedBooth.longitude}

                  </Typography>

                </Stack>

              </CardContent>

            </Card>

            <Card>

              <CardHeader title="Booth QR"/>

              <CardContent>

                <Stack alignItems="center" spacing={2}>

                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                    }}
                  >

                    <QrCode2
                      sx={{ fontSize: 70 }}
                    />

                  </Avatar>

                  <Typography>

                    Scan for Booth Details

                  </Typography>

                </Stack>

              </CardContent>

            </Card>

          </Stack>

        </Grid>

      </Grid>

    </Box>

  );

}