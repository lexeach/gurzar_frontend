import React from "react";

import{

Card,
CardContent,
Typography,

}from"@mui/material";

export default function Charts({level}){

return(

<Card>

<CardContent>

<Typography
variant="h6"
mb={2}
>

{level} Analytics

</Typography>

<div

style={{

height:300,

display:"flex",

alignItems:"center",

justifyContent:"center",

border:"1px dashed #ccc",

borderRadius:8,

}}

>

Charts will be displayed here

</div>

</CardContent>

</Card>

);

}