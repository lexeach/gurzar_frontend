/* ============================================================
   Enterprise CRUD Page Factory
============================================================ */

import React,{

useEffect,

useMemo,

useState,

}from"react";

import{

useDispatch,

useSelector,

}from"react-redux";

import{

useNavigate,

}from"react-router-dom";

import{

Box,

Paper,

Stack,

}from"@mui/material";

import MasterList from "../../components/crud/MasterList";

import LoadingOverlay from "../../components/common/LoadingOverlay";

import ErrorAlert from "../../components/common/ErrorAlert";

const DEFAULT_OPTIONS={

title:"",

subtitle:"",

module:"",

slice:null,

columns:[],

filters:[],

form:null,

view:null,

permissions:{},

pageSize:20,

showToolbar:true,

showSearch:true,

showFilters:true,

showExport:true,

showImport:true,

showRefresh:true,

showBulkActions:true,

};

const createCrudPage=(options={})=>{

const config={

...DEFAULT_OPTIONS,

...options,

};

return function CrudPage(){

const dispatch=

useDispatch();

const navigate=

useNavigate();

/* ============================================================
Redux
============================================================ */

const{

actions,

selectors,

}=config.slice;

const rows=

useSelector(

selectors.selectAll

);

const loading=

useSelector(

state=>

state[config.module].loading

);

const error=

useSelector(

state=>

state[config.module].error

);

const pagination=

useSelector(

state=>

state[config.module].pagination

);

const filters=

useSelector(

state=>

state[config.module].filters

);

const selected=

useSelector(

state=>

state[config.module].selected

);


/* ============================================================
State
============================================================ */

const[search,

setSearch]=

useState("");

const[refreshKey,

setRefreshKey]=

useState(0);

const[listFilters,

setListFilters]=

useState(filters);

const columns=

useMemo(

()=>config.columns,

[]

);


/* ============================================================
Load
============================================================ */

useEffect(()=>{

dispatch(

actions.fetchAll({

page:

pagination.page,

pageSize:

pagination.pageSize,

search,

...listFilters,

})

);

},

[

dispatch,

refreshKey,

pagination.page,

pagination.pageSize,

search,

listFilters,

]);


/* ============================================================
Actions
============================================================ */

const handleRefresh=()=>{

setRefreshKey(

v=>v+1

);

};

const handleAdd=()=>{

navigate(

`/${config.module}/new`

);

};

const handleView=row=>{

navigate(

`/${config.module}/view/${row.id}`

);

};

const handleEdit=row=>{

navigate(

`/${config.module}/edit/${row.id}`

);

};

const handleDelete=row=>{

dispatch(

actions.deleteItem(

row.id

)

);

};}}