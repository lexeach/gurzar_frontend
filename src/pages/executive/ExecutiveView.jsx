import React, { useEffect } from "react";

import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Stack,
  Avatar,
  Button,
  Chip,
  Divider,
  LinearProgress,
} from "@mui/material";

import {
  Person,
  Phone,
  Email,
  WhatsApp,
  BusinessCenter,
  Groups,
  EmojiEvents,
  Timeline,
  Edit,
  ArrowBack,
  QrCode2,
  Print,
  AccountTree,
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
  fetchExecutiveById,
} from "../../redux/slices/executiveSlice";

export default function ExecutiveView() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const {
    selectedExecutive,
  } = useSelector(
    state => state.executive
  );

  useEffect(() => {

    dispatch(fetchExecutiveById(id));

  }, [dispatch, id]);

  if (!selectedExecutive)
    return null;

  const achievement =
    selectedExecutive.target
      ? Math.round(
          (selectedExecutive.achievement /
            selectedExecutive.target) *
            100
        )
      : 0;

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

{selectedExecutive.memberName}

</Typography>

<Typography
color="text.secondary"
>

{selectedExecutive.designation}

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

navigate(

`/executives/edit/${id}`

)

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

navigate("/executives")

}

>

Back

</Button>

</Stack>

</Stack>

<Grid
container
spacing={3}
>

{/* LEFT */}

<Grid
item
xs={12}
lg={8}
>

<Stack spacing={3}>

<Card>

<CardHeader
title="Executive Profile"
/>

<CardContent>

<Grid
container
spacing={3}
>

<Grid item xs={3}>

<Avatar

src={
selectedExecutive.photo
}

sx={{
width:120,
height:120
}}

>

<Person/>

</Avatar>

</Grid>

<Grid item xs={9}>

<Typography
variant="h5"
fontWeight={700}
>

{selectedExecutive.memberName}

</Typography>

<Typography>

{selectedExecutive.designation}

</Typography>

<Typography>

{selectedExecutive.department}

</Typography>

<Chip

sx={{mt:2}}

label={
selectedExecutive.level
}

color="primary"

/>

</Grid>

</Grid>

</CardContent>

</Card>

<Card>

<CardHeader
title="Performance Dashboard"
/>

<CardContent>

<Grid
container
spacing={3}
>

<Grid item xs={4}>

<Typography>

Target

</Typography>

<Typography
variant="h4"
>

{selectedExecutive.target}

</Typography>

</Grid>

<Grid item xs={4}>

<Typography>

Achievement

</Typography>

<Typography
variant="h4"
>

{selectedExecutive.achievement}

</Typography>

</Grid>

<Grid item xs={4}>

<Typography>

Rating

</Typography>

<Typography
variant="h4"
>

⭐ {selectedExecutive.rating}

</Typography>

</Grid>

</Grid>

<Divider sx={{my:3}}/>

<Typography>

Performance

</Typography>

<LinearProgress

value={achievement}

variant="determinate"

sx={{

height:12,

borderRadius:6,

mt:1,

}}

 />

<Typography
mt={1}
>

{achievement}% Completed

</Typography>

</CardContent>

</Card>

<Card>

<CardHeader
title="Reporting Structure"
/>

<CardContent>

<Stack spacing={2}>

<Chip

icon={<AccountTree/>}

label={`Reports To : ${selectedExecutive.reportsToName || "-"}`}

/>

<Chip

icon={<Groups/>}

label={`Team Size : ${selectedExecutive.teamSize || 0}`}

/>

<Chip

icon={<BusinessCenter/>}

label={`Department : ${selectedExecutive.department}`}

/>

</Stack>

</CardContent>

</Card>

<Card>

<CardHeader
title="Appointment History"
/>

<CardContent>

{

(selectedExecutive.history||[])

.map((item,index)=>(

<Box key={index}>

<Stack
direction="row"
spacing={2}
>

<Avatar>

<Timeline/>

</Avatar>

<Box>

<Typography
fontWeight={600}
>

{item.title}

</Typography>

<Typography
variant="body2"
color="text.secondary"
>

{item.date}

</Typography>

</Box>

</Stack>

{

index<
selectedExecutive.history.length-1&&(

<Divider
sx={{my:2}}
/>

)

}

</Box>

))

}

</CardContent>

</Card>

</Stack>

</Grid>

{/* RIGHT */}

<Grid
item
xs={12}
lg={4}
>

<Stack spacing={3}>

<Card>

<CardHeader
title="Contact"
/>

<CardContent>

<Stack spacing={2}>

<Chip

icon={<Phone/>}

label={
selectedExecutive.officialMobile
}

/>

<Chip

icon={<WhatsApp/>}

label={
selectedExecutive.whatsapp
}

/>

<Chip

icon={<Email/>}

label={
selectedExecutive.officialEmail
}

/>

</Stack>

</CardContent>

</Card>

<Card>

<CardHeader
title="Responsibilities"
/>

<CardContent>

<Stack spacing={2}>

{

(selectedExecutive.responsibilities||[])

.map((item,index)=>(

<Chip

key={index}

label={item}

/>

))

}

</Stack>

</CardContent>

</Card>

<Card>

<CardHeader
title="Organization Statistics"
/>

<CardContent>

<Stack spacing={2}>

<Chip

icon={<Groups/>}

label={`Members : ${selectedExecutive.members || 0}`}

/>

<Chip

icon={<EmojiEvents/>}

label={`Committees : ${selectedExecutive.committees || 0}`}

/>

<Chip

icon={<BusinessCenter/>}

label={`Booths : ${selectedExecutive.booths || 0}`}

/>

</Stack>

</CardContent>

</Card>

<Card>

<CardHeader
title="QR Card"
/>

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

Executive QR Code

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