import React,{useEffect} from "react";

import{
useDispatch,
useSelector,
}from"react-redux";

import{
useNavigate,
}from"react-router-dom";

import{
MasterList,
}from"../../components/crud";

import{

fetchHierarchy,

deleteHierarchy,

}from"../../redux/slices/hierarchySlice";

export default function HierarchyPage({

title,

subtitle,

level,

}){

const dispatch=useDispatch();

const navigate=useNavigate();

const{

hierarchy,

loading,

error,

}=useSelector(

state=>state.hierarchy

);

useEffect(()=>{

dispatch(

fetchHierarchy(level)

);

},[dispatch,level]);

const columns=[

{

field:"code",

headerName:`${level} Code`,

width:170,

},

{

field:"name",

headerName:`${level} Name`,

flex:1,

},

{

field:"parent",

headerName:"Parent",

width:220,

},

{

field:"members",

headerName:"Members",

width:140,

type:"number",

},

{

field:"status",

headerName:"Status",

width:120,

type:"status",

},

];

return(

<MasterList

moduleName={level.toLowerCase()}

title={title}

subtitle={subtitle}

rows={hierarchy}

columns={columns}

loading={loading}

error={error}

rowId="id"

showSearch

showRefresh

showExport

showImport

selectable

onRefresh={()=>

dispatch(fetchHierarchy(level))

}

onAdd={()=>

navigate(`/hierarchy/${level.toLowerCase()}/new`)

}

onView={(row)=>

navigate(`/hierarchy/${level.toLowerCase()}/${row.id}`)

}

onEdit={(row)=>

navigate(`/hierarchy/${level.toLowerCase()}/edit/${row.id}`)

}

onDelete={(row)=>

dispatch(deleteHierarchy(row.id))

}

/>

);

}