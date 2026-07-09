import React from "react";

import {
  Paper,
  Grid,
  TextField,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";

import {
  FilterAlt,
  Clear,
} from "@mui/icons-material";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  setFilters,
  clearFilters,
} from "../../redux/slices/organizationSlice";

export default function OrganizationFilters() {

  const dispatch = useDispatch();

  const filters = useSelector(
    state => state.organization.filters
  );

  const handleChange = (name) => (event) => {

    dispatch(

      setFilters({

        ...filters,

        [name]: event.target.value,

      })

    );

  };

  return (

<Paper
sx={{
mb:3,
p:2,
}}
>

<Grid
container
spacing={2}
>

<Grid item xs={12} md={2}>

<TextField

select

fullWidth

label="Level"

value={filters.level}

onChange={handleChange("level")}

>

<MenuItem value="">All</MenuItem>

<MenuItem value="NATIONAL">National</MenuItem>

<MenuItem value="STATE">State</MenuItem>

<MenuItem value="DISTRICT">District</MenuItem>

<MenuItem value="TEHSIL">Tehsil</MenuItem>

<MenuItem value="VILLAGE">Village</MenuItem>

<MenuItem value="BOOTH">Booth</MenuItem>

</TextField>

</Grid>

<Grid item xs={12} md={2}>

<TextField

select

fullWidth

label="Department"

value={filters.department}

onChange={handleChange("department")}

>

<MenuItem value="">All</MenuItem>

<MenuItem value="ORG">Organization</MenuItem>

<MenuItem value="YOUTH">Youth</MenuItem>

<MenuItem value="WOMEN">Women</MenuItem>

<MenuItem value="IT">IT Cell</MenuItem>

<MenuItem value="MEDIA">Media</MenuItem>

<MenuItem value="LEGAL">Legal</MenuItem>

</TextField>

</Grid>

<Grid item xs={12} md={2}>

<TextField

fullWidth

label="State"

value={filters.state}

onChange={handleChange("state")}

/>

</Grid>

<Grid item xs={12} md={2}>

<TextField

fullWidth

label="District"

value={filters.district}

onChange={handleChange("district")}

/>

</Grid>

<Grid item xs={12} md={2}>

<TextField

select

fullWidth

label="Status"

value={filters.status}

onChange={handleChange("status")}

>

<MenuItem value="">All</MenuItem>

<MenuItem value="ACTIVE">Active</MenuItem>

<MenuItem value="INACTIVE">Inactive</MenuItem>

<MenuItem value="VACANT">Vacant</MenuItem>

</TextField>

</Grid>

<Grid item xs={12} md={2}>

<Stack
direction="row"
spacing={1}
height="100%"
alignItems="center"
>

<Button

variant="contained"

startIcon={<FilterAlt/>}

fullWidth

>

Apply

</Button>

<Button

variant="outlined"

startIcon={<Clear/>}

onClick={()=>

dispatch(clearFilters())

}

>

Reset

</Button>

</Stack>

</Grid>

</Grid>

</Paper>

);

}