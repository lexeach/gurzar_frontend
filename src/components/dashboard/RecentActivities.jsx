import React from "react";

import{

Card,
CardContent,
Typography,
List,
ListItem,
ListItemText,

}from"@mui/material";

const activities=[

"New member registered",

"Committee approved",

"Survey completed",

"Report exported",

"Meeting scheduled",

];

export default function RecentActivities(){

return(

<Card>

<CardContent>

<Typography
variant="h6"
mb={2}
>

Recent Activities

</Typography>

<List>

{

activities.map((item,index)=>(

<ListItem
key={index}
divider
>

<ListItemText

primary={item}

secondary="Today"

/>

</ListItem>

))

}

</List>

</CardContent>

</Card>

);

}