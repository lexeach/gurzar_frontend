import { createCrudSlice } from "../../core/crud/createCrudSlice";

const districtSlice = createCrudSlice({

    name: "village",

});

export default districtSlice.reducer;

export const districtActions = districtSlice.actions;