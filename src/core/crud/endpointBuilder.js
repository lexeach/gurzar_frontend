/* ============================================================
   Enterprise Endpoint Builder
   ------------------------------------------------------------
   Generates all REST endpoints dynamically.
============================================================ */

const DEFAULT_ENDPOINTS={

list:"",

get:":id",

create:"",

update:":id",

patch:":id",

remove:":id",

bulkDelete:"bulk-delete",

activate:"activate",

deactivate:"deactivate",

restore:"restore",

search:"search",

filter:"filter",

count:"count",

exists:":id/exists",

dashboard:"dashboard",

summary:"summary",

statistics:"statistics",

analytics:"analytics",

report:"report",

history:":id/history",

audit:":id/audit",

activity:":id/activity",

timeline:":id/timeline",

logs:"logs",

metrics:"metrics",

insights:"insights",

upload:"upload",

uploadMultiple:"upload-multiple",

download:":id/download",

downloadTemplate:"template",

import:"import",

export:"export",

status:":id/status",

health:"health",

ping:"ping",

version:"version",

};

/* ============================================================
   Replace Parameters
============================================================ */

const buildPath=(resource,path,params={})=>{

let endpoint=path;

Object.keys(params).forEach(key=>{

endpoint=

endpoint.replace(

`:${key}`,

params[key]

);

});

if(endpoint){

return `${resource}/${endpoint}`;

}

return resource;

};

/* ============================================================
   Factory
============================================================ */

const createEndpoint=(

resource,

custom={}

)=>{

const endpoints={

...DEFAULT_ENDPOINTS,

...custom,

};

return{

list:()=>

buildPath(

resource,

endpoints.list

),

get:(id)=>

buildPath(

resource,

endpoints.get,

{id}

),

create:()=>

buildPath(

resource,

endpoints.create

),

update:(id)=>

buildPath(

resource,

endpoints.update,

{id}

),

patch:(id)=>

buildPath(

resource,

endpoints.patch,

{id}

),

remove:(id)=>

buildPath(

resource,

endpoints.remove,

{id}

),

bulkDelete:()=>

buildPath(

resource,

endpoints.bulkDelete

),

activate:()=>

buildPath(

resource,

endpoints.activate

),

deactivate:()=>

buildPath(

resource,

endpoints.deactivate

),

restore:()=>

buildPath(

resource,

endpoints.restore

),

search:()=>

buildPath(

resource,

endpoints.search

),

filter:()=>

buildPath(

resource,

endpoints.filter

),

count:()=>

buildPath(

resource,

endpoints.count

),

exists:(id)=>

buildPath(

resource,

endpoints.exists,

{id}

),

dashboard:()=>

buildPath(

resource,

endpoints.dashboard

),

summary:()=>

buildPath(

resource,

endpoints.summary

),

statistics:()=>

buildPath(

resource,

endpoints.statistics

),

analytics:()=>

buildPath(

resource,

endpoints.analytics

),

report:()=>

buildPath(

resource,

endpoints.report

),

history:(id)=>

buildPath(

resource,

endpoints.history,

{id}

),

audit:(id)=>

buildPath(

resource,

endpoints.audit,

{id}

),

activity:(id)=>

buildPath(

resource,

endpoints.activity,

{id}

),

timeline:(id)=>

buildPath(

resource,

endpoints.timeline,

{id}

),

logs:()=>

buildPath(

resource,

endpoints.logs

),

metrics:()=>

buildPath(

resource,

endpoints.metrics

),

insights:()=>

buildPath(

resource,

endpoints.insights

),

upload:()=>

buildPath(

resource,

endpoints.upload

),

uploadMultiple:()=>

buildPath(

resource,

endpoints.uploadMultiple

),

download:(id)=>

buildPath(

resource,

endpoints.download,

{id}

),

downloadTemplate:()=>

buildPath(

resource,

endpoints.downloadTemplate

),

import:()=>

buildPath(

resource,

endpoints.import

),

export:()=>

buildPath(

resource,

endpoints.export

),

status:(id)=>

buildPath(

resource,

endpoints.status,

{id}

),

health:()=>

buildPath(

resource,

endpoints.health

),

ping:()=>

buildPath(

resource,

endpoints.ping

),

version:()=>

buildPath(

resource,

endpoints.version

),

};

};

export default createEndpoint;