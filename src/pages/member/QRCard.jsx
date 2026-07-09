import React from "react";

import{

Card,

CardContent,

Avatar,

Typography,

Grid,

Button,

Divider,

}from"@mui/material";

import{

Download,

Print,

QrCode2,

}from"@mui/icons-material";

import{

useParams,

}from"react-router-dom";

export default function QRCard(){

const{id}=useParams();

return(

<Card
sx={{
maxWidth:500,
mx:"auto",
mt:4,
}}
>

<CardContent>

<Grid
container
spacing={2}
alignItems="center"
>

<Grid item>

<Avatar
sx={{
width:90,
height:90,
}}
/>

</Grid>

<Grid item xs>

<Typography
variant="h5"
fontWeight={700}
>

Member Name

</Typography>

<Typography>

Membership ID :
MEM-{id}

</Typography>

<Typography>

Mobile :
9876543210

</Typography>

<Typography>

Village :
Example Village

</Typography>

</Grid>

</Grid>

<Divider
sx={{
my:3,
}}
/>

<Grid
container
justifyContent="center"
>

<QrCode2
sx={{
fontSize:180,
}}
/>

</Grid>

<Typography
align="center"
mt={2}
>

Scan to verify membership

</Typography>

<Grid
container
spacing={2}
mt={2}
>

<Grid item xs={6}>

<Button

fullWidth

variant="contained"

startIcon={<Download/>}

>

Download

</Button>

</Grid>

<Grid item xs={6}>

<Button

fullWidth

variant="outlined"

startIcon={<Print/>}

>

Print

</Button>

</Grid>

</Grid>

</CardContent>

</Card>

);

}