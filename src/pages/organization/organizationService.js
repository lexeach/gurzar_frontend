import api from "../../api";

/**
 * Organization Service
 *
 * Expected API Endpoints
 *
 * GET    /organization/tree
 * GET    /organization/nodes/:id/children
 * GET    /organization/search
 * GET    /organization/vacancies
 * POST   /organization/move
 * POST   /organization/assign-manager
 * GET    /organization/export
 */

const BASE_URL = "/organization";

const organizationService = {

  /**
   * Get complete organization tree
   */
  async getTree(params = {}) {

    const response = await api.get(

      `${BASE_URL}/tree`,

      {

        params,

      }

    );

    return response.data;

  },

  /**
   * Lazy load children
   */
  async getChildren(nodeId) {

    const response = await api.get(

      `${BASE_URL}/nodes/${nodeId}/children`

    );

    return response.data;

  },

  /**
   * Search executives
   */
  async searchExecutives(keyword) {

    const response = await api.get(

      `${BASE_URL}/search`,

      {

        params: {

          keyword,

        },

      }

    );

    return response.data;

  },

  /**
   * Transfer Executive
   */
  async moveExecutive(payload) {

    const response = await api.post(

      `${BASE_URL}/move`,

      payload

    );

    return response.data;

  },

  /**
   * Change Reporting Manager
   */
  async assignReportingManager(payload) {

    const response = await api.post(

      `${BASE_URL}/assign-manager`,

      payload

    );

    return response.data;

  },

  /**
   * Vacant Positions
   */
  async getVacantPositions(params = {}) {

    const response = await api.get(

      `${BASE_URL}/vacancies`,

      {

        params,

      }

    );

    return response.data;

  },

  /**
   * Export Organization
   */
  async exportTree(params = {}) {

    const response = await api.get(

      `${BASE_URL}/export`,

      {

        params,

        responseType: "blob",

      }

    );

    return response.data;

  },

};

export default organizationService;