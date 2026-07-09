import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  TextField,
  Button,
  IconButton,
  MenuItem,
  Stack,
} from "@mui/material";

import {
  AddCircle,
  Delete,
} from "@mui/icons-material";

import {
  useForm,
  useFieldArray,
  Controller,
} from "react-hook-form";

const relationships = [
  "Father",
  "Mother",
  "Spouse",
  "Son",
  "Daughter",
  "Brother",
  "Sister",
  "Grand Father",
  "Grand Mother",
  "Other",
];

export default function FamilyInformation({
  data,
  onChange,
}) {

  const {
    control,
    watch,
    setValue,
  } = useForm({

    defaultValues: {

      emergencyContactName: "",

      emergencyMobile: "",

      familyMembers: [

        {
          name: "",
          relationship: "",
          age: "",
          occupation: "",
          mobile: "",
        },

      ],

    },

  });

  const {
    fields,
    append,
    remove,
  } = useFieldArray({

    control,

    name: "familyMembers",

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
        >
          Family Information
        </Typography>

        <Divider sx={{ my: 3 }} />

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

              name="emergencyContactName"

              control={control}

              render={({ field }) => (

                <TextField
                  {...field}
                  label="Emergency Contact Name"
                  fullWidth
                />

              )}

            />

          </Grid>

          <Grid
            item
            xs={12}
            md={6}
          >

            <Controller

              name="emergencyMobile"

              control={control}

              render={({ field }) => (

                <TextField
                  {...field}
                  label="Emergency Contact Mobile"
                  fullWidth
                />

              )}

            />

          </Grid>

        </Grid>

        <Divider sx={{ my: 4 }} />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >

          <Typography
            variant="h6"
            fontWeight={700}
          >
            Family Members
          </Typography>

          <Button

            variant="contained"

            startIcon={<AddCircle />}

            onClick={() =>
              append({

                name: "",

                relationship: "",

                age: "",

                occupation: "",

                mobile: "",

              })
            }

          >
            Add Member
          </Button>

        </Stack>

        {fields.map((item, index) => (

          <Card
            key={item.id}
            variant="outlined"
            sx={{
              mb: 3,
            }}
          >

            <CardContent>

              <Grid
                container
                spacing={2}
              >

                <Grid
                  item
                  xs={12}
                  md={3}
                >

                  <Controller

                    name={`familyMembers.${index}.name`}

                    control={control}

                    render={({ field }) => (

                      <TextField
                        {...field}
                        label="Full Name"
                        fullWidth
                      />

                    )}

                  />

                </Grid>

                <Grid
                  item
                  xs={12}
                  md={2}
                >

                  <Controller

                    name={`familyMembers.${index}.relationship`}

                    control={control}

                    render={({ field }) => (

                      <TextField
                        {...field}
                        select
                        label="Relationship"
                        fullWidth
                      >

                        {relationships.map(item => (

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

                <Grid
                  item
                  xs={12}
                  md={1.5}
                >

                  <Controller

                    name={`familyMembers.${index}.age`}

                    control={control}

                    render={({ field }) => (

                      <TextField
                        {...field}
                        label="Age"
                        fullWidth
                      />

                    )}

                  />

                </Grid>

                <Grid
                  item
                  xs={12}
                  md={3}
                >

                  <Controller

                    name={`familyMembers.${index}.occupation`}

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

                <Grid
                  item
                  xs={12}
                  md={2}
                >

                  <Controller

                    name={`familyMembers.${index}.mobile`}

                    control={control}

                    render={({ field }) => (

                      <TextField
                        {...field}
                        label="Mobile"
                        fullWidth
                      />

                    )}

                  />

                </Grid>

                <Grid
                  item
                  xs={12}
                  md={0.5}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >

                  <IconButton
                    color="error"
                    onClick={() =>
                      remove(index)
                    }
                    disabled={
                      fields.length === 1
                    }
                  >
                    <Delete />
                  </IconButton>

                </Grid>

              </Grid>

            </CardContent>

          </Card>

        ))}

      </CardContent>

    </Card>

  );

}