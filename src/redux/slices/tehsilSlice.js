import { createCrudSlice } from "../../core/crud/createCrudSlice";

const tehsilSlice = createCrudSlice({

    name: "tehsil",

});

export default tehsilSlice.reducer;

export const tehsilActions =

    tehsilSlice.actions;