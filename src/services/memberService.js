import createService from "./createService";

import ENDPOINTS from "../api/config/endpoints";

const memberService = createService(

    ENDPOINTS.MEMBER

);

export default memberService;