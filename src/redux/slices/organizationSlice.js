import {

createSlice,

createAsyncThunk,

} from "@reduxjs/toolkit";

import organizationService from "../../services/organizationService";

/* =======================================================
   ORGANIZATION CRUD
======================================================= */

export const fetchOrganizations = createAsyncThunk(

"organization/fetchOrganizations",

async (params = {}, thunkAPI) => {

try {

return await organizationService.getOrganizations(params);

}

catch (error) {

return thunkAPI.rejectWithValue(

error.response?.data ||

error.message

);

}

}

);

export const fetchOrganization = createAsyncThunk(

"organization/fetchOrganization",

async (id, thunkAPI) => {

try {

return await organizationService.getOrganization(id);

}

catch (error) {

return thunkAPI.rejectWithValue(

error.response?.data ||

error.message

);

}

}

);

export const createOrganization = createAsyncThunk(

"organization/createOrganization",

async (data, thunkAPI) => {

try {

return await organizationService.createOrganization(data);

}

catch (error) {

return thunkAPI.rejectWithValue(

error.response?.data ||

error.message

);

}

}

);

export const updateOrganization = createAsyncThunk(

"organization/updateOrganization",

async (data, thunkAPI) => {

try {

return await organizationService.updateOrganization(data);

}

catch (error) {

return thunkAPI.rejectWithValue(

error.response?.data ||

error.message

);

}

}

);

export const deleteOrganization = createAsyncThunk(

"organization/deleteOrganization",

async (id, thunkAPI) => {

try {

await organizationService.deleteOrganization(id);

return id;

}

catch (error) {

return thunkAPI.rejectWithValue(

error.response?.data ||

error.message

);

}

}

);

/* =======================================================
   BULK ACTIONS
======================================================= */

export const activateOrganizations = createAsyncThunk(

"organization/activateOrganizations",

async (ids) =>

organizationService.activateOrganizations(ids)

);

export const deactivateOrganizations = createAsyncThunk(

"organization/deactivateOrganizations",

async (ids) =>

organizationService.deactivateOrganizations(ids)

);

export const deleteOrganizations = createAsyncThunk(

"organization/deleteOrganizations",

async (ids) =>

organizationService.deleteOrganizations(ids)

);

/* =======================================================
   DASHBOARD
======================================================= */

export const fetchOrganizationDashboard = createAsyncThunk(

"organization/dashboard",

async () =>

organizationService.getDashboard()

);

/* =======================================================
   STATISTICS
======================================================= */

export const fetchOrganizationStatistics = createAsyncThunk(

"organization/statistics",

async () =>

organizationService.getStatistics()

);

/* =======================================================
   HIERARCHY
======================================================= */

export const fetchHierarchy = createAsyncThunk(

"organization/hierarchy",

async () =>

organizationService.getHierarchy()

);

/* =======================================================
   EXPORT / IMPORT
======================================================= */

export const exportOrganizations = createAsyncThunk(

"organization/export",

async (params) =>

organizationService.exportOrganizations(params)

);

export const importOrganizations = createAsyncThunk(

"organization/import",

async (file) =>

organizationService.importOrganizations(file)

);

/* =======================================================
   INITIAL STATE
======================================================= */

const initialState = {

organizations:[],

organization:null,

dashboard:null,

statistics:null,

hierarchy:[],

loading:false,

saving:false,

deleting:false,

exporting:false,

importing:false,

error:null,

success:false,

selectedRows:[],

pagination:{

page:0,

pageSize:20,

total:0,

},

filters:{

search:"",

status:"",

type:"",

state:"",

district:"",

},

sort:{

field:"name",

direction:"asc",

},

};

/* =======================================================
   SLICE
======================================================= */

const organizationSlice=createSlice({

name:"organization",

initialState,

reducers:{

/* ==========================================
Selection
========================================== */

setSelectedRows(state,action){

state.selectedRows=action.payload;

},

clearSelectedRows(state){

state.selectedRows=[];

},

/* ==========================================
Pagination
========================================== */

setPage(state,action){

state.pagination.page=action.payload;

},

setPageSize(state,action){

state.pagination.pageSize=action.payload;

},

setPagination(state,action){

state.pagination={

...state.pagination,

...action.payload,

};

},

/* ==========================================
Search
========================================== */

setSearch(state,action){

state.filters.search=action.payload;

},

/* ==========================================
Filters
========================================== */

setFilters(state,action){

state.filters={

...state.filters,

...action.payload,

};

},

clearFilters(state){

state.filters={

search:"",

status:"",

type:"",

state:"",

district:"",

};

},

/* ==========================================
Sorting
========================================== */

setSort(state,action){

state.sort=action.payload;

},

/* ==========================================
Current Organization
========================================== */

setOrganization(state,action){

state.organization=action.payload;

},

clearOrganization(state){

state.organization=null;

},

/* ==========================================
Status
========================================== */

clearError(state){

state.error=null;

},

clearSuccess(state){

state.success=false;

},

resetState(){

return initialState;

},

},

extraReducers:(builder)=>{

builder

/* ==========================================
Pending
========================================== */

.addMatcher(

(action)=>

action.type.startsWith("organization/")&&

action.type.endsWith("/pending"),

(state)=>{

state.loading=true;

state.error=null;

}

)

/* ==========================================
Rejected
========================================== */

.addMatcher(

(action)=>

action.type.startsWith("organization/")&&

action.type.endsWith("/rejected"),

(state,action)=>{

state.loading=false;

state.success=false;

state.error=

action.payload||

action.error.message;

}

);

}

});

extraReducers:(builder)=>{

builder

/* ======================================================
FETCH ORGANIZATIONS
====================================================== */

.addCase(

fetchOrganizations.pending,

(state)=>{

state.loading=true;

state.error=null;

}

)

.addCase(

fetchOrganizations.fulfilled,

(state,action)=>{

state.loading=false;

state.organizations=

action.payload.data||

action.payload;

state.pagination.total=

action.payload.total||

action.payload.length||

0;

state.success=true;

}

)

.addCase(

fetchOrganizations.rejected,

(state,action)=>{

state.loading=false;

state.error=

action.payload||

action.error.message;

}

)

/* ======================================================
FETCH SINGLE ORGANIZATION
====================================================== */

.addCase(

fetchOrganization.fulfilled,

(state,action)=>{

state.organization=

action.payload;

}

/* ======================================================
CREATE
====================================================== */

)

.addCase(

createOrganization.pending,

(state)=>{

state.saving=true;

}

)

.addCase(

createOrganization.fulfilled,

(state,action)=>{

state.saving=false;

state.success=true;

state.organizations.unshift(

action.payload

);

}

)

.addCase(

createOrganization.rejected,

(state,action)=>{

state.saving=false;

state.error=

action.payload||

action.error.message;

}

/* ======================================================
UPDATE
====================================================== */

)

.addCase(

updateOrganization.pending,

(state)=>{

state.saving=true;

}

)

.addCase(

updateOrganization.fulfilled,

(state,action)=>{

state.saving=false;

state.success=true;

state.organization=

action.payload;

state.organizations=

state.organizations.map(

item=>

item.id===action.payload.id

?

action.payload

:

item

);

}

)

.addCase(

updateOrganization.rejected,

(state,action)=>{

state.saving=false;

state.error=

action.payload||

action.error.message;

}

/* ======================================================
DELETE
====================================================== */

)

.addCase(

deleteOrganization.pending,

(state)=>{

state.deleting=true;

}

)

.addCase(

deleteOrganization.fulfilled,

(state,action)=>{

state.deleting=false;

state.success=true;

state.organizations=

state.organizations.filter(

item=>

item.id!==action.payload

);

}

)

.addCase(

deleteOrganization.rejected,

(state,action)=>{

state.deleting=false;

state.error=

action.payload||

action.error.message;

}

/* ======================================================
BULK ACTIVATE
====================================================== */

)

.addCase(

activateOrganizations.fulfilled,

(state)=>{

state.success=true;

}

/* ======================================================
BULK DEACTIVATE
====================================================== */

)

.addCase(

deactivateOrganizations.fulfilled,

(state)=>{

state.success=true;

}

/* ======================================================
BULK DELETE
====================================================== */

)

.addCase(

deleteOrganizations.fulfilled,

(state)=>{

state.success=true;

}

/* ======================================================
DASHBOARD
====================================================== */

)

.addCase(

fetchOrganizationDashboard.fulfilled,

(state,action)=>{

state.dashboard=

action.payload;

}

/* ======================================================
STATISTICS
====================================================== */

)

.addCase(

fetchOrganizationStatistics.fulfilled,

(state,action)=>{

state.statistics=

action.payload;

}

/* ======================================================
HIERARCHY
====================================================== */

)

.addCase(

fetchHierarchy.fulfilled,

(state,action)=>{

state.hierarchy=

action.payload;

}

/* ======================================================
EXPORT
====================================================== */

)

.addCase(

exportOrganizations.pending,

(state)=>{

state.exporting=true;

}

)

.addCase(

exportOrganizations.fulfilled,

(state)=>{

state.exporting=false;

}

)

.addCase(

exportOrganizations.rejected,

(state,action)=>{

state.exporting=false;

state.error=

action.payload||

action.error.message;

}

/* ======================================================
IMPORT
====================================================== */

)

.addCase(

importOrganizations.pending,

(state)=>{

state.importing=true;

}

)

.addCase(

importOrganizations.fulfilled,

(state)=>{

state.importing=false;

state.success=true;

}

)

.addCase(

importOrganizations.rejected,

(state,action)=>{

state.importing=false;

state.error=

action.payload||

action.error.message;

}

);

}

/* =======================================================
   SELECTORS
======================================================= */

export const selectOrganizations=(state)=>
state.organization.organizations;

export const selectOrganization=(state)=>
state.organization.organization;

export const selectOrganizationDashboard=(state)=>
state.organization.dashboard;

export const selectOrganizationStatistics=(state)=>
state.organization.statistics;

export const selectHierarchy=(state)=>
state.organization.hierarchy;

export const selectLoading=(state)=>
state.organization.loading;

export const selectSaving=(state)=>
state.organization.saving;

export const selectDeleting=(state)=>
state.organization.deleting;

export const selectExporting=(state)=>
state.organization.exporting;

export const selectImporting=(state)=>
state.organization.importing;

export const selectError=(state)=>
state.organization.error;

export const selectSuccess=(state)=>
state.organization.success;

export const selectFilters=(state)=>
state.organization.filters;

export const selectPagination=(state)=>
state.organization.pagination;

export const selectSort=(state)=>
state.organization.sort;

export const selectSelectedRows=(state)=>
state.organization.selectedRows;

/* =======================================================
   DEFAULT EXPORT
======================================================= */

export default organizationSlice.reducer;