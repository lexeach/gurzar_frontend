import createService from "./createService";

import ENDPOINTS from "../api/config/endpoints";

const executiveService = createService(

    ENDPOINTS.EXECUTIVE

);

export default executiveService;