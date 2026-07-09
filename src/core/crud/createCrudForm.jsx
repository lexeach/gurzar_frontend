/* ============================================================
   Enterprise CRUD Form Engine
============================================================ */

import React,{

useEffect,

useMemo,

}from"react";

import{

useForm,

FormProvider,

}from"react-hook-form";

import{

Grid,

Paper,

Stack,

Typography,

Button,

Divider,

}from"@mui/material";

import DynamicField

from "../../components/form/DynamicField";

const DEFAULT_SCHEMA={

title:"",

sections:[],

};

export default function CrudForm({

schema=DEFAULT_SCHEMA,

defaultValues={},

onSubmit,

loading,

submitText="Save",

cancelText="Cancel",

onCancel,

}){

const methods=

useForm({

defaultValues,

mode:"onChange",

});

const{

handleSubmit,

reset,

}=methods;

useEffect(()=>{

reset(

defaultValues

);

},[

defaultValues,

reset,

]);

const sections=

useMemo(

()=>schema.sections||[],

[schema]

);


return(

<FormProvider

{...methods}

>

<form

onSubmit={

handleSubmit(

onSubmit

)

}

>

<Stack spacing={3}>

<Typography

variant="h5"

fontWeight={700}

>

{schema.title}

</Typography>

{

sections.map(

(section,index)=>(

<Paper

key={index}

sx={{

p:3,

}}

>

<Typography

variant="h6"

mb={2}

>

{section.title}

</Typography>

<Divider

sx={{

mb:3,

}}

/>

<Grid

container

spacing={2}

>

{

section.fields.map(

field=>(

<Grid

item

xs={12}

sm={

field.sm||

6

}

md={

field.md||

4

}

key={

field.name

}

>

<DynamicField

field={field}

/>

</Grid>

))

}

</Grid>

</Paper>

)

)

}

<Stack

direction="row"

spacing={2}

justifyContent="flex-end"

>

<Button

variant="outlined"

onClick={

onCancel

}

>

{cancelText}

</Button>

<Button

type="submit"

variant="contained"

disabled={

loading

}

>

{submitText}

</Button>

</Stack>

</Stack>

</form>

</FormProvider>

);
}