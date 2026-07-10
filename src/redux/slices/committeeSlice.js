import { createCrudSlice } from "../../core/crud/createCrudSlice";

const committeeSlice = createCrudSlice({

    name: "committee",

});

export default committeeSlice.reducer;

export const committeeActions =

    committeeSlice.actions;