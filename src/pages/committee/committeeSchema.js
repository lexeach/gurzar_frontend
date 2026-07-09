const committeeSchema = [

/* ======================================
   Committee Information
====================================== */

{
section:"Committee",

name:"committeeName",

label:"Committee Name",

type:"text",

required:true,

md:6,
},

{
section:"Committee",

name:"level",

label:"Committee Level",

type:"select",

required:true,

md:3,

options:[

{label:"National",value:"NATIONAL"},
{label:"State",value:"STATE"},
{label:"District",value:"DISTRICT"},
{label:"Tehsil",value:"TEHSIL"},
{label:"Village",value:"VILLAGE"},
{label:"Booth",value:"BOOTH"},

],

},

{
section:"Committee",

name:"committeeType",

label:"Committee Type",

type:"select",

required:true,

md:3,

options:[

{label:"Core Committee",value:"CORE"},
{label:"Executive Committee",value:"EXECUTIVE"},
{label:"Election Committee",value:"ELECTION"},
{label:"Campaign Committee",value:"CAMPAIGN"},
{label:"IT Committee",value:"IT"},
{label:"Media Committee",value:"MEDIA"},
{label:"Women Committee",value:"WOMEN"},
{label:"Youth Committee",value:"YOUTH"},

],

},

/* ======================================
   Jurisdiction
====================================== */

{
section:"Jurisdiction",

name:"stateCode",

label:"State",

type:"select",

md:3,

options:[],
},

{
section:"Jurisdiction",

name:"district",

label:"District",

type:"select",

md:3,

options:[],
},

{
section:"Jurisdiction",

name:"tehsil",

label:"Tehsil",

type:"autocomplete",

api:"/tehsils",

md:3,
},

{
section:"Jurisdiction",

name:"village",

label:"Village",

type:"autocomplete",

api:"/villages",

md:3,
},

{
section:"Jurisdiction",

name:"booth",

label:"Booth",

type:"autocomplete",

api:"/booths",

md:6,
},

/* ======================================
   Leadership
====================================== */

{
section:"Leadership",

name:"president",

label:"President",

type:"autocomplete",

api:"/executives",

required:true,

md:6,
},

{
section:"Leadership",

name:"vicePresident",

label:"Vice President",

type:"autocomplete",

api:"/executives",

md:6,
},

{
section:"Leadership",

name:"secretary",

label:"Secretary",

type:"autocomplete",

api:"/executives",

md:6,
},

{
section:"Leadership",

name:"treasurer",

label:"Treasurer",

type:"autocomplete",

api:"/executives",

md:6,
},

/* ======================================
   Administration
====================================== */

{
section:"Administration",

name:"formationDate",

label:"Formation Date",

type:"date",

md:4,
},

{
section:"Administration",

name:"termEndDate",

label:"Term End Date",

type:"date",

md:4,
},

{
section:"Administration",

name:"active",

label:"Active",

type:"switch",

md:4,
},

{
section:"Administration",

name:"remarks",

label:"Remarks",

type:"textarea",

md:12,
},

];

export default committeeSchema;