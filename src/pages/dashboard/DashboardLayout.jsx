import React from "react";
import { Grid, Typography } from "@mui/material";

import DashboardCards from "../../components/dashboard/DashboardCards";
import Statistics from "../../components/dashboard/Statistics";
import RecentActivities from "../../components/dashboard/RecentActivities";
import QuickActions from "../../components/dashboard/QuickActions";
import Charts from "../../components/dashboard/Charts";

export default function DashboardLayout({

title,
subtitle,
level,

}){

return(

<Grid container spacing={3}>

<Grid item xs={12}>

<Typography variant="h4" fontWeight={700}>
{title}
</Typography>

<Typography color="text.secondary">
{subtitle}
</Typography>

</Grid>

<Grid item xs={12}>
<DashboardCards level={level}/>
</Grid>

<Grid item xs={12} md={8}>
<Charts level={level}/>
</Grid>

<Grid item xs={12} md={4}>
<QuickActions level={level}/>
</Grid>

<Grid item xs={12} md={6}>
<Statistics level={level}/>
</Grid>

<Grid item xs={12} md={6}>
<RecentActivities level={level}/>
</Grid>

</Grid>

);

}