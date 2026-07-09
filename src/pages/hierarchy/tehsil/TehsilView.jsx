import React, { useEffect } from "react";

import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Stack,
  Chip,
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
  LocationCity,
  HolidayVillage,
  HowToVote,
  Groups,
  SupervisorAccount,
  Timeline,
} from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  fetchTehsilById,
} from "../../../redux/slices/tehsilSlice";

export default function TehsilView() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const { selectedTehsil } = useSelector(
    state => state.tehsil
  );

  useEffect(() => {

    dispatch(fetchTehsilById(id));

  }, [dispatch, id]);

  if (!selectedTehsil) return null;

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
          Tehsil Details
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
                `/hierarchy/tehsils/edit/${id}`
              )
            }

          >
            Edit
          </Button>

          <Button

            variant="outlined"

            startIcon={<ArrowBack />}

            onClick={() =>
              navigate("/hierarchy/tehsils")
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

            <CardHeader title="Basic Information" />

            <CardContent>

              <Grid
                container
                spacing={3}
              >

                <Grid item xs={6}>

                  <Typography color="text.secondary">
                    State
                  </Typography>

                  <Typography fontWeight={700}>
                    {selectedTehsil.state}
                  </Typography>

                </Grid>

                <Grid item xs={6}>

                  <Typography color="text.secondary">
                    District
                  </Typography>

                  <Typography fontWeight={700}>
                    {selectedTehsil.district}
                  </Typography>

                </Grid>

                <Grid item xs={6}>

                  <Typography color="text.secondary">
                    Tehsil Code
                  </Typography>

                  <Typography fontWeight={700}>
                    {selectedTehsil.code}
                  </Typography>

                </Grid>

                <Grid item xs={6}>

                  <Typography color="text.secondary">
                    Tehsil Name
                  </Typography>

                  <Typography fontWeight={700}>
                    {selectedTehsil.name}
                  </Typography>

                </Grid>

                <Grid item xs={6}>

                  <Typography color="text.secondary">
                    Hindi Name
                  </Typography>

                  <Typography fontWeight={700}>
                    {selectedTehsil.hindiName}
                  </Typography>

                </Grid>

                <Grid item xs={6}>

                  <Typography color="text.secondary">
                    Head Office
                  </Typography>

                  <Typography fontWeight={700}>
                    {selectedTehsil.headquarters}
                  </Typography>

                </Grid>

                <Grid item xs={6}>

                  <Typography color="text.secondary">
                    PIN Code
                  </Typography>

                  <Typography fontWeight={700}>
                    {selectedTehsil.pincode}
                  </Typography>

                </Grid>

                <Grid item xs={6}>

                  <Typography color="text.secondary">
                    Status
                  </Typography>

                  <Chip

                    label={
                      selectedTehsil.active
                        ? "Active"
                        : "Inactive"
                    }

                    color={
                      selectedTehsil.active
                        ? "success"
                        : "default"
                    }

                  />

                </Grid>

              </Grid>

            </CardContent>

          </Card>

          <Card sx={{ mt: 3 }}>

            <CardHeader title="Remarks" />

            <CardContent>

              <Typography>

                {selectedTehsil.remarks ||
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

              <CardHeader title="Statistics" />

              <CardContent>

                <Stack spacing={2}>

                  <Chip

                    icon={<HolidayVillage />}

                    label={`Villages : ${selectedTehsil.villages || 0}`}

                  />

                  <Chip

                    icon={<HowToVote />}

                    label={`Booths : ${selectedTehsil.booths || 0}`}

                  />

                  <Chip

                    icon={<Groups />}

                    label={`Members : ${selectedTehsil.members || 0}`}

                  />

                </Stack>

              </CardContent>

            </Card>

            <Card>

              <CardHeader title="Assigned Executives" />

              <CardContent>

                <List>

                  {(selectedTehsil.executives || []).map(
                    (item) => (

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

                    )
                  )}

                </List>

              </CardContent>

            </Card>

            <Card>

              <CardHeader title="Recent Activities" />

              <CardContent>

                <Stack spacing={2}>

                  {(selectedTehsil.timeline || []).map(
                    (item, index) => (

                      <Box key={index}>

                        <Stack
                          direction="row"
                          spacing={2}
                        >

                          <Avatar
                            sx={{
                              bgcolor:
                                "primary.main",
                            }}
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

                        {index !==
                          selectedTehsil.timeline.length - 1 && (
                          <Divider
                            sx={{ my: 2 }}
                          />
                        )}

                      </Box>

                    )
                  )}

                </Stack>

              </CardContent>

            </Card>

          </Stack>

        </Grid>

      </Grid>

    </Box>

  );

}