/* ============================================================
   Enterprise CRUD Record Viewer
============================================================ */

import React,{useEffect}from"react";

import{

Box,
Card,
CardContent,
Divider,
Grid,
Stack,
Typography,
Button,
Chip,

}from"@mui/material";

import{

useDispatch,
useSelector,

}from"react-redux";

import{

useNavigate,
useParams,

}from"react-router-dom";

const DEFAULT_SCHEMA={

title:"",

sections:[],

};

export default function CrudView({

schema=DEFAULT_SCHEMA,

slice,

actions,

}){

const{id}=useParams();

const dispatch=

useDispatch();

const navigate=

useNavigate();

const record=

useSelector(

state=>

slice.selectors.selectById(

state,

id

)

);

const loading=

useSelector(

state=>

state[slice.name].loading

);

useEffect(()=>{

if(!record){

dispatch(

actions.fetchOne(id)

);

}

},[

dispatch,

id,

record,

actions,

]);


if(loading){

return<>Loading...</>;

}

if(!record){

return<>Record not found.</>;

}

return(

<Box>

<Stack

direction="row"

justifyContent="space-between"

mb={3}

>

<Typography

variant="h4"

fontWeight={700}

>

{schema.title}

</Typography>

<Button

variant="contained"

onClick={()=>

navigate(-1)

}

>

Back

</Button>

</Stack>

{

schema.sections.map(

(section,index)=>(

<Card

key={index}

sx={{mb:3}}

>

<CardContent>

<Typography

variant="h6"

mb={2}

>

{section.title}

</Typography>

<Divider sx={{mb:3}}/>

<Grid container spacing={2}>

{

section.fields.map(

field=>(

<Grid

item

xs={12}

md={6}

key={field.name}

>

<Stack spacing={1}>

<Typography

variant="caption"

color="text.secondary"

>

{field.label}

</Typography>

<Typography>

{

String(

record[field.name]??

"-"

)

}

</Typography>

</Stack>

</Grid>

)
)
}

</Grid>

</CardContent>

</Card>

)

)

}

</Box>

);

}