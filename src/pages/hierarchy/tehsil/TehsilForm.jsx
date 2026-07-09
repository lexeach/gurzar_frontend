import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Switch,
  FormControlLabel,
  Button,
  Stack,
} from "@mui/material";

import {
  Save,
  ArrowBack,
} from "@mui/icons-material";

import {
  useForm,
  Controller,
} from "react-hook-form";

import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { states } from "../../../constants/states";
import { districts } from "../../../constants/districts";

import {
  createTehsil,
  updateTehsil,
  fetchTehsilById,
} from "../../../redux/slices/tehsilSlice";

export default function TehsilForm() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    control,
    watch,
    handleSubmit,
    reset,
  } = useForm({

    defaultValues: {

      stateCode: "",

      district: "",

      code: "",

      name: "",

      hindiName: "",

      headquarters: "",

      pincode: "",

      latitude: "",

      longitude: "",

      remarks: "",

      active: true,

    },

  });

  const stateCode = watch("stateCode");

  const districtOptions =
    districts[stateCode] || [];

  useEffect(() => {

    if (id) {

      dispatch(fetchTehsilById(id))
        .then((res) => {

          if (res.payload)
            reset(res.payload);

        });

    }

  }, [id]);

  const onSubmit = (data) => {

    if (id) {

      dispatch(updateTehsil(data));

    } else {

      dispatch(createTehsil(data));

    }

    navigate("/hierarchy/tehsils");

  };

  return (

    <Box>

      <Typography
        variant="h4"
        fontWeight={700}
        mb={3}
      >

        {id
          ? "Edit Tehsil"
          : "Add New Tehsil"}

      </Typography>

      <Card>

        <CardContent>

          <Grid
            container
            spacing={3}
          >

            <Grid
              item
              xs={12}
              md={6}
            >

              <Controller

                name="stateCode"

                control={control}

                render={({ field }) => (

                  <TextField
                    {...field}
                    select
                    fullWidth
                    label="State *"
                  >

                    {states.map(state => (

                      <MenuItem
                        key={state.code}
                        value={state.code}
                      >

                        {state.name}

                      </MenuItem>

                    ))}

                  </TextField>

                )}

              />

            </Grid>

            <Grid
              item
              xs={12}
              md={6}
            >

              <Controller

                name="district"

                control={control}

                render={({ field }) => (

                  <TextField
                    {...field}
                    select
                    fullWidth
                    label="District *"
                  >

                    {districtOptions.map(item => (

                      <MenuItem
                        key={item.id}
                        value={item.name}
                      >

                        {item.name}

                      </MenuItem>

                    ))}

                  </TextField>

                )}

              />

            </Grid>

            <Grid item xs={12} md={4}>

              <Controller

                name="code"

                control={control}

                render={({ field }) => (

                  <TextField
                    {...field}
                    label="Tehsil Code"
                    fullWidth
                  />

                )}

              />

            </Grid>

            <Grid item xs={12} md={8}>

              <Controller

                name="name"

                control={control}

                render={({ field }) => (

                  <TextField
                    {...field}
                    label="Tehsil Name *"
                    fullWidth
                  />

                )}

              />

            </Grid>

            <Grid item xs={12}>

              <Controller

                name="hindiName"

                control={control}

                render={({ field }) => (

                  <TextField
                    {...field}
                    label="Tehsil Name (Hindi)"
                    fullWidth
                  />

                )}

              />

            </Grid>

            <Grid item xs={12} md={6}>

              <Controller

                name="headquarters"

                control={control}

                render={({ field }) => (

                  <TextField
                    {...field}
                    label="Head Office"
                    fullWidth
                  />

                )}

              />

            </Grid>

            <Grid item xs={12} md={6}>

              <Controller

                name="pincode"

                control={control}

                render={({ field }) => (

                  <TextField
                    {...field}
                    label="PIN Code"
                    fullWidth
                  />

                )}

              />

            </Grid>

            <Grid item xs={12} md={6}>

              <Controller

                name="latitude"

                control={control}

                render={({ field }) => (

                  <TextField
                    {...field}
                    label="Latitude"
                    fullWidth
                  />

                )}

              />

            </Grid>

            <Grid item xs={12} md={6}>

              <Controller

                name="longitude"

                control={control}

                render={({ field }) => (

                  <TextField
                    {...field}
                    label="Longitude"
                    fullWidth
                  />

                )}

              />

            </Grid>

            <Grid item xs={12}>

              <Controller

                name="remarks"

                control={control}

                render={({ field }) => (

                  <TextField
                    {...field}
                    multiline
                    rows={4}
                    label="Remarks"
                    fullWidth
                  />

                )}

              />

            </Grid>

            <Grid item xs={12}>

              <Controller

                name="active"

                control={control}

                render={({ field }) => (

                  <FormControlLabel

                    control={

                      <Switch

                        checked={field.value}

                        onChange={field.onChange}

                      />

                    }

                    label="Active"

                  />

                )}

              />

            </Grid>

          </Grid>

          <Stack
            direction="row"
            spacing={2}
            mt={4}
          >

            <Button

              variant="contained"

              startIcon={<Save />}

              onClick={handleSubmit(onSubmit)}

            >
              Save
            </Button>

            <Button

              variant="outlined"

              startIcon={<ArrowBack />}

              onClick={() =>
                navigate("/hierarchy/tehsils")
              }

            >
              Cancel
            </Button>

          </Stack>

        </CardContent>

      </Card>

    </Box>

  );

}