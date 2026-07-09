import {
  states,
} from "../../../constants/states";

import {
  districts,
} from "../../../constants/districts";

const villageSchema = [

  {
    section: "Hierarchy",

    name: "stateCode",

    label: "State",

    type: "select",

    required: true,

    md: 4,

    options: states.map((item) => ({

      label: item.name,

      value: item.code,

    })),

  },

  {
    section: "Hierarchy",

    name: "district",

    label: "District",

    type: "select",

    required: true,

    md: 4,

    options: [],

  },

  {
    section: "Hierarchy",

    name: "tehsil",

    label: "Tehsil",

    type: "autocomplete",

    required: true,

    md: 4,

    api: "/tehsils",

  },

  {
    section: "Village Information",

    name: "villageCode",

    label: "Village Code",

    type: "text",

    md: 4,

    maxLength: 20,

  },

  {
    section: "Village Information",

    name: "villageName",

    label: "Village Name",

    type: "text",

    required: true,

    md: 8,

    maxLength: 150,

  },

  {
    section: "Village Information",

    name: "hindiName",

    label: "Village Name (Hindi)",

    type: "text",

    md: 6,

  },

  {
    section: "Village Information",

    name: "pincode",

    label: "PIN Code",

    type: "number",

    md: 3,

  },

  {
    section: "Village Information",

    name: "population",

    label: "Population",

    type: "number",

    md: 3,

  },

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

export default villageSchema;