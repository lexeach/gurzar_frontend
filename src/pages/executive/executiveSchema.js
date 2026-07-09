const executiveSchema = [

/* ===========================================
   Member Information
=========================================== */

{
section:"Member Information",

name:"member",

label:"Member",

type:"autocomplete",

required:true,

api:"/members",

md:6,
},

{
section:"Member Information",

name:"photo",

label:"Photo",

type:"image",

md:6,
},

/* ===========================================
   Organization
=========================================== */

{
section:"Organization",

name:"level",

label:"Organization Level",

type:"select",

required:true,

md:4,

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
section:"Organization",

name:"designation",

label:"Designation",

type:"select",

required:true,

md:4,

options:[

{label:"President",value:"PRESIDENT"},
{label:"Vice President",value:"VICE_PRESIDENT"},
{label:"General Secretary",value:"GENERAL_SECRETARY"},
{label:"Secretary",value:"SECRETARY"},
{label:"Joint Secretary",value:"JOINT_SECRETARY"},
{label:"Treasurer",value:"TREASURER"},
{label:"Coordinator",value:"COORDINATOR"},
{label:"Member",value:"MEMBER"},
],

},

{
section:"Organization",

name:"department",

label:"Department",

type:"select",

md:4,

options:[

{label:"Organization",value:"ORG"},
{label:"Youth Wing",value:"YOUTH"},
{label:"Women Wing",value:"WOMEN"},
{label:"Minority Wing",value:"MINORITY"},
{label:"IT Cell",value:"IT"},
{label:"Media Cell",value:"MEDIA"},
{label:"Legal Cell",value:"LEGAL"},
{label:"Election Management",value:"ELECTION"},
{label:"Training",value:"TRAINING"},

],

},

/* ===========================================
   Jurisdiction
=========================================== */

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

/* ===========================================
   Reporting
=========================================== */

{
section:"Reporting",

name:"reportsTo",

label:"Reports To",

type:"autocomplete",

api:"/executives",

md:6,
},

{
section:"Reporting",

name:"appointmentType",

label:"Appointment Type",

type:"select",

md:6,

options:[

{label:"Elected",value:"ELECTED"},
{label:"Nominated",value:"NOMINATED"},
{label:"Temporary",value:"TEMPORARY"},
{label:"Additional Charge",value:"ADDITIONAL"},

],

},

/* ===========================================
   Appointment
=========================================== */

{
section:"Appointment",

name:"appointmentOrder",

label:"Appointment Order No",

type:"text",

md:4,
},

{
section:"Appointment",

name:"appointmentDate",

label:"Appointment Date",

type:"date",

md:4,
},

{
section:"Appointment",

name:"termEndDate",

label:"Term End",

type:"date",

md:4,
},

/* ===========================================
   Contact
=========================================== */

{
section:"Contact",

name:"officialMobile",

label:"Official Mobile",

type:"text",

md:4,
},

{
section:"Contact",

name:"officialEmail",

label:"Official Email",

type:"email",

md:4,
},

{
section:"Contact",

name:"whatsapp",

label:"WhatsApp",

type:"text",

md:4,
},

/* ===========================================
   Performance
=========================================== */

{
section:"Performance",

name:"target",

label:"Target",

type:"number",

md:3,
},

{
section:"Performance",

name:"achievement",

label:"Achievement",

type:"number",

md:3,
},

{
section:"Performance",

name:"rating",

label:"Rating",

type:"slider",

md:6,
},

/* ===========================================
   Administration
=========================================== */

{
section:"Administration",

name:"active",

label:"Active",

type:"switch",

md:6,
},

{
section:"Administration",

name:"remarks",

label:"Remarks",

type:"textarea",

md:12,
},

];

export default executiveSchema;