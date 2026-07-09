import React, { useEffect } from "react";

import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Stack,
  Button,
  Chip,
  Avatar,
  Divider,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import {
  Edit,
  ArrowBack,
  Groups,
  Event,
  Task,
  Person,
  TrendingUp,
  QrCode2,
  Print,
  SupervisorAccount,
} from "@mui/icons-material";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  fetchCommitteeById,
} from "../../redux/slices/committeeSlice";

export default function CommitteeView() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const {
    selectedCommittee,
  } = useSelector(
    state => state.committee
  );

  useEffect(() => {

    dispatch(fetchCommitteeById(id));

  }, [dispatch, id]);

  if (!selectedCommittee)
    return null;

  return (

<Box>

{/* Header */}

<Stack

direction={{
xs:"column",
md:"row"
}}

justifyContent="space-between"

mb={3}

>

<Box>

<Typography
variant="h4"
fontWeight={700}
>

{selectedCommittee.committeeName}

</Typography>

<Typography
color="text.secondary"
>

{selectedCommittee.committeeType}

</Typography>

</Box>

<Stack
direction="row"
spacing={2}
>

<Button

variant="contained"

startIcon={<Edit/>}

onClick={()=>

navigate(`/committees/edit/${id}`)

}

>

Edit

</Button>

<Button

variant="outlined"

startIcon={<Print/>}

>

Print

</Button>

<Button

variant="outlined"

startIcon={<ArrowBack/>}

onClick={()=>

navigate("/committees")

}

>

Back

</Button>

</Stack>

</Stack>

<Grid container spacing={3}>

{/* LEFT */}

<Grid item xs={12} lg={8}>

<Stack spacing={3}>

<Card>

<CardHeader title="Committee Information"/>

<CardContent>

<Grid container spacing={3}>

<Grid item xs={6}>
<Typography color="text.secondary">
Level
</Typography>
<Typography fontWeight={600}>
{selectedCommittee.level}
</Typography>
</Grid>

<Grid item xs={6}>
<Typography color="text.secondary">
Type
</Typography>
<Typography fontWeight={600}>
{selectedCommittee.committeeType}
</Typography>
</Grid>

<Grid item xs={12}>
<Typography color="text.secondary">
Jurisdiction
</Typography>
<Typography fontWeight={600}>
{selectedCommittee.state} →
{selectedCommittee.district} →
{selectedCommittee.tehsil} →
{selectedCommittee.village} →
{selectedCommittee.booth}
</Typography>
</Grid>

<Grid item xs={6}>
<Typography color="text.secondary">
Formation Date
</Typography>
<Typography>
{selectedCommittee.formationDate}
</Typography>
</Grid>

<Grid item xs={6}>
<Typography color="text.secondary">
Term End
</Typography>
<Typography>
{selectedCommittee.termEndDate}
</Typography>
</Grid>

</Grid>

</CardContent>

</Card>

<Card>

<CardHeader title="Committee Performance"/>

<CardContent>

<Typography gutterBottom>

Overall Health Score

</Typography>

<LinearProgress

variant="determinate"

value={
selectedCommittee.performance || 0
}

sx={{
height:12,
borderRadius:6,
mb:2,
}}

/>

<Typography>

{selectedCommittee.performance || 0}% Healthy

</Typography>

</CardContent>

</Card>

<Card>

<CardHeader title="Leadership"/>

<CardContent>

<List>

{[
{
title:"President",
name:selectedCommittee.presidentName
},
{
title:"Vice President",
name:selectedCommittee.vicePresidentName
},
{
title:"Secretary",
name:selectedCommittee.secretaryName
},
{
title:"Treasurer",
name:selectedCommittee.treasurerName
},
].map((item,index)=>(

<ListItem key={index}>

<ListItemAvatar>

<Avatar>

<SupervisorAccount/>

</Avatar>

</ListItemAvatar>

<ListItemText

primary={item.name || "Vacant"}

secondary={item.title}

/>

</ListItem>

))}

</List>

</CardContent>

</Card>

<Card>

<CardHeader title="Recent Activities"/>

<CardContent>

{(selectedCommittee.activities||[])

.map((item,index)=>(

<Box key={index}>

<Typography fontWeight={600}>

{item.title}

</Typography>

<Typography
variant="body2"
color="text.secondary"
>

{item.date}

</Typography>

{index<selectedCommittee.activities.length-1&&(

<Divider sx={{my:2}}/>

)}

</Box>

))

}

</CardContent>

</Card>

</Stack>

</Grid>

{/* RIGHT */}

<Grid item xs={12} lg={4}>

<Stack spacing={3}>

<Card>

<CardHeader title="Statistics"/>

<CardContent>

<Stack spacing={2}>

<Chip

icon={<Groups/>}

label={`Members : ${selectedCommittee.memberCount || 0}`}

/>

<Chip

icon={<Event/>}

label={`Meetings : ${selectedCommittee.meetingCount || 0}`}

/>

<Chip

icon={<Task/>}

label={`Tasks : ${selectedCommittee.taskCount || 0}`}

/>

<Chip

icon={<TrendingUp/>}

label={`Performance : ${selectedCommittee.performance || 0}%`}

/>

</Stack>

</CardContent>

</Card>

<Card>

<CardHeader title="Quick Actions"/>

<CardContent>

<Stack spacing={2}>

<Button
fullWidth
variant="outlined"
startIcon={<Groups/>}
>

Manage Members

</Button>

<Button
fullWidth
variant="outlined"
startIcon={<Event/>}
>

Meetings

</Button>

<Button
fullWidth
variant="outlined"
startIcon={<Task/>}
>

Tasks

</Button>

<Button
fullWidth
variant="outlined"
startIcon={<QrCode2/>}
>

Generate QR

</Button>

</Stack>

</CardContent>

</Card>

<Card>

<CardHeader title="Committee QR"/>

<CardContent>

<Stack
alignItems="center"
spacing={2}
>

<Avatar

sx={{
width:120,
height:120,
}}

>

<QrCode2
sx={{
fontSize:70
}}
/>

</Avatar>

<Typography>

Committee QR Code

</Typography>

</Stack>

</CardContent>

</Card>

</Stack>

</Grid>

</Grid>

</Box>

);

}