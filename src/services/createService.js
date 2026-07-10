import createCrudService from "../core/crud/createCrudService";

import ENDPOINTS from "../api/config/endpoints";


const createService = (endpoint) => {

    return createCrudService(endpoint);

};

export default createService;