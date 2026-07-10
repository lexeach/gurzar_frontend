import createService from "./createService";

import ENDPOINTS from "../api/config/endpoints";

const organizationService = createService(

    ENDPOINTS.ORGANIZATION

);

export default organizationService;