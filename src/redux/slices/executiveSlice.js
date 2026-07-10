import { createCrudSlice } from "../../core/crud/createCrudSlice";

const executiveSlice = createCrudSlice({

    name: "executive",

});

export default executiveSlice.reducer;

export const executiveActions =

    executiveSlice.actions;