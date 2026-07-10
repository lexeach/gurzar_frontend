import createService from "./createService";

import ENDPOINTS from "../api/config/endpoints";

const villageService = createService(
    ENDPOINTS.VILLAGE
);

export default villageService;