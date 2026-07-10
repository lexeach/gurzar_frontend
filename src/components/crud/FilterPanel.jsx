import {

Paper,

Grid,

Button,

Stack,

} from "@mui/material";

import DynamicField

from "../form/DynamicField";

export default function FilterPanel({

fields=[],

values={},

onChange,

onReset,

}){

return(

<Paper sx={{p:2,mb:2}}>

<Grid container spacing={2}>

{

fields.map(field=>(

<Grid

item

xs={12}

md={4}

key={field.name}

>

<DynamicField

field={field}

value={values[field.name]}

onChange={(value)=>

onChange(

field.name,

value

)

}

/>

</Grid>

))

}

</Grid>

<Stack

direction="row"

justifyContent="flex-end"

mt={2}

>

<Button

onClick={onReset}

>

Reset

</Button>

</Stack>

</Paper>

);

}