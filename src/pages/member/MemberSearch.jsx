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

fetchMembers,

deleteMember,

}from"../../redux/slices/memberSlice";

const columns=[

{

field:"memberId",

headerName:"Member ID",

width:160,

},

{

field:"fullName",

headerName:"Name",

flex:1,

minWidth:220,

},

{

field:"mobile",

headerName:"Mobile",

width:160,

},

{

field:"village",

headerName:"Village",

width:180,

},

{

field:"tehsil",

headerName:"Tehsil",

width:180,

},

{

field:"district",

headerName:"District",

width:180,

},

{

field:"status",

headerName:"Status",

width:130,

type:"status",

},

];

const filters=[

{

name:"state",

label:"State",

type:"autocomplete",

api:"/states",

},

{

name:"district",

label:"District",

type:"autocomplete",

api:"/districts",

},

{

name:"tehsil",

label:"Tehsil",

type:"autocomplete",

api:"/tehsils",

},

{

name:"village",

label:"Village",

type:"autocomplete",

api:"/villages",

},

{

name:"status",

label:"Status",

type:"status",

},

];

export default function MemberSearch(){

const dispatch=useDispatch();

const navigate=useNavigate();

const{

members,

loading,

error,

}=useSelector(

state=>state.member

);

useEffect(()=>{

dispatch(

fetchMembers()

);

},[dispatch]);

return(

<MasterList

moduleName="members"

title="Member Search"

subtitle="Search Registered Members"

rows={members}

columns={columns}

filters={filters}

loading={loading}

error={error}

rowId="id"

showSearch

showExport

showImport

showRefresh

selectable

onRefresh={()=>

dispatch(fetchMembers())

}

onView={(row)=>

navigate(`/members/view/${row.id}`)

}

onEdit={(row)=>

navigate(`/members/edit/${row.id}`)

}

onDelete={(row)=>

dispatch(deleteMember(row.id))

}

customActions={[

{

label:"QR Card",

icon:"qr_code",

onClick:(row)=>

navigate(`/members/${row.id}/qr`)

},

{

label:"Profile",

icon:"person",

onClick:(row)=>

navigate(`/members/profile/${row.id}`)

}

]}

/>

);

}