import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  TextField,
  MenuItem,
  Autocomplete,
} from "@mui/material";

import {
  Controller,
  useForm,
} from "react-hook-form";

const membershipTypes = [
  "Primary Member",
  "Active Member",
  "Executive Member",
  "Office Bearer",
  "Committee Member",
];

const states = [
  "Rajasthan",
  "Haryana",
  "Delhi",
  "Uttar Pradesh",
];

const districts = [
  "Jaipur",
  "Ajmer",
  "Sonipat",
  "Meerut",
];

const tehsils = [
  "Tehsil 1",
  "Tehsil 2",
  "Tehsil 3",
];

const villages = [
  "Village A",
  "Village B",
  "Village C",
];

const booths = [
  "Booth 001",
  "Booth 002",
  "Booth 003",
];

const coordinators = [
  "Rakesh Sharma",
  "Deepak Gurjar",
  "Anil Singh",
];

const executives = [
  "Mukesh Kumar",
  "Rahul Chaudhary",
  "Sandeep Gurjar",
];

const committees = [
  "Youth Wing",
  "Women Wing",
  "Legal Cell",
  "Social Committee",
  "Education Committee",
];

export default function OrganizationHierarchy({
  data,
  onChange,
}) {

  const {
    control,
    watch,
    setValue,
  } = useForm({

    defaultValues:{

      membershipType:"",

      state:"",

      district:"",

      tehsil:"",

      village:"",

      booth:"",

      coordinator:null,

      executive:null,

      committee:null,

      referenceMember:"",

    }

  });

  useEffect(()=>{

    Object.keys(data || {}).forEach(key=>{

      setValue(key,data[key]);

    });

  },[data]);

  useEffect(()=>{

    const subscription = watch(values=>{

      onChange(values);

    });

    return ()=>subscription.unsubscribe();

  },[watch]);

  return(

    <Card>

      <CardContent>

        <Typography
          variant="h5"
          fontWeight={700}
        >
          Organization Hierarchy
        </Typography>

        <Divider sx={{my:3}}/>

        <Grid container spacing={3}>

          <Grid item xs={12} md={4}>

            <Controller
              name="membershipType"
              control={control}
              render={({field})=>(

                <TextField
                  {...field}
                  select
                  label="Membership Type"
                  fullWidth
                >

                  {membershipTypes.map(item=>(

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

          <Grid item xs={12} md={4}>

            <Controller
              name="state"
              control={control}
              render={({field})=>(

                <TextField
                  {...field}
                  select
                  label="State"
                  fullWidth
                >

                  {states.map(item=>(

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

          <Grid item xs={12} md={4}>

            <Controller
              name="district"
              control={control}
              render={({field})=>(

                <TextField
                  {...field}
                  select
                  label="District"
                  fullWidth
                >

                  {districts.map(item=>(

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

          <Grid item xs={12} md={4}>

            <Controller
              name="tehsil"
              control={control}
              render={({field})=>(

                <TextField
                  {...field}
                  select
                  label="Tehsil"
                  fullWidth
                >

                  {tehsils.map(item=>(

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

          <Grid item xs={12} md={4}>

            <Controller
              name="village"
              control={control}
              render={({field})=>(

                <TextField
                  {...field}
                  select
                  label="Village"
                  fullWidth
                >

                  {villages.map(item=>(

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

          <Grid item xs={12} md={4}>

            <Controller
              name="booth"
              control={control}
              render={({field})=>(

                <TextField
                  {...field}
                  select
                  label="Booth"
                  fullWidth
                >

                  {booths.map(item=>(

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

          <Grid item xs={12} md={4}>

            <Controller
              name="coordinator"
              control={control}
              render={({field})=>(

                <Autocomplete

                  options={coordinators}

                  value={field.value}

                  onChange={(_,value)=>field.onChange(value)}

                  renderInput={(params)=>(

                    <TextField
                      {...params}
                      label="Assigned Coordinator"
                    />

                  )}

                />

              )}
            />

          </Grid>

          <Grid item xs={12} md={4}>

            <Controller
              name="executive"
              control={control}
              render={({field})=>(

                <Autocomplete

                  options={executives}

                  value={field.value}

                  onChange={(_,value)=>field.onChange(value)}

                  renderInput={(params)=>(

                    <TextField
                      {...params}
                      label="Assigned Executive"
                    />

                  )}

                />

              )}
            />

          </Grid>

          <Grid item xs={12} md={4}>

            <Controller
              name="committee"
              control={control}
              render={({field})=>(

                <Autocomplete

                  options={committees}

                  value={field.value}

                  onChange={(_,value)=>field.onChange(value)}

                  renderInput={(params)=>(

                    <TextField
                      {...params}
                      label="Committee"
                    />

                  )}

                />

              )}
            />

          </Grid>

          <Grid item xs={12}>

            <Controller
              name="referenceMember"
              control={control}
              render={({field})=>(

                <TextField
                  {...field}
                  label="Reference Member ID / Mobile"
                  fullWidth
                  placeholder="Search Existing Member"
                />

              )}
            />

          </Grid>

        </Grid>

      </CardContent>

    </Card>

  );

}