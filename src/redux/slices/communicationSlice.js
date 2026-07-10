import { createCrudSlice } from "../../core/crud/createCrudSlice";

const communicationSlice = createCrudSlice({

    name: "communication",

});

export default communicationSlice.reducer;

export const communicationActions =

    communicationSlice.actions;