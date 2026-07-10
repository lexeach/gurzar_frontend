import { createCrudSlice } from "../../core/crud/createCrudSlice";

const documentSlice = createCrudSlice({

    name: "document",

});

export default documentSlice.reducer;

export const documentActions =

    documentSlice.actions;