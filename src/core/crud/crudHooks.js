/* ============================================================
   Enterprise CRUD Hooks
============================================================ */

import {

useCallback,
useEffect,
useMemo,
useState,

} from "react";

import {

useDispatch,
useSelector,

} from "react-redux";

import {

useNavigate,

} from "react-router-dom";

/* ============================================================
CRUD
============================================================ */

export const useCrud=(slice)=>{

const dispatch=useDispatch();

const navigate=useNavigate();

const {

actions,
selectors,

}=slice;

const rows=

useSelector(

selectors.selectAll

);

const loading=

useSelector(

state=>

state[slice.name].loading

);

const error=

useSelector(

state=>

state[slice.name].error

);

const refresh=

useCallback(

(params={})=>

dispatch(

actions.fetchAll(params)

),

[dispatch,actions]

);

const create=

useCallback(

data=>

dispatch(

actions.createItem(data)

),

[dispatch,actions]

);

const update=

useCallback(

data=>

dispatch(

actions.updateItem(data)

),

[dispatch,actions]

);

const remove=

useCallback(

id=>

dispatch(

actions.deleteItem(id)

),

[dispatch,actions]

);

return{

rows,

loading,

error,

refresh,

create,

update,

remove,

navigate,

};

};

/* ============================================================
SEARCH
============================================================ */

export const useSearch=(

initial=""

)=>{

const[search,

setSearch]=

useState(initial);

const clear=()=>

setSearch("");

return{

search,

setSearch,

clear,

};

};

/* ============================================================
PAGINATION
============================================================ */

export const usePagination=(

pageSize=20

)=>{

const[page,

setPage]=

useState(1);

const[size,

setPageSize]=

useState(pageSize);

return{

page,

pageSize:size,

setPage,

setPageSize,

};

};

/* ============================================================
FILTERS
============================================================ */

export const useFilters=(

initial={}

)=>{

const[filters,

setFilters]=

useState(initial);

const reset=()=>

setFilters(initial);

return{

filters,

setFilters,

reset,

};

};

/* ============================================================
SELECTION
============================================================ */

export const useSelection=()=>{

const[selected,

setSelected]=

useState([]);

const clear=()=>

setSelected([]);

return{

selected,

setSelected,

clear,

};

};

/* ============================================================
REFRESH
============================================================ */

export const useRefresh=(

callback,

deps=[]

)=>{

useEffect(()=>{

callback();

},

deps);

};

/* ============================================================
TABLE
============================================================ */

export const useTable=(

slice

)=>{

const crud=

useCrud(slice);

const search=

useSearch();

const pagination=

usePagination();

const filters=

useFilters();

const selection=

useSelection();

return{

...crud,

...search,

...pagination,

...filters,

...selection,

};

};