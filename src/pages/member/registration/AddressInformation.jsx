import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import {
  Controller,
  useForm,
} from "react-hook-form";

export default function AddressInformation({
  data,
  onChange,
}) {

  const {
    control,
    watch,
    setValue,
  } = useForm({

    defaultValues: {

      permanentAddress: "",

      currentAddress: "",

      sameAsPermanent: false,

      country: "India",

      state: "",

      district: "",

      tehsil: "",

      village: "",

      pinCode: "",

      policeStation: "",

      landmark: "",

    },

  });

  useEffect(() => {

    Object.keys(data || {}).forEach(key => {

      setValue(key, data[key]);

    });

  }, [data]);

  useEffect(() => {

    const subscription = watch(values => {

      if (
        values.sameAsPermanent
      ) {

        values.currentAddress =
          values.permanentAddress;

      }

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
          mb={3}
        >
          Address Information
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Grid
          container
          spacing={3}
        >

          <Grid item xs={12}>

            <Controller
              name="permanentAddress"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Permanent Address"
                  multiline
                  rows={3}
                  fullWidth
                />
              )}
            />

          </Grid>

          <Grid item xs={12}>

            <Controller
              name="sameAsPermanent"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={
                        field.value
                      }
                      onChange={
                        field.onChange
                      }
                    />
                  }
                  label="Current Address Same As Permanent"
                />
              )}
            />

          </Grid>

          <Grid item xs={12}>

            <Controller
              name="currentAddress"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Current Address"
                  multiline
                  rows={3}
                  fullWidth
                />
              )}
            />

          </Grid>

          <Grid item xs={12} md={3}>

            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Country"
                  fullWidth
                />
              )}
            />

          </Grid>

          <Grid item xs={12} md={3}>

            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="State"
                  fullWidth
                >
                  <MenuItem value="">
                    Select State
                  </MenuItem>

                  <MenuItem value="Rajasthan">
                    Rajasthan
                  </MenuItem>

                  <MenuItem value="Haryana">
                    Haryana
                  </MenuItem>

                  <MenuItem value="Delhi">
                    Delhi
                  </MenuItem>

                  <MenuItem value="Uttar Pradesh">
                    Uttar Pradesh
                  </MenuItem>

                </TextField>
              )}
            />

          </Grid>

          <Grid item xs={12} md={3}>

            <Controller
              name="district"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="District"
                  fullWidth
                >
                  <MenuItem value="">
                    Select District
                  </MenuItem>
                </TextField>
              )}
            />

          </Grid>

          <Grid item xs={12} md={3}>

            <Controller
              name="tehsil"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="Tehsil"
                  fullWidth
                >
                  <MenuItem value="">
                    Select Tehsil
                  </MenuItem>
                </TextField>
              )}
            />

          </Grid>

          <Grid item xs={12} md={4}>

            <Controller
              name="village"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Village / City"
                  fullWidth
                />
              )}
            />

          </Grid>

          <Grid item xs={12} md={4}>

            <Controller
              name="pinCode"
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

          <Grid item xs={12} md={4}>

            <Controller
              name="policeStation"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Police Station"
                  fullWidth
                />
              )}
            />

          </Grid>

          <Grid item xs={12}>

            <Controller
              name="landmark"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nearest Landmark"
                  fullWidth
                />
              )}
            />

          </Grid>

        </Grid>

      </CardContent>

    </Card>

  );

}