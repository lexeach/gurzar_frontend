import React, { useState } from "react";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Collapse,
  Grid,
  IconButton,
  LinearProgress,
  Stack,
  Typography,
  Tooltip,
} from "@mui/material";

import {
  ExpandMore,
  ExpandLess,
  Person,
  Visibility,
  Edit,
  QrCode2,
  Print,
  SwapHoriz,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

export default function OrganizationNode({

  node,

}) {

  const navigate = useNavigate();

  const [

    expanded,

    setExpanded,

  ] = useState(true);

  if (!node) return null;

  return (

<Box
sx={{
textAlign:"center",
mb:4,
}}
>

<Card
sx={{
display:"inline-block",
minWidth:320,
borderRadius:3,
}}
>

<CardContent>

<Stack
spacing={2}
alignItems="center"
>

<Avatar

src={node.photo}

sx={{
width:80,
height:80,
}}

>

<Person/>

</Avatar>

<Box>

<Typography
variant="h6"
fontWeight={700}
>

{node.name}

</Typography>

<Typography
color="text.secondary"
>

{node.designation}

</Typography>

<Chip

label={node.level}

color="primary"

size="small"

sx={{mt:1}}

/>

</Box>

<Grid
container
spacing={2}
>

<Grid item xs={4}>

<Typography
variant="caption"
>

Members

</Typography>

<Typography
fontWeight={700}
>

{node.members || 0}

</Typography>

</Grid>

<Grid item xs={4}>

<Typography
variant="caption"
>

Booths

</Typography>

<Typography
fontWeight={700}
>

{node.booths || 0}

</Typography>

</Grid>

<Grid item xs={4}>

<Typography
variant="caption"
>

Committees

</Typography>

<Typography
fontWeight={700}
>

{node.committees || 0}

</Typography>

</Grid>

</Grid>

<Box
width="100%"
>

<Typography
variant="body2"
mb={1}
>

Performance

</Typography>

<LinearProgress

variant="determinate"

value={node.performance || 0}

sx={{
height:8,
borderRadius:5,
}}

/>

</Box>

<Stack
direction="row"
spacing={1}
>

<Tooltip title="View">

<IconButton

onClick={()=>

navigate(

`/executives/${node.id}`

)

}

>

<Visibility/>

</IconButton>

</Tooltip>

<Tooltip title="Edit">

<IconButton

onClick={()=>

navigate(

`/executives/edit/${node.id}`

)

}

>

<Edit/>

</IconButton>

</Tooltip>

<Tooltip title="Transfer">

<IconButton>

<SwapHoriz/>

</IconButton>

</Tooltip>

<Tooltip title="QR">

<IconButton>

<QrCode2/>

</IconButton>

</Tooltip>

<Tooltip title="Print">

<IconButton>

<Print/>

</IconButton>

</Tooltip>

</Stack>

{

(node.children?.length>0)&&(

<IconButton

onClick={()=>

setExpanded(

!expanded

)

}

>

{

expanded

?

<ExpandLess/>

:

<ExpandMore/>

}

</IconButton>

)

}

</Stack>

</CardContent>

</Card>

{

node.children?.length>0&&(

<Collapse
in={expanded}
>

<Box
mt={4}
>

<Grid
container
justifyContent="center"
spacing={4}
>

{

node.children.map(

child=>(

<Grid

item

key={child.id}

>

<OrganizationNode

node={child}

/>

</Grid>

)

)

}

</Grid>

</Box>

</Collapse>

)

}

</Box>

);

}