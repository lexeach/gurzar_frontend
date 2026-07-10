import { createCrudSlice } from "../../core/crud/createCrudSlice";

const reportsSlice = createCrudSlice({

    name: "reports",

});

export default reportsSlice.reducer;

export const reportsActions =

    reportsSlice.actions;