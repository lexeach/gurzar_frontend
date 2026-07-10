import createService from "./createService";

import ENDPOINTS from "../api/config/endpoints";

const committeeService = createService(

    ENDPOINTS.COMMITTEE

);

export default committeeService;