import React from "react";

import{

Card,
CardContent,
Typography,
Stack,
Button,

}from"@mui/material";

export default function QuickActions(){

return(

<Card>

<CardContent>

<Typography
variant="h6"
mb={2}
>

Quick Actions

</Typography>

<Stack spacing={2}>

<Button variant="contained">

Add Member

</Button>

<Button variant="contained">

New Committee

</Button>

<Button variant="contained">

Generate Report

</Button>

<Button variant="outlined">

Export Data

</Button>

</Stack>

</CardContent>

</Card>

);

}