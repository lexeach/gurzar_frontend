import React, { useEffect } from "react";

import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Chip,
  Stack,
  Button,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import {
  Edit,
  ArrowBack,
  Groups,
  HowToVote,
  SupervisorAccount,
  LocationOn,
  Timeline,
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
  fetchVillageById,
} from "../../../redux/slices/villageSlice";

export default function VillageView() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const {
    selectedVillage,
  } = useSelector(
    (state) => state.village
  );

  useEffect(() => {

    dispatch(fetchVillageById(id));

  }, [dispatch, id]);

  if (!selectedVillage) return null;

  return (

    <Box>

      <Stack

        direction={{
          xs: "column",
          md: "row",
        }}

        justifyContent="space-between"

        mb={3}

      >

        <Typography
          variant="h4"
          fontWeight={700}
        >

          Village Details

        </Typography>

        <Stack
          direction="row"
          spacing={2}
        >

          <Button

            variant="contained"

            startIcon={<Edit />}

            onClick={() =>

              navigate(
                `/hierarchy/villages/edit/${id}`
              )

            }

          >

            Edit

          </Button>

          <Button

            variant="outlined"

            startIcon={<ArrowBack />}

            onClick={() =>

              navigate("/hierarchy/villages")

            }

          >

            Back

          </Button>

        </Stack>

      </Stack>

      <Grid
        container
        spacing={3}
      >

        {/* Left Panel */}

        <Grid
          item
          xs={12}
          md={8}
        >

          <Card>

            <CardHeader
              title="Village Information"
            />

            <CardContent>

              <Grid
                container
                spacing={3}
              >

                <Grid item xs={6}>

                  <Typography color="text.secondary">
                    State
                  </Typography>

                  <Typography fontWeight={600}>
                    {selectedVillage.state}
                  </Typography>

                </Grid>

                <Grid item xs={6}>

                  <Typography color="text.secondary">
                    District
                  </Typography>

                  <Typography fontWeight={600}>
                    {selectedVillage.district}
                  </Typography>

                </Grid>

                <Grid item xs={6}>

                  <Typography color="text.secondary">
                    Tehsil
                  </Typography>

                  <Typography fontWeight={600}>
                    {selectedVillage.tehsil}
                  </Typography>

                </Grid>

                <Grid item xs={6}>

                  <Typography color="text.secondary">
                    Village Code
                  </Typography>

                  <Typography fontWeight={600}>
                    {selectedVillage.villageCode}
                  </Typography>

                </Grid>

                <Grid item xs={12}>

                  <Typography color="text.secondary">
                    Village Name
                  </Typography>

                  <Typography
                    variant="h5"
                    fontWeight={700}
                  >
                    {selectedVillage.villageName}
                  </Typography>

                </Grid>

                <Grid item xs={6}>

                  <Typography color="text.secondary">
                    Hindi Name
                  </Typography>

                  <Typography fontWeight={600}>
                    {selectedVillage.hindiName}
                  </Typography>

                </Grid>

                <Grid item xs={6}>

                  <Typography color="text.secondary">
                    PIN Code
                  </Typography>

                  <Typography fontWeight={600}>
                    {selectedVillage.pincode}
                  </Typography>

                </Grid>

                <Grid item xs={6}>

                  <Typography color="text.secondary">
                    Population
                  </Typography>

                  <Typography fontWeight={600}>
                    {selectedVillage.population}
                  </Typography>

                </Grid>

                <Grid item xs={6}>

                  <Typography color="text.secondary">
                    Status
                  </Typography>

                  <Chip

                    label={
                      selectedVillage.active
                        ? "Active"
                        : "Inactive"
                    }

                    color={
                      selectedVillage.active
                        ? "success"
                        : "default"
                    }

                  />

                </Grid>

              </Grid>

            </CardContent>

          </Card>

          <Card sx={{ mt: 3 }}>

            <CardHeader
              title="Location"
            />

            <CardContent>

              <Stack spacing={2}>

                <Typography>

                  <LocationOn
                    fontSize="small"
                  />

                  {" "}
                  Latitude :
                  {" "}
                  {selectedVillage.latitude}

                </Typography>

                <Typography>

                  <LocationOn
                    fontSize="small"
                  />

                  {" "}
                  Longitude :
                  {" "}
                  {selectedVillage.longitude}

                </Typography>

              </Stack>

            </CardContent>

          </Card>

          <Card sx={{ mt: 3 }}>

            <CardHeader
              title="Remarks"
            />

            <CardContent>

              <Typography>

                {selectedVillage.remarks ||
                  "No remarks available."}

              </Typography>

            </CardContent>

          </Card>

        </Grid>

        {/* Right Panel */}

        <Grid
          item
          xs={12}
          md={4}
        >

          <Stack spacing={3}>

            <Card>

              <CardHeader
                title="Statistics"
              />

              <CardContent>

                <Stack spacing={2}>

                  <Chip

                    icon={<HowToVote />}

                    label={`Booths : ${selectedVillage.booths || 0}`}

                  />

                  <Chip

                    icon={<Groups />}

                    label={`Members : ${selectedVillage.members || 0}`}

                  />

                </Stack>

              </CardContent>

            </Card>

            <Card>

              <CardHeader
                title="Executives"
              />

              <CardContent>

                <List>

                  {(selectedVillage.executives || []).map((item) => (

                    <ListItem key={item.id}>

                      <ListItemAvatar>

                        <Avatar>

                          <SupervisorAccount />

                        </Avatar>

                      </ListItemAvatar>

                      <ListItemText

                        primary={item.name}

                        secondary={item.mobile}

                      />

                    </ListItem>

                  ))}

                </List>

              </CardContent>

            </Card>

            <Card>

              <CardHeader
                title="Activity Timeline"
              />

              <CardContent>

                {(selectedVillage.timeline || []).map((item, index) => (

                  <Box key={index}>

                    <Stack
                      direction="row"
                      spacing={2}
                    >

                      <Avatar
                        color="primary"
                      >

                        <Timeline />

                      </Avatar>

                      <Box>

                        <Typography
                          fontWeight={600}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                        >
                          {item.date}
                        </Typography>

                      </Box>

                    </Stack>

                    {index <
                      selectedVillage.timeline.length - 1 && (

                      <Divider sx={{ my: 2 }} />

                    )}

                  </Box>

                ))}

              </CardContent>

            </Card>

          </Stack>

        </Grid>

      </Grid>

    </Box>

  );

}