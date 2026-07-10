import { createCrudSlice } from "../../core/crud/createCrudSlice";

const districtSlice = createCrudSlice({

    name: "state",

});

export default districtSlice.reducer;

export const districtActions = districtSlice.actions;