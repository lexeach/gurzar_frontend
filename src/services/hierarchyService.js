import createService from "./createService";

import ENDPOINTS from "../api/config/endpoints";

const hierarchyService = {

    states: createService(

        ENDPOINTS.STATE

    ),

    districts: createService(

        ENDPOINTS.DISTRICT

    ),

    tehsils: createService(

        ENDPOINTS.TEHSIL

    ),

    villages: createService(

        ENDPOINTS.VILLAGE

    ),

    booths: createService(

        ENDPOINTS.BOOTH

    ),

};

export default hierarchyService;