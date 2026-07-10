import api from "../../../api";

/**
 * Village Service
 *
 * Expected API Endpoints
 *
 * GET    /villages
 * GET    /villages/:id
 * POST   /villages
 * PUT    /villages/:id
 * DELETE /villages/:id
 */

const BASE_URL = "/villages";

const villageService = {

  /**
   * Get Village List
   *
   * params:
   * page
   * limit
   * search
   * stateCode
   * district
   * tehsil
   * active
   */

  async getAll(params = {}) {

    const response = await api.get(

      BASE_URL,

      {
        params,
      }

    );

    return response.data;

  },

  /**
   * Get Village Details
   */

  async getById(id) {

    const response = await api.get(

      `${BASE_URL}/${id}`

    );

    return response.data;

  },

  /**
   * Create Village
   */

  async create(payload) {

    const response = await api.post(

      BASE_URL,

      payload

    );

    return response.data;

  },

  /**
   * Update Village
   */

  async update(payload) {

    const response = await api.put(

      `${BASE_URL}/${payload.id}`,

      payload

    );

    return response.data;

  },

  /**
   * Delete Village
   */

  async remove(id) {

    const response = await api.delete(

      `${BASE_URL}/${id}`

    );

    return response.data;

  },

  /**
   * Change Status
   */

  async changeStatus(id, active) {

    const response = await api.patch(

      `${BASE_URL}/${id}/status`,

      {

        active,

      }

    );

    return response.data;

  },

  /**
   * Bulk Delete
   */

  async bulkDelete(ids) {

    const response = await api.post(

      `${BASE_URL}/bulk-delete`,

      {

        ids,

      }

    );

    return response.data;

  },

  /**
   * Import Excel
   */

  async importExcel(formData) {

    const response = await api.post(

      `${BASE_URL}/import`,

      formData,

      {

        headers: {

          "Content-Type":

            "multipart/form-data",

        },

      }

    );

    return response.data;

  },

  /**
   * Export Excel
   */

  async exportExcel(params = {}) {

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

export default villageService;