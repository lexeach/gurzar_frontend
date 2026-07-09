import React from "react";

import {
  Card,
  CardHeader,
  CardContent,
  Stack,
  Typography,
  Chip,
  Divider,
  LinearProgress,
  Box,
} from "@mui/material";

import {
  Circle,
  Person,
  Groups,
  BusinessCenter,
  EmojiEvents,
} from "@mui/icons-material";

export default function OrganizationLegend() {

  return (

<Card>

<CardHeader

title="Organization Summary"

subheader="Hierarchy & Statistics"

/>

<CardContent>

<Stack spacing={3}>

{/* Status */}

<Box>

<Typography
fontWeight={600}
mb={1}
>

Status

</Typography>

<Stack spacing={1}>

<Chip

icon={<Circle color="success"/>}

label="Active Executive"

/>

<Chip

icon={<Circle color="warning"/>}

label="Temporary Appointment"

/>

<Chip

icon={<Circle color="error"/>}

label="Vacant Position"

/>

<Chip

icon={<Circle color="disabled"/>}

label="Inactive"

/>

</Stack>

</Box>

<Divider/>

{/* Performance */}

<Box>

<Typography
fontWeight={600}
mb={1}
>

Performance

</Typography>

<Stack spacing={2}>

<Box>

<Typography
variant="caption"
>

Excellent

</Typography>

<LinearProgress

variant="determinate"

value={100}

color="success"

/>

</Box>

<Box>

<Typography
variant="caption"
>

Average

</Typography>

<LinearProgress

variant="determinate"

value={60}

color="warning"

/>

</Box>

<Box>

<Typography
variant="caption"
>

Needs Improvement

</Typography>

<LinearProgress

variant="determinate"

value={30}

color="error"

/>

</Box>

</Stack>

</Box>

<Divider/>

{/* Organization */}

<Box>

<Typography
fontWeight={600}
mb={1}
>

Organization Statistics

</Typography>

<Stack spacing={1}>

<Chip

icon={<Person/>}

label="Executives : 2,340"

/>

<Chip

icon={<Groups/>}

label="Members : 84,620"

/>

<Chip

icon={<BusinessCenter/>}

label="Booths : 6,840"

/>

<Chip

icon={<EmojiEvents/>}

label="Committees : 1,275"

/>

</Stack>

</Box>

<Divider/>

{/* Legend */}

<Box>

<Typography
fontWeight={600}
mb={1}
>

Node Information

</Typography>

<Typography
variant="body2"
color="text.secondary"
>

Each organization card displays:

</Typography>

<Stack
spacing={1}
mt={1}
>

<Typography variant="body2">

• Executive Photo

</Typography>

<Typography variant="body2">

• Designation & Level

</Typography>

<Typography variant="body2">

• Members Count

</Typography>

<Typography variant="body2">

• Booth Count

</Typography>

<Typography variant="body2">

• Committee Count

</Typography>

<Typography variant="body2">

• Performance %

</Typography>

<Typography variant="body2">

• Quick Actions

</Typography>

</Stack>

</Box>

</Stack>

</CardContent>

</Card>

);

}