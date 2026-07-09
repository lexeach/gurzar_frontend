import api from "./api";

/**
 * Committee Service
 *
 * Expected API Endpoints
 *
 * Committee
 * GET    /committees
 * GET    /committees/:id
 * POST   /committees
 * PUT    /committees/:id
 * DELETE /committees/:id
 *
 * Members
 * GET    /committees/:id/members
 * POST   /committees/:id/members
 * DELETE /committees/:id/members/:memberId
 *
 * Meetings
 * GET    /committees/:id/meetings
 * POST   /committees/:id/meetings
 * PUT    /committees/:id/meetings/:meetingId
 * DELETE /committees/:id/meetings/:meetingId
 *
 * Tasks
 * GET    /committees/:id/tasks
 * POST   /committees/:id/tasks
 * PUT    /committees/:id/tasks/:taskId
 * DELETE /committees/:id/tasks/:taskId
 *
 * Dashboard
 * GET    /committees/:id/dashboard
 */

const BASE_URL = "/committees";

const committeeService = {

  /* ==========================================================
      Committee CRUD
  ========================================================== */

  async getAll(params = {}) {

    const response = await api.get(BASE_URL, {
      params,
    });

    return response.data;

  },

  async getById(id) {

    const response = await api.get(
      `${BASE_URL}/${id}`
    );

    return response.data;

  },

  async create(payload) {

    const response = await api.post(
      BASE_URL,
      payload
    );

    return response.data;

  },

  async update(payload) {

    const response = await api.put(
      `${BASE_URL}/${payload.id}`,
      payload
    );

    return response.data;

  },

  async remove(id) {

    const response = await api.delete(
      `${BASE_URL}/${id}`
    );

    return response.data;

  },

  /* ==========================================================
      Members
  ========================================================== */

  async getMembers(id) {

    const response = await api.get(
      `${BASE_URL}/${id}/members`
    );

    return response.data;

  },

  async assignMember(id, payload) {

    const response = await api.post(
      `${BASE_URL}/${id}/members`,
      payload
    );

    return response.data;

  },

  async removeMember(id, memberId) {

    const response = await api.delete(
      `${BASE_URL}/${id}/members/${memberId}`
    );

    return response.data;

  },

  /* ==========================================================
      Meetings
  ========================================================== */

  async getMeetings(id) {

    const response = await api.get(
      `${BASE_URL}/${id}/meetings`
    );

    return response.data;

  },

  async createMeeting(id, payload) {

    const response = await api.post(
      `${BASE_URL}/${id}/meetings`,
      payload
    );

    return response.data;

  },

  async updateMeeting(id, meetingId, payload) {

    const response = await api.put(
      `${BASE_URL}/${id}/meetings/${meetingId}`,
      payload
    );

    return response.data;

  },

  async deleteMeeting(id, meetingId) {

    const response = await api.delete(
      `${BASE_URL}/${id}/meetings/${meetingId}`
    );

    return response.data;

  },

  /* ==========================================================
      Tasks
  ========================================================== */

  async getTasks(id) {

    const response = await api.get(
      `${BASE_URL}/${id}/tasks`
    );

    return response.data;

  },

  async createTask(id, payload) {

    const response = await api.post(
      `${BASE_URL}/${id}/tasks`,
      payload
    );

    return response.data;

  },

  async updateTask(id, taskId, payload) {

    const response = await api.put(
      `${BASE_URL}/${id}/tasks/${taskId}`,
      payload
    );

    return response.data;

  },

  async deleteTask(id, taskId) {

    const response = await api.delete(
      `${BASE_URL}/${id}/tasks/${taskId}`
    );

    return response.data;

  },

  /* ==========================================================
      Dashboard
  ========================================================== */

  async getDashboard(id) {

    const response = await api.get(
      `${BASE_URL}/${id}/dashboard`
    );

    return response.data;

  },

  /* ==========================================================
      Reports
  ========================================================== */

  async getStatistics(id) {

    const response = await api.get(
      `${BASE_URL}/${id}/statistics`
    );

    return response.data;

  },

  async exportCommittee(id, params = {}) {

    const response = await api.get(
      `${BASE_URL}/${id}/export`,
      {
        params,
        responseType: "blob",
      }
    );

    return response.data;

  },

  /* ==========================================================
      Bulk Operations
  ========================================================== */

  async bulkDelete(ids) {

    const response = await api.post(
      `${BASE_URL}/bulk-delete`,
      { ids }
    );

    return response.data;

  },

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

};

export default committeeService;