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
  LinearProgress,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
} from "@mui/material";

import {
  Groups,
  Event,
  Assignment,
  TrendingUp,
  Warning,
  CheckCircle,
  Timeline,
  Person,
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
  fetchCommitteeDashboard,
} from "../../redux/slices/committeeSlice";

export default function CommitteeDashboard() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const {

    dashboard,

    loading,

  } = useSelector(

    state => state.committee

  );

  useEffect(() => {

    dispatch(

      fetchCommitteeDashboard(id)

    );

  }, [dispatch, id]);

  if (!dashboard) return null;

  return (

<Box>

<Typography

variant="h4"

fontWeight={700}

mb={3}

>

Committee Dashboard

</Typography>

<Grid container spacing={3}>

{/* KPI Cards */}

<Grid item xs={12} md={3}>

<Card>

<CardContent>

<Stack alignItems="center">

<Groups color="primary"/>

<Typography variant="h4">

{dashboard.totalMembers}

</Typography>

<Typography>

Members

</Typography>

</Stack>

</CardContent>

</Card>

</Grid>

<Grid item xs={12} md={3}>

<Card>

<CardContent>

<Stack alignItems="center">

<Event color="success"/>

<Typography variant="h4">

{dashboard.meetings}

</Typography>

<Typography>

Meetings

</Typography>

</Stack>

</CardContent>

</Card>

</Grid>

<Grid item xs={12} md={3}>

<Card>

<CardContent>

<Stack alignItems="center">

<Assignment color="warning"/>

<Typography variant="h4">

{dashboard.tasks}

</Typography>

<Typography>

Tasks

</Typography>

</Stack>

</CardContent>

</Card>

</Grid>

<Grid item xs={12} md={3}>

<Card>

<CardContent>

<Stack alignItems="center">

<TrendingUp color="error"/>

<Typography variant="h4">

{dashboard.performance}%

</Typography>

<Typography>

Performance

</Typography>

</Stack>

</CardContent>

</Card>

</Grid>

{/* Health */}

<Grid item xs={12} md={8}>

<Card>

<CardHeader title="Committee Health"/>

<CardContent>

<Typography gutterBottom>

Overall Health Score

</Typography>

<LinearProgress

variant="determinate"

value={dashboard.healthScore}

sx={{

height:12,

borderRadius:6,

mb:2,

}}

/>

<Typography>

{dashboard.healthScore}% Healthy

</Typography>

</CardContent>

</Card>

</Grid>

<Grid item xs={12} md={4}>

<Card>

<CardHeader title="Quick Actions"/>

<CardContent>

<Stack spacing={2}>

<Button

variant="contained"

onClick={()=>

navigate(

`/committees/${id}/members`

)

}

>

Members

</Button>

<Button

variant="contained"

onClick={()=>

navigate(

`/committees/${id}/meetings`

)

}

>

Meetings

</Button>

<Button

variant="contained"

onClick={()=>

navigate(

`/committees/${id}/tasks`

)

}

>

Tasks

</Button>

</Stack>

</CardContent>

</Card>

</Grid>

{/* Upcoming Meetings */}

<Grid item xs={12} md={6}>

<Card>

<CardHeader title="Upcoming Meetings"/>

<CardContent>

<List>

{

(dashboard.upcomingMeetings||[])

.map(meeting=>(

<ListItem key={meeting.id}>

<ListItemAvatar>

<Avatar>

<Event/>

</Avatar>

</ListItemAvatar>

<ListItemText

primary={meeting.title}

secondary={meeting.date}

/>

</ListItem>

))

}

</List>

</CardContent>

</Card>

</Grid>

{/* Pending Tasks */}

<Grid item xs={12} md={6}>

<Card>

<CardHeader title="Pending Tasks"/>

<CardContent>

<List>

{

(dashboard.pendingTasks||[])

.map(task=>(

<ListItem key={task.id}>

<ListItemAvatar>

<Avatar>

<Assignment/>

</Avatar>

</ListItemAvatar>

<ListItemText

primary={task.title}

secondary={task.assignedTo}

/>

<Chip

label={task.priority}

color="warning"

/>

</ListItem>

))

}

</List>

</CardContent>

</Card>

</Grid>

{/* Top Members */}

<Grid item xs={12} md={6}>

<Card>

<CardHeader title="Top Performing Members"/>

<CardContent>

<List>

{

(dashboard.topMembers||[])

.map(member=>(

<ListItem key={member.id}>

<ListItemAvatar>

<Avatar>

<Person/>

</Avatar>

</ListItemAvatar>

<ListItemText

primary={member.name}

secondary={`${member.score}% Performance`}

/>

</ListItem>

))

}

</List>

</CardContent>

</Card>

</Grid>

{/* Recent Activity */}

<Grid item xs={12} md={6}>

<Card>

<CardHeader title="Recent Activities"/>

<CardContent>

<List>

{

(dashboard.activities||[])

.map(activity=>(

<ListItem key={activity.id}>

<ListItemAvatar>

<Avatar>

<Timeline/>

</Avatar>

</ListItemAvatar>

<ListItemText

primary={activity.title}

secondary={activity.date}

/>

</ListItem>

))

}

</List>

</CardContent>

</Card>

</Grid>

</Grid>

</Box>

);

}