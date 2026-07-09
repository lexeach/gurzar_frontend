import React, { useEffect } from "react";
import {
  Grid,
  TextField,
  MenuItem,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Stack,
  Divider,
} from "@mui/material";

import {
  CloudUpload,
} from "@mui/icons-material";

import {
  useForm,
  Controller,
} from "react-hook-form";

const genderList = [
  "Male",
  "Female",
  "Other",
];

const bloodGroups = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
];

const maritalStatus = [
  "Single",
  "Married",
  "Widowed",
  "Divorced",
];

export default function PersonalInformation({
  data,
  onChange,
}) {

  const {
    control,
    watch,
    setValue,
  } = useForm({

    defaultValues: {

      profilePhoto: "",

      firstName: "",

      middleName: "",

      lastName: "",

      fatherName: "",

      motherName: "",

      spouseName: "",

      gender: "",

      dob: "",

      bloodGroup: "",

      maritalStatus: "",

      mobile: "",

      alternateMobile: "",

      email: "",

      aadhaar: "",

      pan: "",

      occupation: "",

      education: "",

      nationality: "Indian",

    },

  });

  useEffect(() => {

    Object.keys(data || {}).forEach(key => {

      setValue(key, data[key]);

    });

  }, [data]);

  useEffect(() => {

    const subscription = watch(values => {

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
          Personal Information
        </Typography>

        <Divider sx={{ mb: 3 }} />

        {/* Photo */}

        <Stack
          alignItems="center"
          spacing={2}
          mb={4}
        >

          <Avatar
            sx={{
              width: 120,
              height: 120,
            }}
          />

          <Button
            component="label"
            variant="outlined"
            startIcon={<CloudUpload />}
          >
            Upload Photo

            <input
              hidden
              type="file"
              accept="image/*"
            />

          </Button>

        </Stack>

        <Grid
          container
          spacing={3}
        >

          <Grid item xs={12} md={4}>

            <Controller

              name="firstName"

              control={control}

              render={({ field }) => (

                <TextField
                  {...field}
                  label="First Name"
                  fullWidth
                />

              )}

            />

          </Grid>

          <Grid item xs={12} md={4}>

            <Controller
              name="middleName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Middle Name"
                  fullWidth
                />
              )}
            />

          </Grid>

          <Grid item xs={12} md={4}>

            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Last Name"
                  fullWidth
                />
              )}
            />

          </Grid>

          <Grid item xs={12} md={6}>

            <Controller
              name="fatherName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Father's Name"
                  fullWidth
                />
              )}
            />

          </Grid>

          <Grid item xs={12} md={6}>

            <Controller
              name="motherName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Mother's Name"
                  fullWidth
                />
              )}
            />

          </Grid>

          <Grid item xs={12} md={6}>

            <Controller
              name="spouseName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Spouse Name"
                  fullWidth
                />
              )}
            />

          </Grid>

          <Grid item xs={12} md={3}>

            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="Gender"
                  fullWidth
                >
                  {genderList.map(item => (
                    <MenuItem
                      key={item}
                      value={item}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />

          </Grid>

          <Grid item xs={12} md={3}>

            <Controller
              name="dob"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="date"
                  label="Date of Birth"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />

          </Grid>

          <Grid item xs={12} md={3}>

            <Controller
              name="bloodGroup"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="Blood Group"
                  fullWidth
                >
                  {bloodGroups.map(item => (
                    <MenuItem
                      key={item}
                      value={item}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />

          </Grid>

          <Grid item xs={12} md={3}>

            <Controller
              name="maritalStatus"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="Marital Status"
                  fullWidth
                >
                  {maritalStatus.map(item => (
                    <MenuItem
                      key={item}
                      value={item}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />

          </Grid>

          <Grid item xs={12} md={6}>

            <Controller
              name="mobile"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Mobile Number"
                  fullWidth
                />
              )}
            />

          </Grid>

          <Grid item xs={12} md={6}>

            <Controller
              name="alternateMobile"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Alternate Mobile"
                  fullWidth
                />
              )}
            />

          </Grid>

          <Grid item xs={12} md={6}>

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email Address"
                  fullWidth
                />
              )}
            />

          </Grid>

          <Grid item xs={12} md={3}>

            <Controller
              name="aadhaar"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Aadhaar Number"
                  fullWidth
                />
              )}
            />

          </Grid>

          <Grid item xs={12} md={3}>

            <Controller
              name="pan"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="PAN Number"
                  fullWidth
                />
              )}
            />

          </Grid>

          <Grid item xs={12} md={6}>

            <Controller
              name="occupation"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Occupation"
                  fullWidth
                />
              )}
            />

          </Grid>

          <Grid item xs={12} md={3}>

            <Controller
              name="education"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Education"
                  fullWidth
                />
              )}
            />

          </Grid>

          <Grid item xs={12} md={3}>

            <Controller
              name="nationality"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nationality"
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