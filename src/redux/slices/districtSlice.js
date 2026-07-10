import { createCrudSlice } from "../../core/crud/createCrudSlice";

const districtSlice = createCrudSlice({

    name: "district",

});

export default districtSlice.reducer;

export const districtActions = districtSlice.actions;