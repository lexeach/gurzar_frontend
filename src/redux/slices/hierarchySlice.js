import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    selectedState: null,

    selectedDistrict: null,

    selectedTehsil: null,

    selectedVillage: null,

    selectedBooth: null,

};

const hierarchySlice = createSlice({

    name: "hierarchy",

    initialState,

    reducers: {

        setStateLevel: (state, action) => {

            state.selectedState = action.payload;

        },

        setDistrictLevel: (state, action) => {

            state.selectedDistrict = action.payload;

        },

        setTehsilLevel: (state, action) => {

            state.selectedTehsil = action.payload;

        },

        setVillageLevel: (state, action) => {

            state.selectedVillage = action.payload;

        },

        setBoothLevel: (state, action) => {

            state.selectedBooth = action.payload;

        },

        resetHierarchy: () => initialState,

    },

});

export const {

    setStateLevel,

    setDistrictLevel,

    setTehsilLevel,

    setVillageLevel,

    setBoothLevel,

    resetHierarchy,

} = hierarchySlice.actions;

export default hierarchySlice.reducer;