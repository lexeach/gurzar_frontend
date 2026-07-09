import React,{useEffect}from"react";

import{
Avatar,
Box,
Button,
Card,
CardContent,
Chip,
Divider,
Grid,
Stack,
Typography,
}from"@mui/material";

import{
Edit,
Lock,
Security,
History,
VerifiedUser,
}from"@mui/icons-material";

import{
useDispatch,
useSelector,
}from"react-redux";

import{
useNavigate,
}from"react-router-dom";

import{
fetchProfile,
}from"../../redux/slices/authSlice";

export default function Profile(){

const dispatch=useDispatch();

const navigate=useNavigate();

const{

user,

}=useSelector(

state=>state.auth

);

useEffect(()=>{

dispatch(

fetchProfile()

);

},[dispatch]);

if(!user){

return null;

}

return(

<Box>

<Grid container spacing={3}>

<Grid item xs={12} md={4}>

<Card>

<CardContent>

<Stack

spacing={2}

alignItems="center"

>

<Avatar

src={user.photo}

sx={{

width:120,

height:120,

}}

>

{user.firstName?.charAt(0)}

</Avatar>

<Typography

variant="h5"

fontWeight={700}

>

{user.fullName}

</Typography>

<Chip

label={user.role}

color="primary"

/>

<Button

variant="contained"

startIcon={<Edit/>}

onClick={()=>

navigate("/profile/edit")

}

>

Edit Profile

</Button>

</Stack>

</CardContent>

</Card>

</Grid>

<Grid item xs={12} md={8}>

<Card>

<CardContent>

<Typography

variant="h6"

mb={2}

>

Personal Information

</Typography>

<Grid container spacing={2}>

<Grid item xs={12} md={6}>

<Typography>

Email

</Typography>

<Typography

fontWeight={600}

>

{user.email}

</Typography>

</Grid>

<Grid item xs={12} md={6}>

<Typography>

Mobile

</Typography>

<Typography

fontWeight={600}

>

{user.mobile}

</Typography>

</Grid>

<Grid item xs={12} md={6}>

<Typography>

Organization

</Typography>

<Typography

fontWeight={600}

>

{user.organization}

</Typography>

</Grid>

<Grid item xs={12} md={6}>

<Typography>

Member ID

</Typography>

<Typography

fontWeight={600}

>

{user.memberId}

</Typography>

</Grid>

</Grid>

<Divider sx={{my:3}}/>

<Stack

direction="row"

spacing={2}

flexWrap="wrap"

>

<Button

variant="outlined"

startIcon={<Lock/>}

onClick={()=>

navigate("/profile/change-password")

}

>

Change Password

</Button>

<Button

variant="outlined"

startIcon={<Security/>}

onClick={()=>

navigate("/profile/security")

}

>

Security

</Button>

<Button

variant="outlined"

startIcon={<History/>}

onClick={()=>

navigate("/profile/activity")

}

>

Activity

</Button>

<Button

variant="outlined"

startIcon={<VerifiedUser/>}

onClick={()=>

navigate("/profile/sessions")

}

>

Devices

</Button>

</Stack>

</CardContent>

</Card>

</Grid>

</Grid>

</Box>

);

}