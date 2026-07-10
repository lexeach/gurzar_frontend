import React from "react";

import {

AppBar,
Toolbar,
Typography,
IconButton,
Avatar,
Badge,
Box,

} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Header({

title="DOMS",

onMenuClick,

user={},

}){

return(

<AppBar

position="sticky"

color="inherit"

elevation={1}

>

<Toolbar>

<IconButton

edge="start"

onClick={onMenuClick}

>

<MenuIcon/>

</IconButton>

<Typography

variant="h6"

sx={{

flexGrow:1,

fontWeight:700,

}}

>

{title}

</Typography>

<Badge

badgeContent={3}

color="error"

>

<NotificationsIcon/>

</Badge>

<Box ml={3}>

<Avatar>

{

user?.name?.charAt(0) ||

"U"

}

</Avatar>

</Box>

</Toolbar>

</AppBar>

);

}