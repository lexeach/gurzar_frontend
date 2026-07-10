import { createCrudSlice } from "../../core/crud/createCrudSlice";

const districtSlice = createCrudSlice({

    name: "booth",

});

export default districtSlice.reducer;

export const districtActions = districtSlice.actions;