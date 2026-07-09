/* ============================================================
   Enterprise CRUD Slice Factory
============================================================ */

import{

createSlice,

createAsyncThunk,

createEntityAdapter,

}from"@reduxjs/toolkit";

/* ============================================================
   ENTITY ADAPTER
============================================================ */

const createAdapter=(

primaryKey="id"

)=>

createEntityAdapter({

selectId:(item)=>

item[primaryKey],

sortComparer:(a,b)=>

String(

a.name||

a.title||

""

).localeCompare(

String(

b.name||

b.title||

""

)

),

});


/* ============================================================
   FACTORY
============================================================ */

const createCrudSlice=({

name,

service,

primaryKey="id",

})=>{

const adapter=

createAdapter(

primaryKey

);

/* ============================================================
   ASYNC THUNKS
============================================================ */

const fetchAll=

createAsyncThunk(

`${name}/fetchAll`,

(params)=>

service.list(params)

);

const fetchOne=

createAsyncThunk(

`${name}/fetchOne`,

(id)=>

service.get(id)

);

const createItem=

createAsyncThunk(

`${name}/create`,

(data)=>

service.create(data)

);

const updateItem=

createAsyncThunk(

`${name}/update`,

(data)=>

service.update(data)

);

const deleteItem=

createAsyncThunk(

`${name}/delete`,

(id)=>{

service.remove(id);

return id;

}

);

/* ============================================================
   INITIAL STATE
============================================================ */

const initialState=

adapter.getInitialState({

loading:false,

saving:false,

deleting:false,

error:null,

success:false,

selected:[],

pagination:{

page:1,

pageSize:20,

total:0,

},

filters:{},

sort:{},

});


/* ============================================================
   SLICE
============================================================ */

const slice=

createSlice({

name,

initialState,

reducers:{

setFilters(

state,

action

){

state.filters=

action.payload;

},

setSort(

state,

action

){

state.sort=

action.payload;

},

setSelected(

state,

action

){

state.selected=

action.payload;

},

clearSelection(

state

){

state.selected=[];

},

clearError(

state

){

state.error=null;

},

resetSuccess(

state

){

state.success=false;

},

},

extraReducers:(builder)=>{

builder

.addCase(

fetchAll.pending,

(state)=>{

state.loading=true;

}

)

.addCase(

fetchAll.fulfilled,

(state,action)=>{

state.loading=false;

adapter.setAll(

state,

action.payload.data

);

state.pagination=

action.payload.pagination;

}

)

.addCase(

fetchOne.fulfilled,

(state,action)=>{

adapter.upsertOne(

state,

action.payload.data

);

}

)

.addCase(

createItem.fulfilled,

(state,action)=>{

adapter.addOne(

state,

action.payload.data

);

state.success=true;

}

)

.addCase(

updateItem.fulfilled,

(state,action)=>{

adapter.upsertOne(

state,

action.payload.data

);

state.success=true;

}

)

.addCase(

deleteItem.fulfilled,

(state,action)=>{

adapter.removeOne(

state,

action.payload

);

}

)

.addMatcher(

(action)=>

action.type.startsWith(

`${name}/`

)&&

action.type.endsWith(

"/rejected"

),

(state,action)=>{

state.loading=false;

state.error=

action.error.message;

}

);

}

});


const selectors=

adapter.getSelectors(

(state)=>

state[name]

);

return{

reducer:

slice.reducer,

actions:{

...slice.actions,

fetchAll,

fetchOne,

createItem,

updateItem,

deleteItem,

},

selectors,

};

};

export default

createCrudSlice;