import React from "react";

import{

Breadcrumbs,
Typography,
Link,

}from"@mui/material";

import{

useLocation,
Link as RouterLink,

}from"react-router-dom";

export default function Breadcrumb(){

const location=

useLocation();

const paths=

location.pathname

.split("/")

.filter(Boolean);

return(

<Breadcrumbs

sx={{mb:2}}

>

<Link

component={RouterLink}

to="/"

underline="hover"

>

Home

</Link>

{

paths.map(

(path,index)=>{

const url="/"+

paths

.slice(

0,

index+1

)

.join("/");

const last=

index===

paths.length-1;

return last?(

<Typography

key={url}

>

{path}

</Typography>

):(

<Link

key={url}

component={RouterLink}

to={url}

underline="hover"

>

{path}

</Link>

);

}

)

}

</Breadcrumbs>

);

}