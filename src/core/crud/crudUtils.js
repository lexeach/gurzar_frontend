/* ============================================================
   Enterprise CRUD Utilities
============================================================ */

/* ============================================================
OBJECT
============================================================ */

export const isEmpty=(value)=>{

if(value===null||value===undefined){

return true;

}

if(typeof value==="string"){

return value.trim()==="";

}

if(Array.isArray(value)){

return value.length===0;

}

if(typeof value==="object"){

return Object.keys(value).length===0;

}

return false;

};

export const clone=(value)=>

JSON.parse(

JSON.stringify(value)

);

/* ============================================================
QUERY
============================================================ */

export const buildQuery=(params={})=>{

const query={};

Object.entries(params).forEach(

([key,value])=>{

if(

value!==undefined&&

value!==null&&

value!==""

){

query[key]=value;

}

}

);

return query;

};

/* ============================================================
SORT
============================================================ */

export const sortData=(

rows=[],

field,

direction="asc"

)=>{

return [...rows].sort(

(a,b)=>{

const x=a[field];

const y=b[field];

if(x===y){

return 0;

}

if(direction==="desc"){

return x>y?-1:1;

}

return x>y?1:-1;

}

);

};

/* ============================================================
FILTER
============================================================ */

export const filterData=(

rows=[],

filters={}

)=>{

return rows.filter(row=>{

return Object.entries(filters)

.every(

([key,value])=>{

if(

value===undefined||

value===null||

value===""

){

return true;

}

return String(

row[key]??""

)

.toLowerCase()

.includes(

String(value)

.toLowerCase()

);

}

);

});

};

/* ============================================================
SEARCH
============================================================ */

export const searchData=(

rows=[],

keyword="",

fields=[]

)=>{

if(!keyword){

return rows;

}

const text=

keyword.toLowerCase();

return rows.filter(row=>

fields.some(field=>

String(

row[field]??""

)

.toLowerCase()

.includes(text)

)

);

};

/* ============================================================
PAGINATION
============================================================ */

export const paginate=(

rows=[],

page=1,

pageSize=20

)=>{

const start=

(page-1)*pageSize;

return{

rows:rows.slice(

start,

start+pageSize

),

total:rows.length,

page,

pageSize,

};

};

/* ============================================================
CSV EXPORT
============================================================ */

export const toCSV=(rows=[])=>{

if(rows.length===0){

return "";

}

const headers=

Object.keys(rows[0]);

const csv=[

headers.join(","),

...rows.map(row=>

headers.map(

h=>`"${row[h]??""}"`

).join(",")

),

];

return csv.join("\n");

};

/* ============================================================
DOWNLOAD
============================================================ */

export const downloadFile=(

content,

filename,

type="text/plain"

)=>{

const blob=

new Blob(

[content],

{type}

);

const url=

URL.createObjectURL(blob);

const link=

document.createElement("a");

link.href=url;

link.download=filename;

link.click();

URL.revokeObjectURL(url);

};

/* ============================================================
DEBOUNCE
============================================================ */

export const debounce=(

callback,

delay=300

)=>{

let timer;

return(...args)=>{

clearTimeout(timer);

timer=setTimeout(

()=>callback(...args),

delay

);

};

};

/* ============================================================
THROTTLE
============================================================ */

export const throttle=(

callback,

delay=300

)=>{

let waiting=false;

return(...args)=>{

if(waiting){

return;

}

callback(...args);

waiting=true;

setTimeout(()=>{

waiting=false;

},delay);

};

};

/* ============================================================
DATE
============================================================ */

export const formatDate=(

value,

locale="en-IN"

)=>{

if(!value){

return "";

}

return new Date(value)

.toLocaleDateString(locale);

};

/* ============================================================
STATUS
============================================================ */

export const statusColor=(status)=>{

switch(

String(status)

.toUpperCase()

){

case"ACTIVE":

return"success";

case"INACTIVE":

return"warning";

case"PENDING":

return"info";

case"REJECTED":

return"error";

default:

return"default";

}

};

/* ============================================================
UUID
============================================================ */

export const uuid=()=>{

return crypto.randomUUID();

};

/* ============================================================
EXPORT
============================================================ */

export default{

isEmpty,

clone,

buildQuery,

sortData,

filterData,

searchData,

paginate,

toCSV,

downloadFile,

debounce,

throttle,

formatDate,

statusColor,

uuid,

};