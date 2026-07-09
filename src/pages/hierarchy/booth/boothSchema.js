const boothSchema = [

  /* =====================================================
      Hierarchy
  ====================================================== */

  {
    section: "Hierarchy",

    name: "stateCode",

    label: "State",

    type: "select",

    required: true,

    md: 3,

    options: [],

  },

  {
    section: "Hierarchy",

    name: "district",

    label: "District",

    type: "select",

    required: true,

    md: 3,

    options: [],

  },

  {
    section: "Hierarchy",

    name: "tehsil",

    label: "Tehsil",

    type: "autocomplete",

    required: true,

    md: 3,

    api: "/tehsils",

  },

  {
    section: "Hierarchy",

    name: "village",

    label: "Village",

    type: "autocomplete",

    required: true,

    md: 3,

    api: "/villages",

  },

  /* =====================================================
      Booth Information
  ====================================================== */

  {
    section: "Booth Information",

    name: "boothNumber",

    label: "Booth Number",

    type: "number",

    required: true,

    md: 3,

  },

  {
    section: "Booth Information",

    name: "boothName",

    label: "Booth Name",

    type: "text",

    required: true,

    md: 9,

  },

  {
    section: "Booth Information",

    name: "pollingStation",

    label: "Polling Station",

    type: "text",

    required: true,

    md: 12,

  },

  {
    section: "Booth Information",

    name: "pollingAddress",

    label: "Polling Station Address",

    type: "textarea",

    md: 12,

  },

  /* =====================================================
      Voters
  ====================================================== */

  {
    section: "Voter Statistics",

    name: "totalVoters",

    label: "Total Voters",

    type: "number",

    md: 3,

  },

  {
    section: "Voter Statistics",

    name: "maleVoters",

    label: "Male Voters",

    type: "number",

    md: 3,

  },

  {
    section: "Voter Statistics",

    name: "femaleVoters",

    label: "Female Voters",

    type: "number",

    md: 3,

  },

  {
    section: "Voter Statistics",

    name: "otherVoters",

    label: "Other Voters",

    type: "number",

    md: 3,

  },

  /* =====================================================
      Assignment
  ====================================================== */

  {
    section: "Assignment",

    name: "boothPresident",

    label: "Booth President",

    type: "autocomplete",

    api: "/members",

    md: 6,

  },

  {
    section: "Assignment",

    name: "boothIncharge",

    label: "Booth Incharge",

    type: "autocomplete",

    api: "/members",

    md: 6,

  },

  /* =====================================================
      Location
  ====================================================== */

  {
    section: "Location",

    name: "latitude",

    label: "Latitude",

    type: "number",

    md: 6,

  },

  {
    section: "Location",

    name: "longitude",

    label: "Longitude",

    type: "number",

    md: 6,

  },

  /* =====================================================
      Administration
  ====================================================== */

  {
    section: "Administration",

    name: "active",

    label: "Active",

    type: "switch",

    md: 6,

  },

  {
    section: "Administration",

    name: "remarks",

    label: "Remarks",

    type: "textarea",

    md: 12,

  },

];

export default boothSchema;